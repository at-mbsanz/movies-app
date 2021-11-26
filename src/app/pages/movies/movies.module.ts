import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { MoviesPageRoutingModule } from './movies-routing.module';

import { MoviesPage } from './movies-page/movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule,
    SharedModule,
  ],
  declarations: [MoviesPage],
})
export class MoviesPageModule {}
