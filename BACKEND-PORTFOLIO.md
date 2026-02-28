# Backend Portfolio — Juanvelandia-p

> **Audience:** Recruiters and employers evaluating backend engineering skills.

This document analyses the public repositories owned by **Juanvelandia-p** (excluding *FlowBoard*, *Power-Test*, and *FlowBoard-front*) and identifies the one that best demonstrates a backend-focused professional profile.

---

## Repository Analysis

The table below evaluates the most relevant repositories against the key backend criteria.

| Repository | Stack | Backend Architecture | RESTful API / Protocol | Third-party Integration | CI/CD & Cloud | Tests | Notes |
|---|---|---|---|---|---|---|---|
| **chatgptapi** | Java / Spring Boot | Controller → Service → Model (layered); Proxy design pattern | REST (Spring MVC) | OpenAI ChatGPT API | GitHub Actions → Azure App Service | Unit-test structure present | Input validation, in-memory caching via Proxy |
| **Pizarra-real-time** | JS (React) + Java / Spring Boot | React frontend + Spring Boot backend | WebSocket / STOMP | — | GitHub Actions → Azure Static Web Apps + Azure App Service | — | Real-time collaboration; Azure cloud deployment |
| **ECISaludVital-3** | Java / Spring Boot | Spring Boot MVC | REST | — | Maven wrapper | Test directory present | Health-information domain; basic persistence |
| **TallerPersistencia** | Java / Spring Boot | Spring Boot + JPA | REST | — | Maven wrapper | — | Data-persistence workshop; JPA/Hibernate usage |
| **Networking** | Java (raw sockets) | Custom HTTP server (ServerSocket) | Raw HTTP / TCP | — | — | — | Academic networking exercises |
| **Proyecto-Integrador-Final** | Java / Spring Boot | Microservices design (documented) | REST; JWT / OAuth2 (documented) | — | — | JUnit suite (documented) | SDLC + AI Generative; architecture fully documented but mainly design artefact |

---

## ✅ Recommended Repository: `chatgptapi`

**GitHub:** [https://github.com/Juanvelandia-p/chatgptapi](https://github.com/Juanvelandia-p/chatgptapi)

### Why it stands out for a backend role

#### 1. Backend Architecture & Clean Code
The project follows a three-layer Spring Boot architecture — **Controller → Service → Model** — with a clear separation of concerns. A dedicated `OpenAIServiceProxy` wraps the real `OpenAIService` using the **Proxy design pattern**, adding caching and validation without touching the core logic. This demonstrates awareness of software design patterns and SOLID principles.

#### 2. Advanced RESTful API
A REST endpoint (`GET /chat`) is exposed through `ChatController`, which delegates to the proxy service. The controller is thin, the service layer owns the business rules, and the model classes map cleanly to and from the external API's JSON structure.

#### 3. Integration with a Third-Party Service
The backend calls the **OpenAI API** (`https://api.openai.com/v1/chat/completions`) using a `RestTemplate` configured with the API key from `application.properties`. This shows practical experience with HTTP client programming, JSON serialisation/deserialisation, and secure handling of external credentials via environment configuration.

#### 4. CI/CD & Cloud Deployment
The repository includes a fully functional **GitHub Actions** pipeline (`.github/workflows/main_chatgptapi.yml`) that:
- Checks out the code on every push to `main`
- Builds the project with `mvn clean install` (Java 17)
- Packages the artifact as a JAR
- Deploys the JAR to an **Azure App Service** (Azure Web Apps) using the `azure/webapps-deploy` action and a publish profile stored as a GitHub Secret

This is a production-grade CI/CD pipeline deployed to a managed cloud platform.

#### 5. Business Logic & Error Handling
The `OpenAIServiceProxy` implements several input-validation rules before forwarding requests:
- Message must be non-null
- Minimum length of 3 characters
- Rejection of messages consisting solely of numbers
- Rejection of messages consisting solely of symbols or whitespace

Validated messages are served from an **in-memory cache** (avoiding redundant API calls), while invalid messages are rejected with meaningful feedback. This reflects real-world backend responsibility: protecting external integrations from malformed input and controlling costs.

#### 6. Scalability Considerations
- In-memory response caching reduces latency and rate-limit exposure against the OpenAI API.
- The proxy layer decouples caching and validation from the actual API client, making it easy to swap the caching implementation (e.g., Redis) or add rate limiting without changing the core service.

---

## Summary Scorecard

| Criterion | chatgptapi | Score |
|---|---|---|
| Backend architecture & clean code | Layered + Proxy pattern | ⭐⭐⭐⭐⭐ |
| RESTful API | Spring MVC REST endpoint | ⭐⭐⭐⭐ |
| Third-party service integration | OpenAI ChatGPT API | ⭐⭐⭐⭐⭐ |
| CI/CD & cloud deployment | GitHub Actions → Azure App Service | ⭐⭐⭐⭐⭐ |
| Business logic & error handling | Input validation + caching | ⭐⭐⭐⭐ |
| Scalability / NFRs | In-memory cache, proxy abstraction | ⭐⭐⭐⭐ |

**Overall: the `chatgptapi` repository is the most complete demonstration of backend engineering skills in this portfolio**, combining a real production deployment pipeline, third-party API integration, design patterns, and meaningful business logic in a compact, well-structured Spring Boot project.
