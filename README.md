# Mettelo Project Studio Catalogue

The **Mettelo Project Library** is the discovery layer for our production-style Data, Data Engineering, Data Science, Machine Learning and Artificial Intelligence projects.

Each project is built around a realistic organisational problem and links to a dedicated master repository containing the full brief, data guidance, deliverables, acceptance criteria and submission requirements.

## Interactive Catalogue

A scalable filterable catalogue has been added under the `docs/` folder.

It supports filtering by:

- **Capability / track** — Data Analytics, Data Engineering, Data Science, Machine Learning, Artificial Intelligence, RAG and more
- **Sector** — Banking, Education, Energy, Transport, Healthcare, Emergency Services and more
- **Keyword / skill** — Python, SQL, dbt, forecasting, classification, XGBoost, SHAP, embeddings, vector search, etc.

The catalogue is designed to scale to **hundreds of projects** without turning this README into one very long list.

### GitHub Pages

The interactive catalogue is ready for GitHub Pages using the `/docs` folder.

Once GitHub Pages is enabled for this repository with:

**Settings → Pages → Deploy from a branch → main → /docs**

the public catalogue will be available at:

**https://mettelo.github.io/project-library/**

Until Pages is enabled, the catalogue source can be viewed here:

- [Interactive catalogue source](docs/index.html)
- [Structured project metadata](docs/projects.json)
- [Catalogue schema](CATALOGUE_SCHEMA.md)

## How the Library Works

**Project Library** → discover and filter projects  
**Master Project Repository** → read the complete project specification  
**Team Repository** → build, collaborate and submit the solution

## Current Projects

| ID | Project | Track | Sector |
|---|---|---|---|
| **MTL-DA-001** | [Retail Banking Customer & Portfolio Intelligence](https://github.com/Mettelo/MTL-DA-001-retail-banking-intelligence) | Data Analytics | Banking / Financial Services |
| **MTL-DA-002** | [Student Engagement, Retention & Academic Performance Intelligence](https://github.com/Mettelo/Mettelo-MTL-DA-002-student-engagement-intelligence) | Data Analytics | Higher Education / Digital Learning |
| **MTL-DA-003** | [Energy Demand, Tariff & Customer Consumption Intelligence](https://github.com/Mettelo/MTL-DA-003-Energy-Demand-Tariff-Customer-Consumption-Intelligence) | Data Analytics | Energy / Utilities |
| **MTL-DA-004** | [Road Safety, Collision Risk & Transport Intelligence](https://github.com/Mettelo/MTL-DA-004-Road-Safety-Collision-Risk-Transport-Intelligence) | Data Analytics | Public Sector / Transport |
| **MTL-DA-005** | [Food Safety Compliance, Inspection Risk & Regulatory Intelligence](https://github.com/Mettelo/MTL-DA-005-Food-Safety-Compliance-Inspection-Risk-Regulatory-Intelligence) | Data Analytics | Public Health / Regulation |
| **MTL-DE-006** | [UK Road Safety Data Platform](https://github.com/Mettelo/MTL-DE-006-UK-Road-Safety-Data-Platform) | Data Engineering | Public Sector / Transport |
| **MTL-DE-007** | [UK Companies Registry Data Platform](https://github.com/Mettelo/MTL-DE-007-UK-Companies-Registry-Data-Platform) | Data Engineering | Companies / Business Intelligence |
| **MTL-DS-008** | [NHS Waiting List Demand Forecasting & Capacity Planning](https://github.com/Mettelo/MTL-DS-008-NHS-Waiting-List-Demand-Forecasting-Capacity-Planning) | Data Science / Forecasting | Healthcare / NHS |
| **MTL-DS-009** | [London Fire Incident Response Demand & Risk Modelling](https://github.com/Mettelo/MTL-DS-009-London-Fire-Incident-Response-Demand-Risk-Modelling) | Data Science / Machine Learning | Emergency Services / Public Sector |
| **MTL-AI-010** | [NHS Operational Guidance Knowledge Assistant](https://github.com/Mettelo/MTL-AI-010-NHS-Operational-Guidance-Knowledge-Assistant) | Artificial Intelligence / LLM Engineering | Healthcare / NHS |

## Scalable Catalogue Structure

The filterable catalogue reads project information from:

`docs/projects.json`

Every project has structured metadata including:

- Project ID
- Project name
- Primary track
- Capability tags
- Sector
- Problem being solved
- Expertise required
- Recommended team size
- Repository link
- Status

When the library grows to 50, 100, 200 or 300 projects, a new project only needs to be added to the structured catalogue data and it becomes searchable/filterable automatically.

See [CATALOGUE_SCHEMA.md](CATALOGUE_SCHEMA.md) for the required fields.

## Team Delivery Model

Mettelo projects are being standardised around **3–4 person teams**.

Each participating team creates its own delivery repository and uses it to evidence:

- technical and analytical work;
- collaboration;
- issues, branches and pull requests;
- documentation;
- final outputs;
- acceptance-criteria completion;
- technical handover;
- final submission.

## Who Is This For?

The Project Studio is designed for people who want evidence of capability through realistic team projects rather than classroom exercises.

It is suitable for:

- professionals building practical experience;
- people strengthening their portfolio;
- career changers;
- analysts moving into engineering, data science or AI;
- professionals who want evidence of end-to-end delivery and collaboration.

## Connect with Mettelo

- Website: https://mettelo.com
- LinkedIn: https://www.linkedin.com/mettelo
- X: https://twitter.com/officialmettelo
- Instagram: https://instagram.com/officialmettelo
- Facebook: https://facebook.com/officialmettelo

---

**Mettelo — Built for What’s Next.**
