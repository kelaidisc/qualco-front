import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, ExploreRow, PageResult, Region, StatMax } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private base = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {}

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.base}/countries`);
    }

    getLanguages(countryId: number): Observable<string[]> {
        return this.http.get<string[]>(`${this.base}/countries/${countryId}/languages`);
    }

    getRegions(): Observable<Region[]> {
        return this.http.get<Region[]>(`${this.base}/regions`);
    }

    getMaxRatio(): Observable<StatMax[]> {
        return this.http.get<StatMax[]>(`${this.base}/stats/max-ratio`);
    }

    explore(
        regionId: number | null,
        yearFrom: number | null,
        yearTo: number | null,
        page: number,
        size: number
    ): Observable<PageResult<ExploreRow>> {
        let params = new HttpParams().set('page', page).set('size', size);
        if (regionId !== null) params = params.set('regionId', regionId);
        if (yearFrom !== null) params = params.set('yearFrom', yearFrom);
        if (yearTo !== null) params = params.set('yearTo', yearTo);
        return this.http.get<PageResult<ExploreRow>>(`${this.base}/stats/explore`, { params });
    }
}
