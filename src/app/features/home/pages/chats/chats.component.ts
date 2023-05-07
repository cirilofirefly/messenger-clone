import { Component, OnInit } from '@angular/core';
import { faVideo, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

    faVideo = faVideo;
    faPlus = faPlus;
    faSearch = faSearch;

    searchInput: string = '';

    constructor() {}

    ngOnInit(): void {}

    searchOnThread(searchInput: string) {
        this.searchInput = searchInput
    }
}
