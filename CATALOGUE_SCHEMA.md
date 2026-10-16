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
| `sector` | Industry/domain |
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
