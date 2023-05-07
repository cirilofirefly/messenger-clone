import { Component } from '@angular/core';
import { CommonService } from './core/services/common.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private commonService: CommonService) {
        this.commonService.setPageTile('Messenger Clone');
    }
}
