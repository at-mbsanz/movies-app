import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.baseUrl}/movies`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.baseUrl}/movies/${id}`);
  }

  addMovie(movie: Movie): Observable<Movie> {
    const newMovie = { ...movie, ratingPositive: 0, ratingNegative: 0 };
    return this.http.post<Movie>(`${environment.baseUrl}/movies`, newMovie);
  }

  updateMovie(updateMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>(
      `${environment.baseUrl}/movies/${updateMovie.id}`,
      updateMovie
    );
  }

  removeMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/movies/${id}`);
  }

  voteUpMovie(movie: Movie): Observable<Movie> {
    movie.ratingPositive++;
    return this.updateMovie(movie);
  }

  voteDownMovie(movie: Movie): Observable<Movie> {
    movie.ratingNegative++;
    return this.updateMovie(movie);
  }
}
