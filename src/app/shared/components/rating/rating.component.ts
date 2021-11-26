import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() votesUp = 0;
  @Input() votesDown = 0;
  @Output() voteUpClick = new EventEmitter();
  @Output() voteDownClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  voteUp() {
    this.voteUpClick.emit();
  }

  voteDown() {
    this.voteDownClick.emit();
  }
}
