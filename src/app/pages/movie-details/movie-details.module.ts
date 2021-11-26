import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailsPageRoutingModule } from './movie-details-routing.module';
import { MovieDetailsPage } from './movie-details-page/movie-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDurationPipe } from './pipes/movie-duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailsPageRoutingModule,
    SharedModule,
  ],
  declarations: [MovieDetailsPage, MovieDurationPipe],
})
export class MovieDetailsPageModule {}
