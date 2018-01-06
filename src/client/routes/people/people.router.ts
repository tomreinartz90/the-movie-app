import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeopleComponent } from "./people.component";
import { PeopleModule } from "./people.module";

const routes: Routes = [
  { path: "", component: PeopleComponent },
  { path: "details/:id", component: PeopleComponent }
];

export const peopleRouting: ModuleWithProviders = RouterModule.forChild( routes );

@NgModule( {
  imports: [peopleRouting, PeopleModule]
} )
class PeopleRoutingModule {}

export function PeopleRoutinggModuleFactory() {
  return PeopleRoutingModule;
}
