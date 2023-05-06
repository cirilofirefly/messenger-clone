import { Component, Input } from '@angular/core';
import { ICommunity } from 'src/app/core/models/community.model';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent {
    
    isToggle: boolean = true;
    manageState: boolean = false;

    @Input() communities: ICommunity[] = [];

    constructor(private toggleService: ToggleService) {
        this.toggleService.getSidebarToggleState().subscribe((state) => {
            this.isToggle = state

            if(!this.isToggle) this.manageState = false;
        })
    }

    manageGroup() {
        this.manageState = !this.manageState
        this.communities = this.communities.map((community) => {
            return {
                ...community,
                checked: this.manageState
            }
        })
    }

    toggleCheckBox(index: number) {
        this.communities[index].checked = !this.communities[index].checked
    }
}
