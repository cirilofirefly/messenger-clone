import { Component, Input, OnInit } from '@angular/core';
import { IPage } from 'src/app/core/models/page.model';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() pages: IPage[] = [];

    isToggle: boolean = true;

    constructor(private toggleService: ToggleService) {
        this.toggleService.getSidebarToggleState().subscribe((state) => {
            this.isToggle = state
        })
    }

    ngOnInit(): void {}
}
