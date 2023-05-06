import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ThreadComponent } from './components/thread/thread.component';
import { ThreadProfileComponent } from './components/thread-profile/thread-profile.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    SidebarComponent,
    UserProfileComponent,
    TooltipComponent,
    ThreadComponent,
    ThreadProfileComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule,
    SearchComponent,
    SidebarComponent,
    UserProfileComponent,
    TooltipComponent,
    ThreadComponent,
    ThreadProfileComponent,
  ]
})
export class SharedModule { }
