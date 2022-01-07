import { Message } from "../message/message.model";
import { MessageService } from "../message/message.service";
import { User } from "../user/user.model";
import { Thread } from "./thread.model";
import { ThreadService } from "./thread.service";
import * as _ from 'lodash';

describe('ThreadService', () => {
    it('should collect the Threads fro Messages', () => {
        const nate: User = new User('Nate Murray', '');
        const felipe: User = new User('Felipe Coury', '');

        const t1: Thread = new Thread('t1', 'Thread 1', '');
        const t2: Thread = new Thread('t2', 'Thread 2', '');

        const m1: Message = new Message({
            author: nate,
            text: 'H1',
            thread: t1
        })
        const m2: Message = new Message({
            author: felipe,
            text: 'Where did you get that hat',
            thread: t1
        })
        const m3: Message = new Message({
            author: nate,
            text: 'Did you bring the briefcase',
            thread: t2
        })

        const messageService: MessageService = new MessageService();
        const threadService: ThreadService = new ThreadService(messageService);

        threadService.threads.subscribe((threadIdx: { [key: string]: Thread }) => {
            const threads: Thread[] = _.values(threadIdx);
            const threadNames: string = _.map(threads, (t: Thread) => t.name).join(',');
            console.log(`=> threads (${threads.length}): (${threadNames})`)
        });

        messageService.addmessages(m1);
        messageService.addmessages(m2);
        messageService.addmessages(m3);
    })
});
