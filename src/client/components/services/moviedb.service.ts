import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, share, shareReplay, take } from "rxjs/operators";

@Injectable()
export class MoviedbService {

  private baseUrl: string = 'https://thuis.tomreinartz.com/themoviedb/3/';
  private apiKey: string = 'ffbd2b663d53a66c2dd00bb517491490';
  private language: string = 'en-US';

  constructor( private http: HttpClient ) {
  }

  //https://thuis.tomreinartz.com/themoviedb/3/movie/476919?&api_key=ffbd2b663d53a66c2dd00bb517491490&append_to_response=videos,recommendations
  // https://api.themoviedb.org/
  getPopularMovies() {
    return this.http.get<any>( `${this.baseUrl}discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=${this.language}&api_key=${this.apiKey}` )
      .pipe(
        map( resp => resp.results )
      );
  }

  //https://api.themoviedb.org/3/discover/tv?include_null_first_air_dates=true&timezone=America%2FNew_York&page=1&sort_by=popularity.desc&language=en-US&api_key=ffbd2b663d53a66c2dd00bb517491490
  getPopularSeries() {
    return this.http.get<any>( `${this.baseUrl}discover/tv?include_null_first_air_dates=true&timezone=America%2FNew_York&page=1&sort_by=popularity.desc&language=${this.language}&api_key=${this.apiKey}` )
      .pipe(
        map( resp => resp.results )
      );
  }

  //https://api.themoviedb.org/3/person/popular?api_key=
  getPopularPeople() {
    return this.http.get<any>( `${this.baseUrl}person/popular?page=1&language=${this.language}&api_key=${this.apiKey}` )
      .pipe(
        map( resp => resp.results )
      );
  }

  getMovieDetails( id: number ) {
    return this.http.get( `${this.baseUrl}movie/${id}?api_key=${this.apiKey}&append_to_response=videos,recommendations` );
  }
}
