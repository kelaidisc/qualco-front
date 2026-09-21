import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Country } from '../../models/models';
import {RouterLink} from "@angular/router";
import {DecimalPipe, NgForOf} from "@angular/common";

@Component({
    selector: 'app-country-list',
    standalone: true,
    imports: [
        RouterLink,
        DecimalPipe,
        NgForOf
    ],
    templateUrl: './country-list.component.html'
})
export class CountryListComponent implements OnInit {
    countries: Country[] = [];

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.api.getCountries().subscribe(data => (this.countries = data));
    }
}
