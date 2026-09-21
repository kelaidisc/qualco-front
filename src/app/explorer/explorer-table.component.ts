import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ExploreRow, Region } from '../models/models';
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-explorer-table',
    standalone: true,
    imports: [
        NgForOf,
        FormsModule,
        NgIf,
        DecimalPipe
    ],
    templateUrl: './explorer-table.component.html'
})
export class ExplorerTableComponent implements OnInit {
    rows: ExploreRow[] = [];
    regions: Region[] = [];

    selectedRegionId: number | null = null;
    yearFrom: number | null = null;
    yearTo: number | null = null;

    page = 0;
    size = 10;
    totalPages = 0;
    totalElements = 0;
    searched = false;

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.api.getRegions().subscribe(data => (this.regions = data));
    }

    load(): void {
        this.api
            .explore(this.selectedRegionId, this.yearFrom, this.yearTo, this.page, this.size)
            .subscribe((result => {
                this.rows = result.content;
                this.totalPages = result.totalPages;
                this.totalElements = result.totalElements;
            }));
    }

    search(): void {
        this.page = 0;
        this.load();
        this.searched = true;
    }

    prev(): void {
        if (this.page > 0) {
            this.page--;
            this.load();
        }
    }

    next(): void {
        if (this.page < this.totalPages - 1) {
            this.page++;
            this.load();
        }
    }
}
