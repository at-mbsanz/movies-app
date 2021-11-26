import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/shared/models/actor.model';
import {ActorsService } from 'src/app/shared/services/actors.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.page.html',
  styleUrls: ['./actor-details.page.scss'],
})
export class ActorDetailsPage implements OnInit {
  actor: Actor;

  constructor(
    private actorsService: ActorsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.actorsService.getActor(id).subscribe((actor) => (this.actor = actor));
  }

}
