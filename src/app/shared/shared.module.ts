import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    SidebarComponent,
    UserProfileComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    UserProfileComponent
  ]
})
export class SharedModule { }
