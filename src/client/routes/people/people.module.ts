import { NgModule } from "@angular/core";
import { MatCardModule, MatListModule } from "@angular/material";
import { PeopleComponent } from "./people.component";

@NgModule( {
  imports: [MatListModule, MatCardModule],
  declarations: [PeopleComponent]
} )

export class PeopleModule {}
