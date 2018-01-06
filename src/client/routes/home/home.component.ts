import { Component } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/operators";
import { MoviedbService } from "../../components/services/moviedb.service";

/**
 * This class represents the lazy loaded Home.
 */
@Component( {
  moduleId: module.id,
  selector: "mm-home",
  templateUrl: "home.component.html"
} )
export class HomeComponent {
  movies: Array<any>;
  series: Array<any>;
  people: Array<any>;


  constructor( public movieDb: MoviedbService ) {
    this.getData();
  }

  getData() {
    Observable.forkJoin( [
        this.movieDb.getPopularMovies(),
        this.movieDb.getPopularSeries(),
        this.movieDb.getPopularPeople()
      ] ).pipe(
      map( resp => {
        return { movies: resp[0], series: resp[1], people: resp[2] };
      } ) )
        .subscribe( resp => {
          this.movies = resp.movies;
          this.series = resp.series;
          this.people = resp.people;
        } )
  }

}
