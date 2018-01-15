import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, share, shareReplay, take } from "rxjs/operators";

@Injectable()
export class MoviedbService {

  private baseUrl: string = 'http://moviedb.tomreinartz.com/';
  private apiKey: string = 'ffbd2b663d53a66c2dd00bb517491490';
  private language: string = 'en-US';

  constructor( private http: HttpClient ) {
  }

  getPopularMovies() {
    return this.http.get<any>( `${this.baseUrl}lists/movies/popular-underground` );
  }

  getPopularSeries() {
    return this.http.get<any>( `${this.baseUrl}lists/series/popular` );
  }

  getPopularPeople() {
    return this.http.get<any>( `https://thuis.tomreinartz.com/themoviedb/3/person/popular?page=1&language=${this.language}&api_key=${this.apiKey}` )
      .pipe(
        map( resp => resp.results )
      );
  }

  getMovieDetails( id: number ) {
    return this.http.get( `http://moviedb.tomreinartz.com/movies/${id}` );
  }

  getSerieDetails( id: number ) {
    return this.http.get( `http://moviedb.tomreinartz.com/series/${id}` );
  }
}
