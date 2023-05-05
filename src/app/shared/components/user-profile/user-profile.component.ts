import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

    faToggleOn: IconProp = faToggleOn;
    faToggleOff: IconProp = faToggleOff;

    isToggle: boolean = true;

    constructor(private toggleService: ToggleService) {
        this.toggleService.getSidebarToggleState().subscribe((state) => {
            this.isToggle = state
        })
    }

    toggleSidebar() {
        this.toggleService.setSidebarToggleState(!this.isToggle)
    }

}
