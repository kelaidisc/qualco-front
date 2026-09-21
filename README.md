# Nations App — Angular Frontend

Single-page application consuming the Nations REST API and presenting country, language and statistics data across three screens.

## Stack

- Angular 17 (module-based)
- TypeScript

## Architecture

Flat module structure — all components declared in `AppModule`, routed via `AppRoutingModule`. No lazy loading or feature modules; the app is small enough that the added complexity would not be justified.

All HTTP communication is centralised in a single `ApiService`. Components hold state and delegate data fetching to the service.

## Structure

```
src/app/
├── core/
│   └── api.service.ts          # All HTTP calls
├── models/
│   └── models.ts               # Shared TypeScript interfaces
├── countries/
│   ├── country-list/           # Screen 1 — country list
│   └── country-languages/      # Screen 1 drill-down — languages
├── stats/
│   └── stats-table             # Screen 2 — max GDP/population ratio
└── explorer/
    └── explorer-table          # Screen 3 — filtered, paginated explorer
```

## Design Decisions

**Single `ApiService`**
One service owns all HTTP calls. Easy to mock in tests, single place to update if the base URL or headers change.

**Typed models**
All API responses are typed via interfaces in `models.ts`. No `any` types — keeps the compiler useful and makes refactoring safe.

**`[(ngModel)]` for filter form**
Two-way binding is the simplest correct approach for a small filter form with no cross-field validation. Reactive forms would add boilerplate with no benefit here.

**Pagination state in component**
`page`, `size`, `totalPages`, `totalElements` live directly in the component. No external state management — the scope is local and the component is the only consumer.

**Lazy search on explorer**
The explorer does not fetch on load — data is only requested after the user explicitly clicks Search. Avoids an unnecessary full-table query on navigation.

## Known Gaps

- No error handling on HTTP calls — failed requests fail silently
- API base URL is hardcoded in `ApiService` — should use `environment.ts` per environment
- No `trackBy` on `*ngFor` — acceptable at this data scale, would matter with large or frequently updating lists

## Running

```bash
npm install
ng serve
```

App available at `http://localhost:4200`. Expects the backend running at `http://localhost:8080`.