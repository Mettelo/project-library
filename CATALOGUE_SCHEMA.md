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
| `brief` | Plain-language card summary: the organisation’s specific problem and what the team builds; also searchable |
| `problem` | Concise statement of the organisational problem |
| `use_case` | How a stakeholder would use the finished product |
| `data_source` | Approved core dataset/source |
| `expertise` | Core skills required or practised |
| `team_size` | Recommended team size |
| `repository` | Full master project repository URL |
| `data_downloads` | Optional list of `{label, url}` official direct-download links displayed on the card; no login or paid-only source required |
| `source_guide` | Optional full master source-register URL explaining required files, frozen cohort and extraction/checksum rules |
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

Repository names were verified against the Mettelo organisation. Titles, problems, use cases and core sources follow the agreed project plan, including the revised Achievement scope for 024, HES hospital activity for 029 and Catchment Data classifications/measures for 030. Projects 021–030 recommend teams of 3–5, matching their master briefs. Members may combine delivery responsibilities while retaining independent review. For 027, the England time series alone cannot support country/product concentration analysis; the use case requires the corresponding HMRC breakdowns.

## Pagination and sorting

The catalogue shows 10 projects per page, with Previous and Next controls above and below the cards. Filtering and sorting apply to the full matching set before pagination. Changing a filter, keyword or sort returns to page 1. Reset clears filters and restores ascending project-number order. Sort choices cover project number in both directions, title A–Z/Z–A, track and sector; project number breaks ties. Navigation is hidden for ten or fewer matches and disabled at page boundaries.

## Card writing

Each card displays one Project brief rather than separate problem and use-case paragraphs. Use two or three plain-language sentences explaining who needs the project, the specific problem and the expected product. Keep detailed management scenarios in the master specification. Retain problem and use_case metadata for search and structured reuse.

## Series 031–040

The catalogue includes eight private-sector commercial projects (031–038) and two information-security projects (039–040). Repository names, business workflows and data sources match their improved master packs. All are Cross-Functional, Available, and recommend teams of 3–5. Direct official downloads are in data_downloads; NVD also has a checksum metadata link. source_guide carries file-selection, extraction, licence and frozen-snapshot instructions. Dataset limitations remain visible in card descriptions, especially synthetic maintenance data, the residential energy proxy, known-fault-only quality examples and offline security scenarios.

## Business Analyst series 041–045

Business Analysis is a primary track. These five simulations have distinct commissions, outputs and endpoints. Optional fields used by their cards are:

| Field | Purpose |
|---|---|
| learning_pathway | Distinct BA focus shown on the card and included in keyword search |
| duration | Cohort duration from the master commission |
| deliverables | Array of main required output summaries, displayed and searchable |
| submission_guide | Direct link to the master's specific team deliverables checklist |

Existing entries may omit these fields. BA source_guide links to the evidence catalogue; local evidence is synthetic, with official external context labelled separately. team_size reflects individual/team participation subject to cohort agreement rather than inventing a numeric team requirement. Full task acceptance criteria and exact required content remain authoritative in each master.
