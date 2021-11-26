import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Actor } from 'src/app/shared/models/actor.model';
import { ActorsService } from 'src/app/shared/services/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.page.html',
  styleUrls: ['./actors.page.scss'],
})
export class ActorsPage implements OnInit, ViewWillEnter{ 
actors: Actor[];

  constructor(private actorsService: ActorsService, private router: Router) {}
  
  ngOnInit() {}

  ionViewWillEnter() {
    this.actorsService
    .getActors().subscribe((actors) => (this.actors = actors));
  }

  goToActor(id: number) {
    this.router.navigate(['/actors', id]);
  }

  }

 

