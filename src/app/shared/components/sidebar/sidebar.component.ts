import { Component, Input, OnInit } from '@angular/core';
import { IPage } from 'src/app/core/models/page.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() pages: IPage[] = [];

    constructor() {
        console.log(this.pages)
    }

    ngOnInit(): void {}
}
