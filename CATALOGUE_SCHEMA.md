# Project Catalogue Schema

The project catalogue is designed to scale to hundreds of projects.

Each project in `docs/projects.json` should contain:

| Field | Purpose |
|---|---|
| `id` | Unique Mettelo project ID |
| `name` | Public project title |
| `track` | Primary project discipline |
| `capabilities` | Search/filter tags such as Machine Learning, RAG, SQL, Data Engineering |
| `sector` | Industry/domain |
| `problem` | One concise statement of what the team is solving |
| `expertise` | Core skills required/practised |
| `team_size` | Recommended team size |
| `repository` | Full master project repository URL |
| `status` | Available, Upcoming, Closed, Archived, etc. |

## Adding a new project

1. Create the master project repository.
2. Add one metadata object to `docs/projects.json`.
3. Use consistent capability and sector labels.
4. The interactive catalogue updates automatically from the JSON file.

This avoids manually creating hundreds of HTML cards as the library grows.
