import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit, ViewWillEnter {
  movies: Movie[];

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.moviesService
      .getMovies()
      .subscribe((movies) => (this.movies = movies));
  }

  goToMovie(id: number) {
    this.router.navigate(['/movies', id]);
  }

  onVoteUp(movie: Movie) {
    this.moviesService.voteUpMovie(movie).subscribe();
  }

  onVoteDown(movie: Movie) {
    this.moviesService.voteDownMovie(movie).subscribe();
  }
}
