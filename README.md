# Power Test Colombia S.A.S. — Corporate Website

> **Powering reliability. Delivering performance.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Swiper.js](https://img.shields.io/badge/Swiper.js-6332F6?logo=swiper&logoColor=white)](https://swiperjs.com/)

🌐 **Live site: [https://powertestcolombiasas.com](https://powertestcolombiasas.com)**

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Value Proposition](#2-value-proposition)
3. [Use Cases & Target Audience](#3-use-cases--target-audience)
4. [Main Features](#4-main-features)
5. [Architecture](#5-architecture)
6. [Setup & Installation](#6-setup--installation)
7. [Environment Variables & Configuration](#7-environment-variables--configuration)
8. [API Endpoints](#8-api-endpoints)
9. [Scripts](#9-scripts)
10. [Testing & Coverage](#10-testing--coverage)
11. [Deployment](#11-deployment)
12. [CI/CD](#12-cicd)
13. [Contributing](#13-contributing)
14. [License](#14-license)
15. [Developer Backend Profile](#15-developer-backend-profile)

---

## 1. Project Overview

This repository contains the complete source code for the **Power Test Colombia S.A.S.** corporate website — a responsive, multi-page static web application that showcases the company's full portfolio of industrial products and services.

Power Test Colombia S.A.S. is a Colombian company specialising in the **sale, rental, and technical maintenance** of:

- Resistive load banks and electrical testing equipment
- Diesel and gasoline generators (light-duty through industrial)
- Agricultural machinery (motors, pumps, chainsaws, sprayers, tillers, and more)
- Construction equipment (lighting towers, cranes, compactors, personal lifts)
- Custom engineering projects (soundproofing cabins, fuel tanks, truck-mounted assemblies, overhauls)

The website acts as the primary digital storefront, enabling prospective clients to browse every product category and submit quotation requests through an integrated CRM form.

---

## 2. Value Proposition

| Pillar | Description |
|---|---|
| **Comprehensive Catalogue** | 65+ product and service pages organised across five business units (Testing, Generators, Agricultural, Construction, Projects) |
| **Lead Generation** | Every product page and hero slide includes a direct link to the company's DataCRM quotation form, minimising friction from discovery to contact |
| **Brand Consistency** | Unified design system across desktop, tablet, and mobile breakpoints, with dynamic logo switching and animated navigation |
| **Zero Operational Cost** | Fully static architecture — no server infrastructure, no database, no runtime costs |
| **Maintainability** | Clear file structure and modular CSS/JavaScript files allow non-specialists to add or update product pages independently |

---

## 3. Use Cases & Target Audience

### Primary Audience
- **Industrial and agricultural businesses** in Colombia seeking reliable power and equipment solutions
- **Project managers and procurement teams** evaluating equipment rental, purchase, or maintenance contracts
- **Engineers** requiring load banks, thermographic analysis, network analysis, and vibration analysis services

### Secondary Audience
- **Job seekers** exploring career opportunities (served by the *Trabaja con nosotros* page)
- **Partners and distributors** interested in Power Test's authorised Toyama and Generac dealerships

### Key Use Cases
1. **Product discovery** — Navigate five business-unit categories and 65+ subcategory pages to find the right equipment
2. **Quotation request** — Click "Pedir Cotización" to open a pre-filled DataCRM web form
3. **Company background** — Read the corporate history and trajectory (*Trayectoria* section)
4. **Contact & social** — Reach the team via phone, email, WhatsApp, Facebook, or Instagram directly from any page

---

## 4. Main Features

- **Hero image carousel** — Auto-advancing Swiper.js slider with animated slide-in text, manual navigation arrows, and clickable pagination dots (`scripts/JavaScript/Swiper.js`)
- **Multi-level navigation menu** — Full-width desktop dropdown with nested sub-menus; collapsible hamburger menu on mobile (`scripts/JavaScript/Menu-TopBar.js`)
- **Smart top-bar** — Hides on scroll-down, reappears on scroll-up for a clean reading experience (`scripts/JavaScript/Deteccion-Movimiento.js`)
- **Dynamic logo switching** — Switches between light and dark logo variants on hover, disabled automatically below 681 px (`scripts/JavaScript/Cambio-Logo.js`)
- **Product image slider** — Per-product-page gallery with thumbnail navigation, auto-advance every 7 seconds, click-to-zoom with mouse-drag pan (`scripts/JavaScript/Slider-product.js`)
- **Responsive layout** — Three breakpoints: desktop (full), tablet ≤ 768 px (`scripts/CSS/Tablets.css`), mobile (`scripts/CSS/Mobiles.css`)
- **CRM quotation integration** — Every call-to-action button links directly to the DataCRM public web form
- **WhatsApp floating button** — Persistent contact shortcut on every page
- **SEO basics** — Proper `<html lang>`, `<meta charset>`, `<meta name="viewport">`, `<title>`, and favicon on every page

---

## 5. Architecture

### 5.1 High-Level Structure

```
Power-Test/
├── index.html                      # Home page (entry point)
├── resources/
│   ├── imagenes/                   # Product photography (~150 images, WebP/PNG/AVIF)
│   ├── logos/                      # Brand assets, favicons, social icons
│   └── plantas/                    # Facility and background imagery
└── scripts/
    ├── CSS/
    │   ├── PowerTest CSS.css       # Global layout and component styles
    │   ├── Top-bar CSS.css         # Navigation bar
    │   ├── Swiper-container.css    # Hero carousel
    │   ├── Contact-bar.css         # Footer and contact strip
    │   ├── Tablets.css             # Tablet responsive overrides (≤768 px)
    │   ├── Mobiles.css             # Mobile responsive overrides
    │   └── Sub-pages/              # Styles exclusive to product/service pages
    ├── JavaScript/
    │   ├── Menu-TopBar.js          # Mobile hamburger + desktop dropdown logic
    │   ├── Swiper.js               # Swiper carousel initialisation
    │   ├── Cambio-Logo.js          # Logo hover swap (desktop only)
    │   ├── Deteccion-Movimiento.js # Scroll-aware top-bar visibility
    │   ├── Retardo.js              # Hover sub-menu delay (300 ms)
    │   └── Slider-product.js      # Per-product gallery with zoom
    └── html/
        ├── Barra-Principal/        # Top-nav pages (Products & Services, Careers, History)
        └── Productos y servicios/
            ├── Testing/            # 7 testing service pages
            ├── Generadores/        # 7 generator category pages
            ├── Agricolas/          # 19 agricultural product pages
            ├── Construccion/       # 13 construction equipment pages
            └── Proyectos/          # 12 special-project pages
```

### 5.2 Technology Stack

| Concern | Technology | Version / Source |
|---|---|---|
| Markup | HTML5 | — |
| Styling | CSS3 | — |
| Interactivity | Vanilla JavaScript (ES6+) | — |
| Image carousel | Swiper.js | CDN (`unpkg.com/swiper`) |
| Typography | Google Fonts (Lato, Raleway, Roboto) | CDN |
| CRM integration | DataCRM Web Forms | External HTTPS URL |

All third-party dependencies are consumed via **CDN URLs using HTTPS**, requiring no local package manager.

### 5.3 Non-Functional Requirements

#### Security

The static architecture is a deliberate security posture:

- **No server-side code execution** — The site delivers pre-built HTML, CSS, and JavaScript files only. There is no application server, no scripting language runtime, and no database, which eliminates entire classes of server-side vulnerabilities (SQL injection, remote code execution, server-side request forgery, etc.).
- **No secrets in the repository** — The codebase contains no API keys, passwords, or tokens. The only externally-linked resource is the public DataCRM quotation form URL, which is intentionally public.
- **HTTPS-only external resources** — All CDN links (`unpkg.com`, `fonts.googleapis.com`) and all CRM / social links use `https://`, preventing protocol-downgrade attacks.
- **Minimal JavaScript footprint** — All JS files are hand-written, dependency-free modules with clearly defined, narrow responsibilities. There are no third-party JavaScript packages installed locally, which eliminates supply-chain risks from `node_modules`.
- **`target="_blank"` on external links** — Social and CRM links open in a new tab, preventing tab-napping via `window.opener` references.
- **Static hosting compatibility** — When deployed to GitHub Pages, Netlify, Vercel, or similar platforms, the hosting provider enforces TLS and applies DDoS mitigation at the CDN/edge layer — security that requires zero application-level configuration.

#### High Availability

- **No single point of failure** — Because the site has no database, no application server, and no queue or cache, there are no runtime services that can crash, become overloaded, or require failover.
- **CDN-native delivery** — Static files can be deployed globally to a CDN (GitHub Pages, Netlify, Cloudflare Pages, Amazon CloudFront, etc.) so that users are served from the geographically closest edge node, reducing latency and eliminating origin-server availability concerns.
- **Zero cold-start latency** — Unlike server-rendered or serverless applications, static HTML files are served instantly without warm-up time.
- **Fault-tolerant dependency design** — The site degrades gracefully if CDN-loaded assets (Swiper.js, Google Fonts) fail to load: text content and navigation remain readable, and the layout falls back to system fonts.
- **Version-controlled source of truth** — All content lives in Git, enabling instant rollbacks to any previous working state without database migrations or server reconfigurations.

---

## 6. Setup & Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optionally: a local static file server (e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code, or Python's built-in HTTP server)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Juanvelandia-p/Power-Test.git
cd Power-Test

# 2. Serve the site locally (choose one option)

# Option A — Python 3 (no installation required on most systems)
python3 -m http.server 8080
# Then open http://localhost:8080 in your browser

# Option B — Node.js npx serve
npx serve .
# Then open the URL shown in the terminal

# Option C — VS Code Live Server extension
# Open the project folder in VS Code and click "Go Live" in the status bar
```

> **Note:** Opening `index.html` directly in a browser as a `file://` URL generally works, but some browsers may block CDN requests or relative-path assets. Using a local server avoids these issues.

---

## 7. Environment Variables & Configuration

This project is a **fully static website** and requires **no environment variables** and no `.env` files.

All external service integrations are hard-coded, public URLs:

| Integration | URL / Identifier | Purpose |
|---|---|---|
| DataCRM Web Form | `https://app.datacrm.la/...` | Customer quotation requests |
| Swiper.js CDN | `https://unpkg.com/swiper/swiper-bundle.min.*` | Image carousel library |
| Google Fonts CDN | `https://fonts.googleapis.com/...` | Web fonts (Lato, Raleway, Roboto) |
| WhatsApp link | `https://wa.me/573023173137` | Direct WhatsApp contact |
| Facebook | `https://web.facebook.com/PowerTestColombia` | Social media |
| Instagram | `https://www.instagram.com/powertestcolombia/` | Social media |

No secrets, tokens, or credentials appear anywhere in the codebase.

---

## 8. API Endpoints

This project is a **static frontend website** with no backend and no REST, GraphQL, or WebSocket API.

All "dynamic" functionality is handled client-side (carousels, menus, image sliders) or by third-party external services (DataCRM quotation forms). There are no endpoints to document.

---

## 9. Scripts

There are no build scripts, test runners, or task runners in this project (no `package.json` or equivalent).

The JavaScript files in `scripts/JavaScript/` are standalone ES6 modules loaded directly by the browser:

| File | Responsibility |
|---|---|
| `Menu-TopBar.js` | Hamburger toggle, dropdown expand/collapse, mobile navigation |
| `Swiper.js` | Initialises the Swiper carousel on the home page (loop, autoplay 5 s, animated text) |
| `Cambio-Logo.js` | Swaps logo image on hover (desktop ≥ 681 px only) |
| `Deteccion-Movimiento.js` | Hides the top-bar on scroll-down, shows it on scroll-up |
| `Retardo.js` | Adds 300 ms hover-out delay to nested sub-menu items |
| `Slider-product.js` | Product-page gallery: auto-advance (7 s), thumbnail sync, click-to-zoom with mouse-drag pan |

---

## 10. Testing & Coverage

There is currently **no automated test suite** in this repository. The project is a static website with no server-side logic to unit-test.

Manual testing is recommended across:

- **Browsers:** Chrome, Firefox, Edge, Safari (latest versions)
- **Devices:** Desktop (≥1024 px), tablet (768 px), mobile (≤480 px)
- **Scenarios:**
  - Navigation menu (desktop dropdown and mobile hamburger)
  - Hero carousel auto-play, manual navigation, and text animation
  - Product page image slider: thumbnail sync, auto-advance, zoom/pan
  - All "Pedir Cotización" buttons open the correct DataCRM form
  - WhatsApp and social links open in a new tab
  - Logo swap on hover (desktop only)
  - Top-bar hide/show on scroll

Contributions that introduce interactive functionality are encouraged to include manual test instructions in the pull request description.

---

## 11. Deployment

### Current Production Deployment

The live production site is served at:

> **[https://powertestcolombiasas.com](https://powertestcolombiasas.com)**

The site is hosted on **Vercel** (custom domain), which automatically handles CDN distribution, HTTPS, and edge caching. No manual deployment steps are required — see [Section 12 (CI/CD)](#12-cicd) for how deployments are triggered.

### Alternative Hosting Options

The site can also be deployed to any static hosting platform with zero build steps.

#### GitHub Pages (also active)

GitHub Pages is currently enabled for this repository (verifiable under **Settings → Pages**). The `pages-build-deployment` GitHub Actions workflow runs automatically on push to `master` and publishes the site at `https://juanvelandia-p.github.io/Power-Test/`.

#### Netlify

1. Connect the GitHub repository in the Netlify dashboard.
2. Set **Build command** to *(empty)* and **Publish directory** to `.` (root).
3. Deploy — Netlify will serve the site from its global CDN automatically.

#### Traditional Web Server (Apache / Nginx)

Copy all repository files to the web server's document root (e.g. `/var/www/html/`) and ensure the server is configured to serve static files. No special configuration is required.

> **Important:** The site uses **relative file paths** throughout (e.g. `../../../../resources/logos/…`). Keep the directory structure exactly as it is in the repository to avoid broken asset links.

---

## 12. CI/CD

This project uses a **fully automated CI/CD pipeline powered by Vercel**, triggered on every push and pull request through the native GitHub integration. No manual deployment steps are required.

### Pipeline Overview

```
Developer pushes code or opens a Pull Request
        │
        ▼
  Vercel GitHub App detects the event
        │
        ├─ Pull Request → Preview Deployment
        │     • Unique preview URL per PR branch
        │     • vercel[bot] posts the URL as a PR comment
        │     • GitHub commit status set to "success" once live
        │
        └─ Push to master → Production Deployment
              • Full deployment to https://powertestcolombiasas.com
              • Global CDN invalidation and edge cache refresh
              • GitHub commit status updated to "success"
```

### Vercel Integration Details

| Property | Value |
|---|---|
| **Platform** | [Vercel](https://vercel.com) |
| **Production URL** | [https://powertestcolombiasas.com](https://powertestcolombiasas.com) |
| **Vercel project** | `gsvelandia09s-projects/power-test` |
| **Trigger** | Every push to any branch; every pull request |
| **Build command** | *(none — zero-config static site)* |
| **Output directory** | `.` (repository root) |
| **Config file** | No `vercel.json` needed; Vercel auto-detects the static site |

### Pull Request Preview Deployments

Every pull request automatically receives:

1. A **preview deployment** at a unique branch-scoped URL  
   (e.g. `https://power-test-git-<branch>-gsvelandia09s-projects.vercel.app`)
2. A **`vercel[bot]` comment** in the PR thread with the deployment status, preview link, and a live-feedback link
3. A **GitHub commit status check** (`context: "Vercel"`) set to `success` once the deployment completes — this check must pass before merging is allowed

### GitHub Pages (secondary pipeline)

GitHub Pages is also enabled. The built-in `pages-build-deployment` workflow fires automatically on every push to `master` and publishes the site at `https://juanvelandia-p.github.io/Power-Test/`. This workflow has a verified deployment history visible under the [Actions tab](https://github.com/Juanvelandia-p/Power-Test/actions/workflows/pages/pages-build-deployment).

### What Vercel Validates Per Deployment

Because the project is a static site, Vercel performs:

- **Asset resolution** — all HTML, CSS, JS, and image files must resolve correctly at their relative paths
- **HTTP response codes** — the root `index.html` must return `200 OK`
- **Build time** — deployments typically complete in under 30 seconds
- **HTTPS enforcement** — all traffic is automatically redirected to HTTPS at the CDN edge

---

## 13. Contributing

We welcome improvements to content, design, and developer experience. Please follow these guidelines:

### Branching Strategy

```
master        ← production-ready code (default branch, triggers Vercel production deployment)
develop       ← integration branch (merge feature branches here first)
feature/<name> ← individual features or content updates
fix/<name>    ← bug fixes
```

### Pull Request Checklist

Before opening a pull request, ensure that:

- [ ] All HTML files pass W3C validation (https://validator.w3.org/)
- [ ] CSS follows the naming conventions already present in `scripts/CSS/`
- [ ] JavaScript is ES6+, without `var`, and passes ESLint (`eslint:recommended`)
- [ ] New product images are in **WebP or AVIF format** and under 300 KB each
- [ ] Relative paths to assets have been verified — open all affected pages from a local server
- [ ] The responsive layout has been checked at 320 px, 768 px, and 1280 px
- [ ] No secrets, API keys, or personal data have been committed
- [ ] The PR description explains what was changed and why

### Code Style

- **HTML:** 4-space indentation, semantic elements preferred
- **CSS:** Class names in kebab-case; media queries at the bottom of each stylesheet or in the dedicated responsive files (`Tablets.css`, `Mobiles.css`)
- **JavaScript:** 4-space indentation; event listeners registered inside `DOMContentLoaded` where applicable; no global variable pollution

### Adding a New Product Page

1. Copy an existing page from the closest category folder (e.g. `scripts/html/Productos y servicios/Agricolas/`)
2. Update the `<title>`, breadcrumb links, product images, and description text
3. Verify all asset paths resolve correctly from the new file location
4. Add a navigation link in `index.html` under the appropriate submenu column

### Reporting Issues

Open a GitHub Issue with:
- A clear title and description
- Steps to reproduce (for bugs)
- Screenshots or screen recordings where applicable
- Browser and device information

---

## 14. License

This project is proprietary software owned by **Power Test Colombia S.A.S.**

All rights reserved. No part of this codebase, design, or content may be reproduced, distributed, or transmitted in any form without the prior written permission of Power Test Colombia S.A.S.

For licensing inquiries, contact: **c.molano@powertestcolombiasas.com**

---

## 15. Developer Backend Profile

> *This section presents the developer's backend portfolio for recruiters and prospective employers.*

**Developer:** Juan Sebastián Velandia Pedraza  
**GitHub:** [github.com/Juanvelandia-p](https://github.com/Juanvelandia-p)

---

### 🏆 Recommended Backend Repository: `chatgptapi`

> **[github.com/Juanvelandia-p/chatgptapi](https://github.com/Juanvelandia-p/chatgptapi)**

Among all backend repositories in this portfolio (excluding FlowBoard, Power-Test, and FlowBoard-front), **`chatgptapi`** is the strongest demonstration of backend engineering competence.

#### Why it stands out

| Criterion | Implementation |
|---|---|
| **Backend architecture & clean code** | Strict three-layer structure (`controller` / `service` / `model`), Proxy design pattern applied to the service layer, single-responsibility classes, Lombok for boilerplate reduction |
| **Advanced RESTful API** | Spring Boot 3.5.3 REST endpoint (`GET /chat`) with parameter validation, structured JSON request/response models (`ChatRequest`, `ChatResponse`, `ChatMessage`), and input sanitisation before any outbound call |
| **Third-party integration** | Live HTTP integration with the **OpenAI ChatGPT API** (`POST https://api.openai.com/v1/chat/completions`), API key injected via `application.properties` — never hardcoded |
| **Performance optimisation** | `OpenAIServiceProxy` wraps the real service with a **`ConcurrentHashMap`-backed in-memory cache**, short-circuiting identical queries and avoiding redundant billable API calls |
| **CI/CD & cloud deployment** | **GitHub Actions** pipeline (`.github/workflows/main_chatgptapi.yml`) compiles and packages the JAR on every push to `main`, then deploys automatically to **Azure App Service** (`ChatGPTapi`) using a publish-profile secret; all pipeline runs completed successfully |
| **Security practices** | API key stored in `application.properties` / environment variable (not in source code); secrets managed through GitHub Secrets in CI; input validated to reject null, overly short, numeric-only, or symbol-only messages before forwarding to OpenAI |
| **Error handling & business logic** | Graceful rejection of malformed input with a descriptive Spanish-language response; cache hit/miss logic; response forwarding with HTTP client error propagation |

#### Technology stack

| Concern | Technology |
|---|---|
| Language | Java 17 |
| Framework | Spring Boot 3.5.3 |
| HTTP client | `RestTemplate` (Spring Web) |
| Design pattern | Proxy (service-layer caching) |
| Concurrency | `ConcurrentHashMap` (thread-safe cache) |
| Build | Apache Maven + Maven Wrapper |
| CI/CD | GitHub Actions → Azure App Service |

#### Key files

```
src/
└── main/java/edu/escuelaing/arsw/chatgptapi/
    ├── controller/ChatController.java       # REST endpoint
    ├── service/OpenAIService.java           # Direct OpenAI HTTP client
    ├── service/OpenAIServiceProxy.java      # Proxy: validation + cache + delegation
    └── model/                               # ChatMessage, ChatRequest, ChatResponse
.github/workflows/main_chatgptapi.yml        # CI/CD: build → test → deploy to Azure
```

---

### Additional Backend Projects

| Repository | Stack | Highlights |
|---|---|---|
| [FlowBoard](https://github.com/Juanvelandia-p/FlowBoard) *(excluded per brief)* | Spring Boot 3.5.3, MongoDB, JWT, WebSocket | Full-stack agile platform with JWT auth, real-time STOMP/SockJS, Azure deployment, integration tests |
| [PizarraRealTime](https://github.com/Juanvelandia-p/PizarraRealTime) | Spring Boot, WebSocket | Real-time collaborative whiteboard; multi-client STOMP broadcast |
| [ECISaludVital-3](https://github.com/Juanvelandia-p/ECISaludVital-3) | Spring Boot 3.5.0, MongoDB | Healthcare REST API backed by MongoDB Atlas |
| [Networking](https://github.com/Juanvelandia-p/Networking) | Java | Low-level socket programming and HTTP server from scratch |
| [MatrixConcurrente](https://github.com/Juanvelandia-p/MatrixConcurrente) | Java | Concurrent matrix multiplication demonstrating thread management |

---

<p align="center">
  <strong>Power Test Colombia S.A.S.</strong><br>
  Vía Siberia Cota, acceso Titán, Vda. Vuelta Grande, Cota, Cundinamarca<br>
  📞 310 787 4585 · 314 823 7634<br>
  📧 comercial@powertestcolombia.com<br>
  🌐 <a href="https://www.instagram.com/powertestcolombia/">Instagram</a> · <a href="https://web.facebook.com/PowerTestColombia">Facebook</a>
</p>
