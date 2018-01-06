import { NgModule }      from "@angular/core";
import { RouterModule }      from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../routes/app-routing.module";
import { AppComponent }  from "./app.component";
import { FormsModule, ReactiveFormsModule }    from "@angular/forms";
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatIconRegistry,
  MatPaginatorModule,
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ComponentsModule } from "../components/components.module";
import { MoviedbService } from "../components/services/moviedb.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    MatIconRegistry,
    MoviedbService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
