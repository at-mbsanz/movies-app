import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  @Output() cardClicked = new EventEmitter<void>();
  @Output() voteUpClick = new EventEmitter<number>();
  @Output() voteDownClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClickCard() {
    this.cardClicked.emit();
  }

  onVoteUp() {
    this.voteUpClick.emit(this.movie.id);
  }

  onVoteDown() {
    this.voteDownClick.emit();
  }
}
