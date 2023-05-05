import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { ChatsComponent } from './pages/chats/chats.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { PeopleComponent } from './pages/people/people.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChatsComponent,
    PeopleComponent,
    MarketplaceComponent,
    RequestsComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
