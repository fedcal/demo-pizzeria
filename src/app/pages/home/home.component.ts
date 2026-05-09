import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <h1>Pizza autentica nel cuore di Bari</h1>
        <p class="hero-tagline">Forno a legna, ingredienti pugliesi DOP, lievitazione 48h. Dal 1987.</p>
        <div class="hero-actions">
          <a routerLink="/menu" class="btn btn-primary">Vedi il menu</a>
          <a routerLink="/contatti" class="btn btn-secondary">Prenota un tavolo</a>
        </div>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere Da Mario</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">🔥</span>
          <h3>Forno a legna</h3>
          <p>Cottura tradizionale a 480°C in 90 secondi.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🌾</span>
          <h3>Lievito madre 48h</h3>
          <p>Impasto leggero e digeribile, ricetta familiare.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🇮🇹</span>
          <h3>Ingredienti DOP</h3>
          <p>Mozzarella di bufala, burrata di Andria, olio EVO pugliese.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🛵</span>
          <h3>Consegna 5km</h3>
          <p>Bari centro entro 30 minuti, gratis sopra €25.</p>
        </li>
      </ul>
    </section>

    <section class="featured demo-container" *ngIf="featuredPizze$ | async as pizze">
      <div class="section-header">
        <h2>Le specialità pugliesi</h2>
        <a routerLink="/menu" class="link-more">Tutto il menu →</a>
      </div>
      <ul class="pizza-grid">
        <li *ngFor="let pizza of pizze" class="pizza-card">
          <div class="pizza-card__title">
            <h3>{{ pizza.nome }}</h3>
            <span class="pizza-card__price">{{ pizza.prezzo | currency: 'EUR' }}</span>
          </div>
          <p class="pizza-card__desc">{{ pizza.descrizione }}</p>
          <div class="pizza-card__badges">
            <span *ngIf="pizza.vegetariano" class="badge badge--veg">Vegetariana</span>
            <span *ngIf="pizza.premium" class="badge badge--premium">Premium</span>
          </div>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>Prenota un tavolo o ordina online</h2>
        <p>Aperti dal martedì alla domenica. Consegna a domicilio attiva 19:00 – 23:00.</p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota</a>
          <a href="https://wa.me/393331234567" target="_blank" rel="noopener" class="btn btn-secondary">WhatsApp</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #fff8f0 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
      }
      .hero-tagline {
        font-size: 1.15rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #0850b0;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
      }
      .featured {
        padding: 4rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin: 0 1rem 4rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .pizza-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      }
      .pizza-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .pizza-card__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }
      .pizza-card__title h3 {
        margin: 0;
        font-size: 1.1rem;
      }
      .pizza-card__price {
        color: var(--color-accent);
        font-weight: 700;
      }
      .pizza-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 0.5rem;
      }
      .pizza-card__badges {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
      }
      .badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
      }
      .badge--veg {
        background: #dafbe1;
        color: var(--color-success);
      }
      .badge--premium {
        background: #fff8c5;
        color: var(--color-warning);
      }
      .cta-band {
        padding: 4rem 1rem;
        background: var(--color-fg-default);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
      }
      .cta-band .btn-secondary {
        background: transparent;
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .cta-band .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly featuredPizze$ = this.mockData.menu$.pipe(
    map((menu) => menu.pizze.filter((p) => p.categoria === 'pugliesi').slice(0, 3))
  );
}
