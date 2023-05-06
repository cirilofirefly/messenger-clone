import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { HomeComponent } from './home.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ArchiveComponent } from './pages/archive/archive.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: ChatsComponent   
            },
            {
                path: 't',
                component: ChatsComponent   
            },
            {
                path: 'active',
                component: PeopleComponent   
            },
            {
                path: 'marketplace',
                component: MarketplaceComponent   
            },
            {
                path: 'requests',
                component: RequestsComponent   
            },
            {
                path: 'archived',
                component: ArchiveComponent   
            },
        ]
    },
    { path: '',   redirectTo: '/t', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
