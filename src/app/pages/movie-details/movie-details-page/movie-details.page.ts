import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }

  onVoteUp() {
    this.moviesService.voteUpMovie(this.movie).subscribe();
  }

  onVoteDown() {
    this.moviesService.voteDownMovie(this.movie).subscribe();
  }

  removeMovie() {
    this.moviesService.removeMovie(this.movie.id);
    this.router.navigate(['/movies']);
  }
}
