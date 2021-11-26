import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';

@NgModule({
  declarations: [MovieCardComponent, RatingComponent, ActorCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [MovieCardComponent, RatingComponent, ActorCardComponent],
})
export class SharedModule {}
