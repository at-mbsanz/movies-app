import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesPageModule),
  },
  {
    path: 'actors',
    loadChildren: () =>
      import('./pages/actors/actors.module').then((m) => m.ActorsPageModule),
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./pages/companies/companies.module').then(
        (m) => m.CompaniesPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
