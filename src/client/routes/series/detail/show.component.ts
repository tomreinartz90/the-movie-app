import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviedbService } from "../../../components/services/moviedb.service";

/**
 * This class represents the lazy loaded SeriesComponent.
 */
@Component( {
  moduleId: module.id,
  selector: "mm-show-route",
  templateUrl: "show.component.html"
} )
export class ShowComponent {

  show: any;

  constructor( private route: ActivatedRoute, private movieDbService: MoviedbService ) {
    route.params.subscribe( params => {
      console.log( params );
      this.show = null;
      this.getSerieDetials( params['id'] );
    } );
  }

  getSerieDetials( id: number ) {
    this.movieDbService.getSerieDetails( id ).subscribe( details => {
      this.show = details;
    } );
  }


}
