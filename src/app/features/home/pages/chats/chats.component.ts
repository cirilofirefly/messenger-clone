import { Component, OnInit } from '@angular/core';
import { faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

    faVideo = faVideo;
    faPlus = faPlus;

    constructor() {}

    ngOnInit(): void {}

    searchOnThread(searchInput: string) {
        console.log(searchInput)
    }
}
