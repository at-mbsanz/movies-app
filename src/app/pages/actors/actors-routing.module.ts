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
    import('../movie-details/movie-details.module').then(
      (m) => m.MovieDetailsPageModule
    ),
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsPageRoutingModule {}
