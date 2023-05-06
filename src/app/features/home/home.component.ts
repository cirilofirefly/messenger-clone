import { Component, OnInit } from '@angular/core';
import { faComment, faUserFriends, faStore, faCommentDots, faArchive } from '@fortawesome/free-solid-svg-icons';
import { ICommunity } from 'src/app/core/models/community.model';
import { IPage } from 'src/app/core/models/page.model';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    isToggle: boolean = true;
    hasThread: boolean = false;

    communities: ICommunity[] = [
        {
            id: 1,
            group_name: 'Lorem ipsum dolor sit qwewqe qweqweqweqweqw eqweqw e',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 2,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 3,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 4,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 5,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 6,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 7,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 8,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 9,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 10,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        },
        {
            id: 11,
            group_name: 'Lorem ipsum dolor sit qwe',
            group_photo: 'https://picsum.photos/28/28'
        }
    ]

    pages: IPage[] = [
        { 
            icon: faComment,
            path: '/t', 
            title: 'Chats'
        },
        { 
            icon: faUserFriends,
            path: '/active', 
            title: 'People'
        },
        { 
            icon: faStore,
            path: '/marketplace', 
            title: 'Marketplace'
        },
        { 
            icon: faCommentDots,
            path: '/requests', 
            title: 'Requests'
        },
        { 
            icon: faArchive,
            path: '/archived', 
            title: 'Archive'
        },
    ];

    constructor(private toggleService: ToggleService) {
        this.toggleService.getSidebarToggleState().subscribe((state) => {
            this.isToggle = state;
        })
    }

    ngOnInit(): void {
        this.getCommunities();
    }


    getCommunities() {
        
    }
}
