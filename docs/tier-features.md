# Funzionalità per Tier — Pizzeria

Tre livelli di template, dallo Showcase di base alla soluzione enterprise con AI on-prem. Scegli il tier che corrisponde alle tue esigenze di crescita e automazione.

## Tier Base — €500-800 (consegna 2-3 settimane)

**Per chi**: Pizzeria indipendente che vuole vetrina online e visibilità Google Maps.  
**Sforzo stimato**: ~80h.

### Funzionalità incluse

- **Home Hero** con foto forno a legna + CTA "Ordina Online"
- **Menu Interattivo** organizzato per categorie:
  - Pizza Classiche (15+)
  - Pizza Farcite (10+)
  - Calzoni e Focacce (5+)
- **Foto + Prezzo + Allergeni** per ogni piatto
- **Orari, Telefono, Ubicazione** con Maps integrata
- **Gallery** forno, ambiente, preparazione
- **Form WhatsApp** per prenotazioni/domande
- **Schema Restaurant JSON-LD** per SEO locale Google
- **Mobile-first responsive** (LCP <2.5s)
- **HTTPS + SSL certificate** gratis Let's Encrypt

### Cosa NON è incluso

- Sistema ordine online / payment
- Integrazione delivery (Glovo/Just Eat)
- Multi-lingua
- Newsletter
- Analytics avanzato
- Accesso admin CMS

### Pricing add-on

| Add-on | Costo | Note |
|--------|-------|------|
| Dominio .it custom | €9/anno | Incluso primo anno |
| SSL + Hosting 1 anno | €50 | Rinnovabile |

---

## Tier Intermedio — €1.500-2.200 (consegna 4-6 settimane)

**Per chi**: Pizzeria consolidata che vuole gestire ordini e ridurre dipendenza OTA (Glovo/Just Eat).  
**Sforzo stimato**: ~250h.

### Funzionalità incluse (oltre al Base)

- **Sistema Ordine Asporto/Delivery**
  - Carrello con totale dinamico
  - Stripe/Pagamenti italiani per caparra (20-50%)
  - Conferma email + SMS pronto ("Pizza pronta alle 19:30")
- **Widget Integrazione Glovo/Just Eat** (frame embed esistente)
- **Newsletter opt-in** + email stagionale offerte
- **Multi-lingua IT/EN/DE** (base per turisti)
- **GDPR Compliance** (cookie banner, privacy policy, DPIA)
- **Sitemap dinamica** multi-lang
- **Admin Dashboard leggero** (modifica menu/orari senza codice)
- **Analytics** pageview + conversioni asporto (Google Analytics 4)

### Integrazioni disponibili

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Stripe | 1.4% + €0.30 per transazione | Payment processor |
| Twilio SMS | €15-30 | Notifiche ordine |
| SendGrid Email | Free (100/giorno) o €20 | Newsletter |

### Conversione Media Tier Base → Intermedio

- Aumento ordini online: +45-60% (riduce dipendenza commissioni OTA)
- No-show asporto cala dal 25% al 8% (SMS reminder)
- ROI caparra: +15% margine vs pagamento intero

---

## Tier Avanzato — €4.000-6.000 (consegna 10-12 settimane)

**Per chi**: Catena piccola (2-5 pizzerie) o pizzeria evoluta con esigenze AI/automazione.  
**Sforzo stimato**: ~500h.

### Funzionalità incluse (oltre all'Intermedio)

- **Pizza Customizer Drag-Drop**
  - Seleziona ingredienti da menu base
  - Preview foto generativa ingredienti selezionati
  - Calcolo prezzo dinamico per personalizzazione
  - Salva preferite cliente (require login)
  
- **Tracking Driver Real-time** (Leaflet map)
  - Integrazione con Glovo/Just Eat API per coordinata rider
  - Notifica ETA cliente
  - Feedback post-consegna

- **Chef AI Assistant** (RAG on-prem Ollama llama3.1:8b)
  - Query allergie/celiachia vs menu (knowledge base ingredienti)
  - Suggerimenti piatto per dieta cliente
  - Raccomandazioni vino pairing
  - Risponde 24/7 chat sito

- **Loyalty Punch Card Digitale**
  - Ogni ordine online accumula punti
  - 10 ordini = pizza gratis
  - QR code in receipt per accumulare offline
  - Integrazione POS SumUp/iZettle

- **Analytics Piatti Top + NPS**
  - Dashboard ingredienti più venduti
  - Net Promoter Score survey post-consegna
  - Analisi churn clienti

- **Multi-Location Admin**
  - Gestisci 2-5 pizzerie da single dashboard
  - Menu diverse per location
  - Merge ordini cross-location
  - Consolidation reporting

### Integrazioni Enterprise

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Ollama AI (on-prem) | €0 | Modello llama3.1:8b VPS locale |
| SumUp POS | €99-199 | Loyalty card reader |
| Glovo API | Free (+ commissione) | Real-time driver tracking |
| Leaflet Maps | €0 | Open-source map SDK |

---

## Confronto Tier

| Funzionalità | Base | Intermedio | Avanzato |
|---|:---:|:---:|:---:|
| Menu Interattivo | ✓ | ✓ | ✓ |
| Foto + Allergeni | ✓ | ✓ | ✓ |
| Maps + SEO JSON-LD | ✓ | ✓ | ✓ |
| **Ordini Online** | — | ✓ | ✓ |
| **SMS Notifiche** | — | ✓ | ✓ |
| **Multi-lingua** | — | ✓ | ✓ |
| **Newsletter** | — | ✓ | ✓ |
| **Admin Dashboard** | — | ✓ | ✓ |
| **Pizza Customizer** | — | — | ✓ |
| **Driver Tracking** | — | — | ✓ |
| **Chef AI RAG** | — | — | ✓ |
| **Loyalty Card** | — | — | ✓ |
| **Multi-Location** | — | — | ✓ |

---

## Manutenzione Ricorrente

| Piano | €/mese | Incluso |
|-------|---------|---------|
| **Basic** | €50 | Hosting + SSL + 1 backup/sett + supporto email |
| **Standard** | €100 | Basic + 4h modifiche/mese + monitoring uptime + phone support |
| **Premium** | €200 | Standard + 12h modifiche/mese + CDN Cloudflare + SEO optimization + AI model updates |

---

## Roadmap Post-Deploy

### Mese 1-2 (incluso)
- Lancio sito live
- Setup integrazione Stripe/SMS
- Training staff ordini online

### Mese 3-6 (Standard plan)
- Aggiunta loyalty card
- Fine-tuning menu foto
- SEO optimization locale

### Mese 6+ (Premium plan)
- AI chef assistant live
- Multi-location se applicabile
- Automazione email marketing

---

## Partnership & Supporto

**Hosting** — Hetzner VPS (EU-based, GDPR compliant)  
**SSL/CDN** — Cloudflare free tier  
**Payment** — Stripe + Pagamenti italiani  
**Support** — Federico Calò, email + Telegram

---

**Scegli il tier adatto. Contatta Federico per quotazione personalizzata.**

