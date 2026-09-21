import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { StatMax } from '../models/models';

@Component({
    selector: 'app-stats-table',
    templateUrl: './stats-table.component.html'
})
export class StatsTableComponent implements OnInit {
    stats: StatMax[] = [];

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.api.getMaxRatio().subscribe(data => (this.stats = data));
    }
}
