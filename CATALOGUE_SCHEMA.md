# Project Catalogue Schema

The project catalogue is designed to scale to hundreds of specialist and cross-functional projects.

Each project in `docs/projects.json` should contain:

| Field | Purpose |
|---|---|
| `id` | Unique Mettelo project ID |
| `name` | Public project title |
| `track` | Primary track, e.g. Data Analytics, Data Engineering, Data Science, Artificial Intelligence, Cross-Functional |
| `capabilities` | Searchable capability/skill tags |
| `roles` | Delivery roles practised in the project; drives the Role filter |
| `sector` | Industry/domain; separate multiple sectors with ` / ` so each appears in the Sector filter |
| `problem` | Concise statement of the organisational problem |
| `use_case` | How a stakeholder would use the finished product |
| `data_source` | Approved core dataset/source |
| `expertise` | Core skills required or practised |
| `team_size` | Recommended team size |
| `repository` | Full master project repository URL |
| `status` | Available, Upcoming, Closed, Archived, etc. |

## Adding a new project

1. Create the master project repository.
2. Add one metadata object to `docs/projects.json`.
3. Use consistent track, role, capability and sector labels.
4. Add a clear business problem, practical use case and core data source.
5. The interactive catalogue updates automatically.

Avoid manually creating individual HTML cards; the catalogue renders from structured JSON.

## Filter behaviour

Track and Role match their metadata labels. Sector matches an individual slash-separated sector, so selecting Housing finds all Housing projects even when they have different secondary sectors. Keyword search is case-insensitive and requires every search word to appear somewhere in the project metadata. All four filters combine, Reset clears them, and the result count reports matches out of the full catalogue.

## Series 021–030

Repository names were verified against the Mettelo organisation. Titles, problems, use cases and core sources follow the agreed project plan, including the revised Achievement scope for 024, HES hospital activity for 029 and Catchment Data classifications/measures for 030. Team size 6–8 is recommended in line with the existing Cross-Functional series until master briefs specify otherwise. For 027, the England time series alone cannot support country/product concentration analysis; the use case requires the corresponding HMRC breakdowns.

## Pagination and sorting

The catalogue shows 10 projects per page, with Previous and Next controls above and below the cards. Filtering and sorting apply to the full matching set before pagination. Changing a filter, keyword or sort returns to page 1. Reset clears filters and restores ascending project-number order. Sort choices cover project number in both directions, title A–Z/Z–A, track and sector; project number breaks ties. Navigation is hidden for ten or fewer matches and disabled at page boundaries.
