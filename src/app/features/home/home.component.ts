import { Component, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/core/models/page.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    pages: IPage[] = [
        { 
            icon: faComment,
            path: 'chats', 
            title: 'Chats'
        }
    ];

    constructor() {

    }

    ngOnInit(): void {
        
    }
}
