import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, combineLatest } from 'rxjs/operators';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { Thread } from './thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: Observable<{ [key: string]: Thread }>
  orderedThread: Observable<Thread[]>
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread)
  //currentThreadMessage: Observable<Message[]>

  constructor(private messageService: MessageService) {
    this.threads = messageService.messages
      .pipe(map((messages: Message[]) => {
        const threads: { [key: string]: Thread } = {};
        messages.map((message: Message) => {
          threads[message.thread.id] = threads[message.thread.id] || message.thread;

          const messagesThread: Thread = threads[message.thread.id];
          if (!messagesThread.lastMessage || messagesThread.lastMessage.sentAt < message.sentAt) {
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      }))

    this.orderedThread = this.threads.pipe(
      map((threadGroups: { [key: string]: Thread }) => {
        const threads: Thread[] = _.values(threadGroups)
        return _.sortBy(threads, (t: Thread) => t.lastMessage?.sentAt).reverse()
      })
    )

    // this.currentThread.subscribe(this.messageService.markThreadAsread);

    // this.currentThreadMessage = combineLatest(
    //   this.currentThread,
    //   messageService.messages
    // ).pipe(
    //   map((currentThread: Thread, messages: Message[]) => {})
    // )
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }
}
