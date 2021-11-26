import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [MovieCardComponent, RatingComponent],
  imports: [CommonModule, IonicModule],
  exports: [MovieCardComponent, RatingComponent],
})
export class SharedModule {}
