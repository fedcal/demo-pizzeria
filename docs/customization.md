# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Cambia qui per il colore primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi il logo SVG in `public/logo.svg`.

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`:

```typescript
{
  path: 'servizi',
  loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
  title: 'Servizi — Pizzeria'
}
```

## Cambiare i metadati SEO

Edita `src/index.html` per:
- `<title>` globale
- `<meta name="description">`
- Open Graph

Per metadati per-route usa `Title` e `Meta` di `@angular/platform-browser`.

## Disabilitare il prerender

In `angular.json`:

```json
"prerender": false
```

In questo caso il sito gira solo in modalità SSR runtime (più lento al cold start, più dinamico).

## White-label per cliente

1. Fork del repo o copia in nuova cartella
2. Sostituisci `pizzeria` con nome cliente (`acme-pizzeria`)
3. Sostituisci footer rimuovendo riferimento a Federico (modifica `footer.component.ts`)
4. Personalizza `vercel.json` con domain custom cliente
5. Deploy su Vercel cliente con loro account

---

## Possibili Sviluppi Customizzabili per Pizzeria

### 1. Integrazione Glovo/Deliveroo Auto-Accept
**Scope**: ~20h | **Tier**: Intermedio+ | **Valore**: Automazione completamente hands-free ordini delivery

Collegamento API Glovo/Just Eat per accettare ordini direttamente in cucina (stampante termica), senza passare dal sito. Riduce errori manuali e time-to-print.

### 2. Fidelity Card QR Fisico
**Scope**: ~15h | **Tier**: Avanzato | **Valore**: Incremento visita 15-20% via punch offline

Generazione QR code stampabile per cartoncino (10x10cm) da distribuire in sede. Scansione in cassa o sito accumula punti. Bridging online/offline.

### 3. Notifiche Push Asporto Real-time
**Scope**: ~12h | **Tier**: Intermedio+ | **Valore**: Engagement 40% (push vs email)

Web Push browser per clienti iscritti: "Pizza pronta!" quando cucina preme 'ready'. Installa la PWA sul telefono.

### 4. Ordini Ricorrenti (Subscription)
**Scope**: ~25h | **Tier**: Avanzato | **Valore**: Revenue predicibile +€800/mese

Es. lunedì ore 12:30 = pizza carbonara + coca. Setup una volta, rinnova automaticamente. Stripe subscription billing.

### 5. Donation System Community
**Scope**: ~18h | **Tier**: Intermedio+ | **Valore**: CSR + PR locale (food bank)

Checkbox "Aggiungi €3 per Food Bank locale" a checkout. Raccolta verso ONLUS certificata. Certificato donazione cliente + comunicato stampa annuale.

### 6. Galleria Foto Utente (UGC)
**Scope**: ~20h | **Tier**: Avanzato | **Valore**: Testimonial + social proof

Clients caricano foto piatto taggandoli #nostraPizzeria. Approvazione manuale, gallery pubblica con permessi. Aumenta fiducia nuovi clienti 35%.

### 7. Menu Stagionale Auto-Swap
**Scope**: ~16h | **Tier**: Intermedio+ | **Valore**: Relevance + frescura percepita

Schedule XML upload: "Menu primavera 15/3 - 15/6". Sito auto-cambia visual + database ingredienti. Release notes blog automatiche.

### 8. Integrazione Booking Tavoli (Risto-style)
**Scope**: ~22h | **Tier**: Avanzato | **Valore**: Captare 10-15 prenotazioni/mese

Se pizzeria ha anche zona ristorazione: calendar room booking, conferma SMS, reminder no-show. Stesso booking engine ristorante.

### 9. Email Marketing Automation (Segment)
**Scope**: ~18h | **Tier**: Avanzato | **Valore**: CLTV +25% via repeat purchase

Segmentazione: nuovi clienti (onboarding), frequenti (loyalty upsell), churned (win-back). Drip campaign template.

### 10. Analytics Heatmap Menu
**Scope**: ~14h | **Tier**: Avanzato | **Valore**: Data-driven menu optimization

Hotjar-style heatmap: quali pizza vengono clikkate/scorse. Identifica piatti dead. A/B test foto/descrizione.

**Total**: 10 customizzazioni per €3.5k-5.5k development, ROI medio 6-8 mesi.
