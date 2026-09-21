import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryLanguagesComponent } from './countries/country-languages/country-languages.component';
import { StatsTableComponent } from './stats/stats-table.component';
import { ExplorerTableComponent } from './explorer/explorer-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountryListComponent },
  { path: 'countries/:id/languages', component: CountryLanguagesComponent },
  { path: 'stats', component: StatsTableComponent },
  { path: 'explorer', component: ExplorerTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
