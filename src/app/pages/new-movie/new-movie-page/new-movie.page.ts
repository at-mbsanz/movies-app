import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.page.html',
  styleUrls: ['./new-movie.page.scss'],
})
export class NewMoviePage implements OnInit {
  movieForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      poster: ['', [Validators.required, Validators.minLength(3)]],
      company: [''],
      year: [
        '',
        [Validators.required, Validators.min(1900), Validators.max(3001)],
      ],
      duration: ['', [Validators.required]],
    });
  }

  submitMovieForm() {
    this.loading = true;
    this.moviesService.addMovie(this.movieForm.value).subscribe(
      () => {
        this.loading = false;
        this.router.navigateByUrl('/movies');
      },
      (error) => {
        this.loading = false;
        console.log('Ha ocurrido un error añadiendo la película');
      }
    );
  }

  resetForm() {
    this.movieForm.reset();
  }
}
