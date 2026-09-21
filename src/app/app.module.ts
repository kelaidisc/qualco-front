import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryLanguagesComponent } from './countries/country-languages/country-languages.component';
import { StatsTableComponent } from './stats/stats-table.component';
import { ExplorerTableComponent } from './explorer/explorer-table.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    StatsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    CountryListComponent,
    CountryLanguagesComponent,
    ExplorerTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
