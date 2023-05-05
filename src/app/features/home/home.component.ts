import { Component, OnInit } from '@angular/core';
import { faComment, faUserFriends, faStore, faCommentDots, faArchive } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/core/models/page.model';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    isToggle: boolean = true;

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
            title: 'Markerplace'
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

    ngOnInit(): void {}
}
