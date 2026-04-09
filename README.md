# 🚀 Mijn Portfolio - Next.js & Sanity CMS

## 💡 CMS Onderzoek

Voor mijn portfolio heb ik onderzoek gedaan naar verschillende Headless CMS-systemen om mijn projecten en teksten te beheren. Hieronder de vergelijking van de drie meest relevante opties voor mijn Next.js stack:

| Kenmerk               | Sanity.io                      | Payload CMS                          | Strapi                          |
| :-------------------- | :----------------------------- | :----------------------------------- | :------------------------------ |
| **Type**              | SaaS (Cloud-hosted)            | Code-first / Self-hosted             | Node.js / Self-hosted           |
| **Hosting**           | Volledig beheerd door Sanity   | Eigen database (Postgres/Mongo)      | Eigen server/database nodig     |
| **Data Query**        | GROQ of GraphQL                | Local API / REST / GraphQL           | REST of GraphQL                 |
| **Next.js Support**   | ★★★★★ (Native SDK)             | ★★★★★+ (Deep integration)            | ★★★★☆ (Standard API)            |
| **Gratis Tier**       | Zeer royaal voor developers    | Software is gratis (Open-source)     | Community Edition is gratis     |
| **Grootste Voordeel** | Visual editing & live previews | TypeScript-first & alles in één repo | Zeer bekende industriestandaard |
| **Grootste Nadeel**   | Nieuwe querytaal (GROQ) leren  | Database-hosting zelf regelen        | Zwaarder qua server resources   |

---

### Keuze en Motivatie: Sanity.io

Ik heb voor mijn portfolio gekozen voor **Sanity.io**. De belangrijkste redenen hiervoor zijn:

- **Developer Experience:** Dankzij de diepe integratie met Next.js en de beschikbare SDK's was de setup erg efficiënt.
- **Flexibiliteit:** De mogelijkheid om schema's in TypeScript te definiëren (`code-first`) past perfect bij mijn workflow.
- **Schaalbaarheid:** Het genereuze gratis plan van Sanity is ideaal voor een persoonlijk portfolio, waarbij ik me geen zorgen hoef te maken over database-hosting of onderhoud.

---

### Lokaal Opstarten

Volg deze stappen om het project op je eigen machine te draaien:

1. **Repository clonen:**

   ```bash
   git clone [JOUW_REPO_URL]
   cd [MAP_NAAM]
   ```

2. **Dependencies installeren:**

   ```bash
   bun install
   # of: npm install
   ```

3. **Omgevingsvariabelen instellen:**
   Maak een .env.local bestand aan in de root en voeg je Sanity credentials toe:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID="jouw_project_id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   ```

4. **Project starten:**
   ```bash
   bun dev
   ```

Open http://localhost:3000 voor de website en /studio voor het CMS dashboard.

---

## Optimalisatie & Caching

Voor deze fase heb ik twee belangrijke technieken toegepast om de performance van mijn portfolio te optimaliseren:

### 1. Server Side Rendering & Caching

Ik maak gebruik van het nieuwe Next.js 16 **'Dynamic IO'** model met de `'use cache'` directive.

- **Strategie:** Gecached (Static).
- **Implementatie:** Middels de `cacheLife('hours')` functie wordt de data-ophaling voor langere tijd vastgehouden.
- **Motivatie:** Omdat mijn projectenlijst zelden verandert, is dit de meest efficiënte strategie. Het voorkomt onnodige API-calls naar Sanity bij elk paginabezoek, wat resulteert in een razendsnelle gebruikerservaring en minder serverbelasting.

### 2. Afbeeldingen via Cloudinary

In plaats van afbeeldingen lokaal op te slaan of rechtstreeks vanuit het CMS te serveren, fungeert **Cloudinary** als mijn Media Library.

- **Transformaties:** In de URL's pas ik automatische optimalisaties toe zoals:
  - `f_auto`: Levert automatisch het modernste bestandsformaat (zoals WebP of AVIF) op basis van de browser van de bezoeker.
  - `q_auto`: Optimaliseert de beeldkwaliteit om de bestandsgrootte te minimaliseren zonder zichtbaar kwaliteitsverlies.
  - `w_1000`: Schalene van de afbeelding naar een breedte die past bij de layout.
- **Resultaat:** De bestandsgrootte van project-screenshots wordt drastisch verkleind, wat de "Largest Contentful Paint" (LCP) aanzienlijk verbetert.

![Afbeelding Dashboard cloudinary](/public/picture-dashboard.png)