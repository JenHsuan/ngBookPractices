import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';
import { MessageService } from './message.service';

describe('MessageService', () => {
    it('should test', () => {
        const user: User = new User('Nate', '');
        const thread: Thread = new Thread('t1', 'Nate', '');
        const m1: Message = new Message({
            author: user,
            text: 'Hi!',
            thread: thread
        })
        const m2: Message = new Message({
            author: user,
            text: 'Bye!',
            thread: thread
        })

        const messageService: MessageService = new MessageService();

        messageService.newMessages
            .subscribe((message: Message) => {
                console.log('=> newMessages: ' + message.text);
            })

        messageService.messages
            .subscribe((messages: Message[]) => {
                console.log('=> messages: ' + messages.length);
            })

        messageService.addmessages(m1);
        messageService.addmessages(m2);
    })
})
