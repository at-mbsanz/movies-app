import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies-page/movies.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
  },
  {
    path: 'new-movie',
    loadChildren: () =>
      import('../new-movie/new-movie.module').then((m) => m.NewMoviePageModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../movie-details/movie-details.module').then(
        (m) => m.MovieDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
