import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviedbService } from "../../../components/services/moviedb.service";

/**
 * This class represents the lazy loaded SeriesComponent.
 */
@Component( {
  moduleId: module.id,
  selector: "mm-movie-route",
  templateUrl: "movie.component.html"
} )
export class MovieComponent {

  movie: any;

  constructor( private route: ActivatedRoute, private movieDbService: MoviedbService ) {
    route.params.subscribe( params => {
      console.log( params );
      this.movie = null;
      this.getMovieDetails( params['id'] );
    } );
  }

  getMovieDetails( id: number ) {
    this.movieDbService.getMovieDetails( id ).subscribe( details => {
      this.movie = details;
    } );
  }


}
