import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsPage } from './actors-page/actors.page';



const routes: Routes = [
  {
    path: '',
    component: ActorsPage,
  },
{ 
  path: ':id',
  loadChildren: () =>
    import('../actor-details/actor-details.module').then(
      (m) => m.ActorDetailsPageModule
    ),
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsPageRoutingModule {}
 