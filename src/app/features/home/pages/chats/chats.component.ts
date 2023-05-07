import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faVideo, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { EMessageType, EThreadType, IThread } from 'src/app/core/models/thread.model';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

    faVideo = faVideo;
    faPlus = faPlus;
    faSearch = faSearch;

    threadId: string = '';

    threads: IThread[] = [
        {
            id: 1,
            latest_message: 'Ywa ka',
            participants: [
                {
                    user_id: 1,
                    profile_picture: 'https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-1/322190337_896483968050324_3316010229086617587_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeF_uepCFauEAShyGMPy_XHNg-mHTJjLs1uD6YdMmMuzW9cISxCjTtBhztEbEABlUQ5kwzWAjLW3Lh_caT2zKq9c&_nc_ohc=H86SkC1XtNcAX9jGs3E&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfBA_krHgpZHrl_Rm-crsVCNQy4EFD0wFwbMpHDQA_T3KQ&oe=645C53A6'
                },
                {
                    user_id: 2,
                    profile_picture: ''
                }
            ],
            messages: [
                {
                    thread_id: 1,
                    user_id: 1,
                    message: 'Test message',
                    type: EMessageType.PLAIN_TEXT
                }
            ],
            type: EThreadType.END_TO_END
        },
        {
            id: 2,
            latest_message: 'Ywa ka',
            group_name: 'MAPA BATOK KA?',
            group_photo: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/252350714_567873834297675_6775037774511447000_n.jpg?stp=dst-jpg_p64x64&_nc_cat=104&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeHKa8Y1OT9jCq5_U3VsY8y3PAr4qXMI2TE8CvipcwjZMQZIY2W3YJdpL4W5tGfxmYAPVxE5pfrvc4nI7T_cmGys&_nc_ohc=-6J85pCbWzAAX89eDZ4&_nc_ht=scontent.fmnl4-1.fna&oh=03_AdRdj992FbhQ69ewP6Jm8vDmxBr_J0KGvqRBChUV1BjvFg&oe=647E747E',
            participants: [
                {
                    user_id: 1,
                    profile_picture: ''
                },
                {
                    user_id: 2,
                    profile_picture: ''
                },
                {
                    user_id: 3,
                    profile_picture: ''
                }
            ],
            messages: [],
            type: EThreadType.GROUP
        },
    ];
    
    searchInput: string = '';

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.paramMap.subscribe(params => { 
            let threadId = params.get('threadId');
            if(threadId) this.threadId = threadId;
        });
    }

    ngOnInit(): void {}

    searchOnThread(searchInput: string) {
        this.searchInput = searchInput
    }
}
