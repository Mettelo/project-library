# Mettelo Project Studio Catalogue

The **Mettelo Project Library** is the discovery layer for Mettelo production-style specialist and cross-functional projects across Data, Engineering, Data Science, AI, Business Analysis, Data Governance, BI and related disciplines.

Each project is built around a realistic organisational problem and links to a dedicated master repository containing the full brief, approved data guidance, deliverables, acceptance criteria and submission requirements.

## Interactive Catalogue

The catalogue under `docs/` supports:

- **Track filtering** — Data Analytics, Data Engineering, Data Science, Artificial Intelligence and Cross-Functional;
- **Role filtering** — Business Analyst, Data Governance Analyst, Data Engineer, Data Analyst, BI Developer, Data Scientist, AI/Model Governance and project-specific roles;
- **Sector filtering** — Banking, NHS, Public Sector, Transport, Housing, Energy, Financial Services, Telecoms and more;
- **Keyword search** — skills, tools, domains, use cases and data sources.

The catalogue is designed to scale to hundreds of projects.

### Public catalogue

https://mettelo.github.io/project-library/

Source:
- [Interactive catalogue](docs/index.html)
- [Structured project metadata](docs/projects.json)
- [Catalogue schema](CATALOGUE_SCHEMA.md)

## How the Library Works

**Project Library** → discover/filter a project  
**Master Project Repository** → read the full specification and data guidance  
**Team Delivery Repository** → collaborate, build and submit the solution

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
| **MTL-DS-008** | [NHS Waiting List Demand Forecasting & Capacity Planning](https://github.com/Mettelo/MTL-DS-008-NHS-Waiting-List-Demand-Forecasting-Capacity-Planning) | Data Science | Healthcare / NHS |
| **MTL-DS-009** | [London Fire Incident Response Demand & Risk Modelling](https://github.com/Mettelo/MTL-DS-009-London-Fire-Incident-Response-Demand-Risk-Modelling) | Data Science | Emergency Services / Public Sector |
| **MTL-AI-010** | [NHS Operational Guidance Knowledge Assistant](https://github.com/Mettelo/MTL-AI-010-NHS-Operational-Guidance-Knowledge-Assistant) | Artificial Intelligence | Healthcare / NHS |
| **MTL-XF-011** | [Public Procurement Spend, Supplier Concentration & Contract Risk Intelligence](https://github.com/Mettelo/MTL-XF-011-Public-Procurement-Supplier-Contract-Risk-Intelligence) | Cross-Functional | Public Sector / Commercial / Procurement |
| **MTL-XF-012** | [NHS Workforce Capacity, Retention & Service Sustainability Intelligence](https://github.com/Mettelo/MTL-XF-012-NHS-Workforce-Capacity-Retention-Service-Sustainability) | Cross-Functional | Healthcare / NHS / Workforce |
| **MTL-XF-013** | [Financial Complaints, Conduct Risk & Customer Harm Intelligence](https://github.com/Mettelo/MTL-XF-013-Financial-Complaints-Conduct-Risk-Customer-Harm-Intelligence) | Cross-Functional | Financial Services / Conduct / Customer Outcomes |
| **MTL-XF-014** | [Telecom Customer Experience & Provider Performance Intelligence](https://github.com/Mettelo/MTL-XF-014-Telecom-Customer-Experience-Provider-Performance-Intelligence) | Cross-Functional | Telecommunications / Customer Experience |
| **MTL-XF-015** | [Housing Energy Efficiency, Consumption & Retrofit Prioritisation Intelligence](https://github.com/Mettelo/MTL-XF-015-Housing-Energy-Efficiency-Retrofit-Prioritisation-Intelligence) | Cross-Functional | Housing / Energy / Net Zero |
| **MTL-XF-016** | [Community Safety, Crime Demand & Resource Allocation Intelligence](https://github.com/Mettelo/MTL-XF-016-Community-Safety-Crime-Demand-Resource-Intelligence) | Cross-Functional | Public Safety / Local Government / Policing |
| **MTL-XF-017** | [Flood Defence Asset, Investment & Risk Prioritisation Intelligence](https://github.com/Mettelo/MTL-XF-017-Flood-Defence-Investment-Risk-Prioritisation) | Cross-Functional | Environment / Flood Risk / Capital Investment |
| **MTL-XF-018** | [Government Grants Portfolio, Funding Concentration & Programme Intelligence](https://github.com/Mettelo/MTL-XF-018-Government-Grants-Funding-Impact-Intelligence) | Cross-Functional | Public Sector / Grants / Programme Management |
| **MTL-XF-019** | [Road Network Demand, Traffic Pressure & Infrastructure Investment Intelligence](https://github.com/Mettelo/MTL-XF-019-Road-Network-Demand-Congestion-Investment-Intelligence) | Cross-Functional | Transport / Highways / Infrastructure Investment |
| **MTL-XF-020** | [Housing Market Affordability, Development & Investment Risk Intelligence](https://github.com/Mettelo/MTL-XF-020-Housing-Market-Affordability-Investment-Risk-Intelligence) | Cross-Functional | Housing / Economic Development / Investment |

## Cross-Functional Series

Projects **MTL-XF-011 to MTL-XF-020** are intentionally multidisciplinary. They combine roles such as Business Analysis, Data Governance, Data Engineering, Data Analysis, BI Development, Data Science, AI/Model Governance, Assurance and domain specialists.

The objective is to reproduce the dependencies found in real delivery teams rather than treating each project as a single-role exercise.

## Catalogue Metadata

`docs/projects.json` stores structured metadata including:

- project ID and title;
- primary track;
- capabilities;
- delivery roles;
- sector;
- business problem;
- practical use case;
- approved data source;
- expertise;
- recommended team size;
- master repository link;
- status.

See [CATALOGUE_SCHEMA.md](CATALOGUE_SCHEMA.md).

## Team Delivery Model

The team size is defined by each master project. Specialist projects generally use smaller teams; the cross-functional series uses larger teams because multiple delivery disciplines are expected.

Each participating team creates its delivery repository under the **Mettelo GitHub organisation** and uses it to evidence:

- technical and analytical delivery;
- business analysis and requirements where applicable;
- data governance;
- collaboration through issues, branches and pull requests;
- documentation;
- final outputs;
- acceptance-criteria completion;
- assurance/UAT;
- technical handover;
- individual contribution.

## Who Is This For?

The Project Studio is designed for people who want evidence of capability through realistic team delivery rather than classroom exercises.

It supports professionals building experience, career changers, analysts moving into engineering/data science/AI, and people developing capability in Business Analysis, Data Governance, BI, assurance and related roles.

## Connect with Mettelo

- Website: https://mettelo.com
- LinkedIn: https://www.linkedin.com/mettelo
- X: https://twitter.com/officialmettelo
- Instagram: https://instagram.com/officialmettelo
- Facebook: https://facebook.com/officialmettelo

---

**Mettelo — Built for What’s Next.**
