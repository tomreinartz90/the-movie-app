import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule, MatToolbarModule } from "@angular/material";
import { HomeComponent } from "./home.component";
import { ComponentsModule } from "../../components/components.module";
import { RouterModule } from "@angular/router";

@NgModule( {
  imports: [MatListModule, MatToolbarModule, ComponentsModule, CommonModule, ],
  declarations: [HomeComponent]
} )

export class HomeModule {



}
