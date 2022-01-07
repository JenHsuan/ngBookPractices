import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, filter, scan, publishReplay, refCount} from 'rxjs/operators';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

const initialMessages: Message[] = [];

interface IMessagesOperation {
  (messages: Message[]): Message[]
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();
  markThreadAsread: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates.pipe(
      scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages)
      }, initialMessages),
      publishReplay(1),
      refCount()
    )

    this.create.pipe(
      map((message: Message): IMessagesOperation => {
        return (messages: Message[]) => {
          return messages.concat(message)
        }
      }))
      .subscribe(this.updates);

    this.newMessages
      .subscribe(this.create);

    this.markThreadAsread.pipe(
      map((thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map((message: Message) => {
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        }
      }))
      .subscribe(this.updates);
  }

  addmessages(newMessage: Message) {
    this.updates.next((messages: Message[]) => {
      return messages.concat(newMessage);
    })
  }
  messageForThreadUser(thread: Thread, user: User): Observable<Message>{
    return this.newMessages.pipe(
      filter((message: Message) => {
        return (message.thread.id === thread.id) && (message.author.id !== user.id);
      })
    )
  }
}
