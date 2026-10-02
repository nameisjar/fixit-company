# PRD — FIXIT Technology Solutions Website

## 1. Project Overview

### Product Name

FIXIT

### Product Type

Company profile + technology service marketplace/lead generation website.

### Business

FIXIT adalah perusahaan teknologi yang menyediakan layanan teknologi untuk rumah, bisnis, organisasi, dan instansi.

Layanan utama:

* CCTV Installation
* Starlink Installation
* Network & Wi-Fi Installation
* Website Development
* Application Development
* IT Support
* Computer & Device Maintenance
* Custom Technology Solutions

### Primary Objective

Membangun website profesional yang:

1. Memperkenalkan FIXIT.
2. Menampilkan layanan teknologi.
3. Menampilkan portofolio pekerjaan.
4. Membangun kepercayaan calon pelanggan.
5. Mengarahkan pengunjung untuk melakukan konsultasi melalui WhatsApp.
6. Dapat dikembangkan menjadi sistem CRM dan customer management di masa depan.

### Target Market

* Rumah tangga
* UMKM
* Toko
* Kantor
* Sekolah
* Organisasi
* Instansi
* Perusahaan

### Initial Service Area

Merauke dan Papua Selatan.

Website harus dibuat dengan arsitektur yang memungkinkan area layanan diperluas ke wilayah lain.

---

# 2. Product Goals

## Primary Goals

### G1 — Generate Leads

Pengunjung harus dapat menghubungi FIXIT dengan mudah melalui WhatsApp.

### G2 — Explain Services

Pengunjung harus dapat memahami layanan FIXIT tanpa harus bertanya terlebih dahulu.

### G3 — Build Trust

Website harus menampilkan:

* portfolio
* proses kerja
* informasi perusahaan
* area layanan
* FAQ
* dokumentasi pekerjaan

### G4 — SEO

Setiap layanan harus mempunyai halaman yang dapat diindeks search engine.

Contoh:

* `/services/cctv`
* `/services/starlink`
* `/services/network`
* `/services/website`
* `/services/application`
* `/services/it-support`

### G5 — Scalability

Arsitektur aplikasi harus memungkinkan penambahan:

* CMS
* CRM
* customer portal
* booking
* quotation
* invoice
* maintenance management
* WhatsApp automation

tanpa perlu membangun ulang frontend dari awal.

---

# 3. Non-Goals

Fitur berikut TIDAK wajib pada MVP:

* Online payment
* Customer login
* Online invoice
* Full CRM
* Technician dashboard
* Live tracking
* E-commerce
* Online booking dengan kalender
* AI chatbot

Fitur tersebut hanya dipersiapkan secara arsitektur untuk fase berikutnya.

---

# 4. Technology Stack

## Frontend

Use:

* Nuxt 3
* Vue 3
* TypeScript
* Tailwind CSS

## Rendering

Gunakan SSR/SSG sesuai kebutuhan halaman.

Prioritaskan:

* SEO
* performance
* mobile experience

## Icons

Gunakan library icon yang konsisten.

Contoh:

* Lucide
* Nuxt Icon

Jangan menggunakan emoji sebagai icon UI.

## Fonts

Gunakan font modern dan mudah dibaca.

Preferensi:

* Inter
* Geist
* Manrope

## Backend

MVP:

Backend belum wajib.

Gunakan static data / local TypeScript data untuk:

* services
* portfolio
* FAQ
* company information

Backend akan ditambahkan pada fase berikutnya.

## Future Backend

Jika backend diperlukan:

* Node.js
* TypeScript
* Express
* PostgreSQL
* Prisma ORM

---

# 5. Design Direction

## Design Keywords

FIXIT harus terasa:

* modern
* professional
* technical
* reliable
* clean
* local
* approachable

Jangan membuat desain seperti:

* website template generik
* crypto website
* AI startup landing page
* website terlalu corporate
* terlalu banyak gradient
* terlalu banyak animasi

## Visual Style

Gunakan:

* dark/navy foundation
* white/light surfaces
* satu accent color brand
* large typography
* rounded cards secukupnya
* subtle borders
* subtle shadows
* high quality project images

## UI Principles

1. Mobile first.
2. Clear hierarchy.
3. CTA selalu mudah ditemukan.
4. Jangan menggunakan terlalu banyak card.
5. Hindari visual clutter.
6. Gunakan whitespace.
7. Semua interaction harus memiliki feedback.

---

# 6. Brand Message

Primary message:

> Solusi Teknologi untuk Rumah, Bisnis, dan Organisasi.

Supporting message:

> Dari instalasi CCTV, Starlink, jaringan hingga pembuatan website dan aplikasi, FIXIT membantu menyediakan solusi teknologi yang sesuai dengan kebutuhan Anda.

Primary CTA:

> Konsultasi Sekarang

Secondary CTA:

> Lihat Layanan

---

# 7. Sitemap

```text
/
│
├── /services
│   ├── /services/cctv
│   ├── /services/starlink
│   ├── /services/network
│   ├── /services/website
│   ├── /services/application
│   └── /services/it-support
│
├── /portfolio
│   └── /portfolio/[slug]
│
├── /about
│
├── /faq
│
└── /contact
```

---

# 8. Homepage

Route:

```text
/
```

## Section Order

```text
Navbar
↓
Hero
↓
Services
↓
Problem/Solution
↓
Why FIXIT
↓
Portfolio
↓
How It Works
↓
Service Area
↓
FAQ
↓
CTA
↓
Footer
```

---

# 9. Navbar

Desktop:

```text
FIXIT

Layanan
Portofolio
Tentang Kami
FAQ

[ Konsultasi Sekarang ]
```

Mobile:

```text
FIXIT                    ☰
```

Mobile menu:

```text
Layanan
Portofolio
Tentang Kami
FAQ
Kontak

[ Konsultasi Sekarang ]
```

Navbar harus sticky pada desktop dan mobile.

---

# 10. Hero

## Content

Headline:

> Solusi Teknologi untuk Rumah, Bisnis, dan Organisasi.

Supporting text:

> Dari CCTV, Starlink, jaringan hingga website dan aplikasi. FIXIT membantu menghadirkan solusi teknologi yang sesuai dengan kebutuhan Anda.

CTA:

```text
[ Konsultasi Sekarang ]
[ Lihat Layanan ]
```

## Hero Visual

Gunakan visual yang berhubungan dengan layanan FIXIT.

Prioritaskan:

1. Foto pekerjaan asli jika tersedia.
2. Foto perangkat.
3. Technical composition.
4. Abstract technical visual sebagai fallback.

Jangan menggunakan stock photo manusia yang terlalu generik.

---

# 11. Services Section

Title:

> Solusi Teknologi yang Anda Butuhkan

Subtitle:

> Berbagai kebutuhan teknologi dapat Anda konsultasikan bersama FIXIT.

Service cards:

### CCTV

Description:

> Instalasi dan konfigurasi CCTV untuk rumah, toko, kantor, sekolah, dan area lainnya.

Slug:

```text
cctv
```

### Starlink

Description:

> Instalasi dan konfigurasi Starlink untuk kebutuhan internet di berbagai lokasi.

Slug:

```text
starlink
```

### Network & Wi-Fi

Description:

> Instalasi jaringan LAN, Wi-Fi, router, access point, dan infrastruktur jaringan.

Slug:

```text
network
```

### Website

Description:

> Pembuatan website profesional untuk bisnis, organisasi, sekolah, maupun personal.

Slug:

```text
website
```

### Application

Description:

> Pengembangan aplikasi sesuai kebutuhan bisnis dan organisasi.

Slug:

```text
application
```

### IT Support

Description:

> Bantuan teknis untuk perangkat, software, jaringan, dan kebutuhan IT lainnya.

Slug:

```text
it-support
```

---

# 12. Service Detail Pages

Semua service detail page harus menggunakan reusable template.

Route:

```text
/services/[slug]
```

Data service disimpan secara terstruktur.

Contoh:

```ts
interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  process: ProcessStep[]
  faqs: FAQ[]
  ctaText: string
}
```

Page structure:

```text
Breadcrumb
↓
Hero
↓
Service Description
↓
Features
↓
Benefits
↓
Process
↓
Related Portfolio
↓
FAQ
↓
CTA
```

---

# 13. CCTV Service Page

Title:

> Jasa Instalasi CCTV

Description:

> Solusi keamanan dengan sistem CCTV yang disesuaikan dengan kebutuhan rumah, bisnis, maupun organisasi.

Features:

* Camera installation
* DVR/NVR setup
* Remote monitoring
* Night vision
* Recording
* Network configuration
* Camera positioning

Potential customers:

* Rumah
* Toko
* Kantor
* Sekolah
* Gudang
* Area usaha

CTA:

> Konsultasikan Kebutuhan CCTV Anda

---

# 14. Starlink Service Page

Title:

> Instalasi Starlink

Description:

> Membantu proses pemasangan, konfigurasi, dan pengujian Starlink agar siap digunakan.

Process:

```text
Konsultasi
↓
Survey / Analisis Lokasi
↓
Penentuan Posisi Perangkat
↓
Instalasi
↓
Konfigurasi
↓
Testing
↓
Serah Terima
```

CTA:

> Konsultasikan Instalasi Starlink

---

# 15. Network Service Page

Services:

* LAN installation
* Wi-Fi installation
* Router configuration
* Access point installation
* Network troubleshooting
* Network optimization
* Basic network infrastructure

Target:

* Rumah
* Kantor
* Sekolah
* Toko
* UMKM
* Instansi

---

# 16. Website Service Page

Services:

* Company profile
* Business website
* Landing page
* E-commerce
* Web application
* Custom website

Emphasis:

> Website dibuat sesuai kebutuhan bisnis, bukan sekadar menggunakan template.

CTA:

> Diskusikan Website Anda

---

# 17. Application Service Page

Possible services:

* Web application
* Internal system
* Dashboard
* Management system
* Custom application
* API integration

Do not claim capabilities that FIXIT has not actually implemented.

---

# 18. IT Support Page

Services:

* Computer troubleshooting
* Software installation
* Network troubleshooting
* Device configuration
* System maintenance
* Basic IT consultation

---

# 19. Portfolio

Route:

```text
/portfolio
```

Portfolio filters:

```text
Semua
CCTV
Starlink
Network
Website
Application
IT Support
```

Portfolio card:

```text
Image
Category
Project Name
Location
Short Description
```

Example:

```text
Instalasi CCTV Toko ABC

CCTV
Merauke

8 kamera CCTV + DVR + remote monitoring.
```

---

# 20. Portfolio Detail

Route:

```text
/portfolio/[slug]
```

Structure:

```text
Project Hero
↓
Project Overview
↓
Client Problem
↓
Solution
↓
Implementation
↓
Gallery
↓
Result
↓
Related Services
↓
CTA
```

Portfolio data:

```ts
interface Portfolio {
  slug: string
  title: string
  category: string
  location: string
  description: string
  problem?: string
  solution?: string
  result?: string
  images: string[]
  services: string[]
}
```

Do not invent client names, project results, locations, or metrics.

If real data is unavailable, use clearly marked placeholder data during development.

---

# 21. Why FIXIT

Title:

> Kenapa FIXIT?

Use four principles:

### One-Stop Technology Solution

Berbagai kebutuhan teknologi dapat dikonsultasikan melalui satu penyedia.

### Custom Solution

Solusi disesuaikan dengan kebutuhan dan kondisi pelanggan.

### Local Support

Dukungan teknis yang dekat dengan pelanggan.

### Clear Process

Proses pekerjaan dijelaskan sejak konsultasi hingga penyelesaian.

Avoid unsupported claims such as:

* terbaik
* nomor satu
* termurah
* paling profesional
* 100% terpercaya

unless supported by real evidence.

---

# 22. How It Works

Title:

> Bagaimana FIXIT Bekerja?

Steps:

### 01 — Konsultasi

Ceritakan kebutuhan teknologi Anda.

### 02 — Analisis

FIXIT memahami kebutuhan dan kondisi di lapangan.

### 03 — Penawaran

Pelanggan menerima solusi dan estimasi pekerjaan.

### 04 — Pengerjaan

Tim melakukan instalasi atau pengembangan.

### 05 — Testing & Serah Terima

Solusi diuji sebelum diserahkan kepada pelanggan.

---

# 23. Consultation CTA

CTA section:

Headline:

> Punya kebutuhan teknologi?

Description:

> Ceritakan kebutuhan Anda. Tim FIXIT akan membantu mencari solusi yang sesuai.

Buttons:

```text
[ Konsultasi via WhatsApp ]
[ Hubungi Kami ]
```

---

# 24. WhatsApp Integration

Primary WhatsApp number harus disimpan dalam satu configuration file.

Example:

```ts
export const siteConfig = {
  whatsapp: '628XXXXXXXXXX',
}
```

Jangan hardcode nomor WhatsApp di banyak component.

Create helper:

```ts
function generateWhatsAppUrl(message: string): string
```

Example message:

```text
Halo FIXIT,

Saya ingin berkonsultasi mengenai layanan CCTV.

Nama:
Lokasi:
Kebutuhan:
```

WhatsApp URL harus menggunakan URL encoding.

---

# 25. Smart Consultation Flow

Ketika user klik:

```text
Konsultasi Sekarang
```

tampilkan modal atau consultation section.

Fields:

```text
Nama
Nomor WhatsApp
Layanan
Lokasi
Deskripsi kebutuhan
```

Service options:

```text
CCTV
Starlink
Network & Wi-Fi
Website
Application
IT Support
Lainnya
```

Submit:

1. Validate form.
2. Generate WhatsApp message.
3. Open WhatsApp.
4. Do not store personal data on the frontend.

---

# 26. About Page

Route:

```text
/about
```

Sections:

```text
Company Introduction
↓
Mission
↓
Vision
↓
Services
↓
Working Principles
↓
Service Area
↓
CTA
```

Initial positioning:

> FIXIT hadir untuk membantu masyarakat, bisnis, dan organisasi memanfaatkan teknologi secara lebih praktis dan sesuai kebutuhan.

Do not fabricate:

* company founding year
* employee count
* number of customers
* certifications
* awards
* partnerships

until real data is available.

---

# 27. FAQ

Initial questions:

### Apakah FIXIT melayani pemasangan CCTV?

Ya, FIXIT menyediakan layanan instalasi CCTV sesuai kebutuhan pelanggan.

### Apakah FIXIT melayani pemasangan Starlink?

Ya, FIXIT menyediakan layanan instalasi dan konfigurasi Starlink.

### Apakah FIXIT bisa membuat website custom?

Ya, website dapat dikembangkan berdasarkan kebutuhan bisnis atau organisasi.

### Apakah FIXIT melayani jaringan Wi-Fi?

Ya, termasuk instalasi dan konfigurasi jaringan sesuai kebutuhan.

### Apakah bisa meminta konsultasi terlebih dahulu?

Ya. Pengunjung dapat menghubungi FIXIT melalui WhatsApp.

FAQ harus menggunakan accordion component.

---

# 28. Contact Page

Route:

```text
/contact
```

Content:

```text
WhatsApp
Email
Instagram
Address
Service Area
Operating Hours
```

Map dapat ditambahkan jika alamat kantor sudah ditentukan.

Jangan menggunakan lokasi palsu.

---

# 29. Footer

Footer structure:

```text
FIXIT

Solusi Teknologi untuk Rumah,
Bisnis, dan Organisasi.

Layanan
- CCTV
- Starlink
- Network
- Website
- Application
- IT Support

Perusahaan
- Tentang Kami
- Portfolio
- FAQ
- Kontak

Social
- Instagram
- Facebook
- TikTok

© FIXIT 2026
```

---

# 30. SEO Requirements

Setiap page harus memiliki:

* unique title
* meta description
* canonical URL
* Open Graph metadata
* Twitter/X metadata
* semantic headings

Example:

```text
Title:
Jasa Instalasi CCTV Merauke | FIXIT

Description:
FIXIT menyediakan layanan instalasi CCTV untuk rumah, toko, kantor, sekolah, dan bisnis di Merauke dan Papua Selatan.
```

Homepage:

```text
Title:
FIXIT — Solusi Teknologi untuk Rumah, Bisnis, dan Organisasi
```

Generate:

```text
/sitemap.xml
/robots.txt
```

Use structured data where appropriate:

* Organization
* LocalBusiness if applicable
* Service
* FAQPage

Do not add structured data for information that is not actually present on the page.

---

# 31. Performance Requirements

Target:

* Mobile-first
* Fast initial load
* Responsive
* Optimized images
* Lazy loading
* WebP/AVIF where appropriate
* Avoid unnecessary JavaScript
* Avoid excessive animations

Images should use Nuxt Image or an equivalent image optimization solution.

Do not load huge original images directly.

---

# 32. Accessibility

Minimum requirements:

* semantic HTML
* keyboard navigation
* visible focus states
* alt text
* sufficient contrast
* proper heading hierarchy
* accessible buttons
* accessible forms
* aria attributes when necessary

Do not use color as the only indicator of state.

---

# 33. Responsive Breakpoints

Design for:

```text
Mobile:
320px+

Tablet:
768px+

Desktop:
1024px+

Large Desktop:
1280px+
```

The site must work properly at all breakpoints.

---

# 34. Component Architecture

Recommended structure:

```text
components/
│
├── layout/
│   ├── Navbar.vue
│   ├── MobileMenu.vue
│   └── Footer.vue
│
├── home/
│   ├── Hero.vue
│   ├── ServicesPreview.vue
│   ├── WhyFixit.vue
│   ├── PortfolioPreview.vue
│   ├── Process.vue
│   ├── ServiceArea.vue
│   ├── FAQPreview.vue
│   └── FinalCTA.vue
│
├── services/
│   ├── ServiceCard.vue
│   ├── ServiceHero.vue
│   ├── ServiceFeatures.vue
│   ├── ServiceProcess.vue
│   └── RelatedServices.vue
│
├── portfolio/
│   ├── PortfolioCard.vue
│   ├── PortfolioGrid.vue
│   ├── PortfolioFilter.vue
│   └── PortfolioGallery.vue
│
├── ui/
│   ├── Button.vue
│   ├── Badge.vue
│   ├── Card.vue
│   ├── Accordion.vue
│   ├── Modal.vue
│   └── Container.vue
│
└── consultation/
    └── ConsultationForm.vue
```

---

# 35. Data Architecture

Use TypeScript data files initially.

```text
data/
├── services.ts
├── portfolio.ts
├── faq.ts
└── site.ts
```

Example:

```ts
export const services = [
  {
    slug: 'cctv',
    title: 'Instalasi CCTV',
    description: '...',
    icon: 'lucide:cctv',
    features: [],
    benefits: [],
  },
]
```

---

# 36. Configuration

Create:

```text
config/
└── site.ts
```

Example:

```ts
export const siteConfig = {
  name: 'FIXIT',
  description:
    'Solusi teknologi untuk rumah, bisnis, dan organisasi.',
  url: 'https://fixit.id',
  whatsapp: '',
  email: '',
  instagram: '',
  address: '',
}
```

Use environment variables for sensitive configuration.

Do not expose secrets in frontend source code.

---

# 37. Recommended Folder Structure

```text
fixit/
│
├── assets/
│   └── css/
│       └── main.css
│
├── components/
│
├── config/
│
├── data/
│
├── layouts/
│
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── contact.vue
│   ├── faq.vue
│   │
│   ├── services/
│   │   ├── index.vue
│   │   └── [slug].vue
│   │
│   └── portfolio/
│       ├── index.vue
│       └── [slug].vue
│
├── public/
│   ├── images/
│   └── favicon.ico
│
├── types/
│
├── utils/
│
├── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

---

# 38. Functional Requirements

## FR-01 Navigation

User can navigate to all primary pages.

## FR-02 Service Discovery

User can browse all services.

## FR-03 Service Details

User can view detailed information for each service.

## FR-04 Portfolio

User can browse completed projects.

## FR-05 Portfolio Filtering

User can filter portfolio by category.

## FR-06 Consultation

User can start a consultation through WhatsApp.

## FR-07 Responsive

All pages must work on mobile, tablet, and desktop.

## FR-08 SEO

Each page has unique metadata.

## FR-09 FAQ

User can expand/collapse FAQ items.

## FR-10 External Links

Social media and WhatsApp links must open correctly.

---

# 39. Non-Functional Requirements

## Performance

Pages should load quickly on mobile connections.

## Security

* No secret keys in frontend.
* No sensitive information stored in localStorage.
* Sanitize any future user input.
* Use HTTPS in production.

## Maintainability

Components should be reusable.

Avoid:

```vue
<template>
  <!-- 1000+ lines -->
</template>
```

Prefer smaller components.

## Scalability

Adding a new service should require primarily adding data rather than creating an entirely new page structure.

---

# 40. Analytics

Prepare the architecture for analytics.

Potential events:

```text
page_view
service_view
portfolio_view
consultation_click
whatsapp_click
phone_click
social_click
```

Analytics implementation can be added after MVP.

Do not add tracking that is not required for MVP.

---

# 41. Future CRM Architecture

Future system:

```text
Website
   │
   ▼
Consultation
   │
   ▼
API
   │
   ▼
PostgreSQL
   │
   ▼
CRM Dashboard
```

Lead:

```ts
interface Lead {
  id: string
  name: string
  phone: string
  service: string
  location: string
  message: string
  status: LeadStatus
  createdAt: Date
}
```

Status:

```text
NEW
CONTACTED
SURVEY
QUOTATION
NEGOTIATION
WON
LOST
```

This is future scope and should not be implemented in MVP unless explicitly requested.

---

# 42. Content Rules

The website must not invent company information.

Do not fabricate:

* customer numbers
* project numbers
* years of experience
* awards
* certifications
* partnerships
* testimonials
* revenue
* success rates

Use placeholders where real data is unavailable.

Example:

```text
[PROJECT IMAGE]
[CLIENT NAME]
[PROJECT DESCRIPTION]
```

instead of inventing a customer.

---

# 43. Development Phases

## Phase 1 — Foundation

* Initialize Nuxt
* Configure TypeScript
* Configure Tailwind
* Setup fonts
* Setup global CSS
* Setup site configuration
* Setup layout
* Setup responsive container

## Phase 2 — Core UI

Implement:

* Navbar
* Footer
* Button
* Card
* Badge
* Accordion
* Modal

## Phase 3 — Homepage

Implement:

* Hero
* Services
* Why FIXIT
* Portfolio
* Process
* Service Area
* FAQ
* CTA

## Phase 4 — Services

Implement:

```text
/services
/services/[slug]
```

using reusable service data.

## Phase 5 — Portfolio

Implement:

```text
/portfolio
/portfolio/[slug]
```

with filtering.

## Phase 6 — Company Pages

Implement:

```text
/about
/faq
/contact
```

## Phase 7 — WhatsApp

Implement consultation flow.

## Phase 8 — SEO

Implement:

* metadata
* sitemap
* robots
* OpenGraph
* structured data

## Phase 9 — Performance

Optimize:

* images
* fonts
* JavaScript
* animations
* loading

## Phase 10 — QA

Test:

* mobile
* tablet
* desktop
* navigation
* forms
* WhatsApp
* SEO
* accessibility
* broken links

---

# 44. Definition of Done

MVP dianggap selesai apabila:

* [ ] Homepage selesai.
* [ ] Semua service pages selesai.
* [ ] Portfolio page selesai.
* [ ] Portfolio detail selesai.
* [ ] About page selesai.
* [ ] FAQ selesai.
* [ ] Contact page selesai.
* [ ] Responsive.
* [ ] WhatsApp CTA berfungsi.
* [ ] Consultation form berfungsi.
* [ ] SEO metadata tersedia.
* [ ] Sitemap tersedia.
* [ ] Robots tersedia.
* [ ] Tidak ada broken link.
* [ ] Tidak ada console error.
* [ ] Tidak ada TypeScript error.
* [ ] Tidak ada fabricated company information.
* [ ] Lighthouse/performance telah diperiksa.
* [ ] Website dapat di-build untuk production.

---

# 45. Coding Rules for Codex

When implementing this project:

1. Use TypeScript.
2. Prefer Composition API.
3. Prefer `<script setup lang="ts">`.
4. Keep components small and reusable.
5. Avoid duplicated data.
6. Keep service content in data files.
7. Keep site configuration centralized.
8. Do not hardcode WhatsApp numbers in components.
9. Do not hardcode repeated UI content.
10. Use semantic HTML.
11. Use accessible buttons and forms.
12. Do not use emoji as UI icons.
13. Do not invent company information.
14. Do not add unnecessary dependencies.
15. Do not introduce backend infrastructure unless requested.
16. Do not implement authentication in MVP.
17. Do not implement payment in MVP.
18. Do not implement CRM in MVP.
19. Maintain responsive behavior.
20. Run type checking and production build before considering a feature complete.

---

# 46. Codex Implementation Strategy

Codex should implement the project incrementally.

Do NOT attempt to build the entire website in one step.

Recommended order:

```text
1. Project setup
        ↓
2. Design system
        ↓
3. Layout
        ↓
4. Homepage
        ↓
5. Services
        ↓
6. Portfolio
        ↓
7. About / FAQ / Contact
        ↓
8. WhatsApp consultation
        ↓
9. SEO
        ↓
10. Performance
        ↓
11. QA
```

After every phase:

1. Run type checking.
2. Run linting if configured.
3. Run production build.
4. Fix errors before continuing.
5. Preserve existing functionality.

---

# 47. Important Codex Instruction

Before writing significant code:

1. Inspect the existing repository.
2. Identify the current framework.
3. Identify existing dependencies.
4. Do not replace the project architecture unnecessarily.
5. Reuse existing components when possible.
6. If the repository is empty, initialize according to this PRD.
7. Ask for clarification only when a missing decision blocks implementation.
8. Otherwise make reasonable implementation decisions consistent with this PRD.

When implementing UI, prioritize:

```text
Clarity
>
Usability
>
Performance
>
Maintainability
>
Visual effects
```

The website should feel like a real technology company website, not a generic generated landing page.
