import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMoviePageRoutingModule } from './new-movie-routing.module';

import { NewMoviePage } from './new-movie-page/new-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewMoviePageRoutingModule,
  ],
  declarations: [NewMoviePage],
})
export class NewMoviePageModule {}
