import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ApiService } from '../../core/api.service';
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-country-languages',
    standalone: true,
    imports: [
        RouterLink,
        NgForOf,
        NgIf
    ],
    templateUrl: './country-languages.component.html'
})
export class CountryLanguagesComponent implements OnInit {
    languages: string[] = [];

    constructor(private route: ActivatedRoute, private api: ApiService) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id')!;
        this.api.getLanguages(id).subscribe(data => (this.languages = data));
    }
}
