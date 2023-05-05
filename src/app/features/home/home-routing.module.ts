import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';

const routes: Routes = [
    {
        path: 't',
        component: ChatsComponent
    },
    {
        path: 'active',
        component: PeopleComponent   
    },
    {
        path: 'markeplace',
        component: MarketplaceComponent   
    },
    { path: '',   redirectTo: '/t', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
