import { Component, Input } from '@angular/core';
import { EThreadType, IThread } from 'src/app/core/models/thread.model';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {

    faEllipsis = faEllipsis;

    @Input() threads: IThread[] = [];

    constructor() {}

    getThreadPhoto(thread: IThread) {
        if(thread.type == EThreadType.END_TO_END) return thread.participants[0].profile_picture;
        return thread.group_photo
    }

    getThreadName(thread: IThread) {
        if(thread.type == EThreadType.END_TO_END) return thread.participants[0].user_id;
        return thread?.group_name ?? thread.participants.map((participant) => participant.user_id).join(',')
    }
}
