import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
})
export class ActorCardComponent implements OnInit {
  @Input() actor: Actor;
  @Output() cardClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClickCard() {
    this.cardClicked.emit();
  }

}
