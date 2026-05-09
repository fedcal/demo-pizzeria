import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';
import type { Pizza } from '../../data/types';

interface MenuView {
  categorie: { id: string; nome: string; pizze: Pizza[] }[];
  menuFissi: { id: string; nome: string; descrizione: string; prezzo: number; orario: string }[];
  bevande: { nome: string; prezzo: number }[];
  dolci: { nome: string; prezzo: number }[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Il nostro menu</h1>
        <p>15 pizze artigianali · 3 menu fissi · selezione bevande pugliesi</p>
      </div>
    </section>

    <article class="demo-container" *ngIf="view$ | async as view">
      <section *ngFor="let cat of view.categorie" class="menu-category" [id]="cat.id">
        <h2>{{ cat.nome }}</h2>
        <ul class="pizza-list">
          <li *ngFor="let pizza of cat.pizze" class="pizza-item">
            <div class="pizza-item__head">
              <h3>{{ pizza.nome }}</h3>
              <span class="pizza-item__price">{{ pizza.prezzo | currency: 'EUR' }}</span>
            </div>
            <p class="pizza-item__desc">{{ pizza.descrizione }}</p>
            <div class="pizza-item__badges">
              <span *ngIf="pizza.vegetariano" class="badge badge--veg">Veg</span>
              <span *ngIf="pizza.vegano" class="badge badge--vegan">Vegan</span>
              <span *ngIf="pizza.premium" class="badge badge--premium">Premium</span>
            </div>
          </li>
        </ul>
      </section>

      <section class="menu-category">
        <h2>Menu fissi</h2>
        <ul class="pizza-list">
          <li *ngFor="let menu of view.menuFissi" class="pizza-item">
            <div class="pizza-item__head">
              <h3>{{ menu.nome }}</h3>
              <span class="pizza-item__price">{{ menu.prezzo | currency: 'EUR' }}</span>
            </div>
            <p class="pizza-item__desc">{{ menu.descrizione }}</p>
            <p class="pizza-item__meta">{{ menu.orario }}</p>
          </li>
        </ul>
      </section>

      <section class="two-col">
        <div>
          <h2>Bevande</h2>
          <ul class="simple-list">
            <li *ngFor="let b of view.bevande">
              <span>{{ b.nome }}</span>
              <span class="price">{{ b.prezzo | currency: 'EUR' }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Dolci</h2>
          <ul class="simple-list">
            <li *ngFor="let d of view.dolci">
              <span>{{ d.nome }}</span>
              <span class="price">{{ d.prezzo | currency: 'EUR' }}</span>
            </li>
          </ul>
        </div>
      </section>

      <p class="disclaimer">
        I prezzi sono espressi in Euro IVA inclusa. Coperto €1,50/persona, non applicato per asporto. Per allergeni
        consultare lo staff.
      </p>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .menu-category {
        padding: 3rem 1rem 1.5rem;
      }
      .menu-category h2 {
        font-size: 1.5rem;
        margin: 0 0 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      }
      .pizza-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.25rem;
      }
      .pizza-item {
        padding: 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .pizza-item__head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 1rem;
        margin-bottom: 0.5rem;
      }
      .pizza-item__head h3 {
        margin: 0;
        font-size: 1.05rem;
      }
      .pizza-item__price {
        color: var(--color-accent);
        font-weight: 700;
        flex-shrink: 0;
      }
      .pizza-item__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 0.5rem;
      }
      .pizza-item__meta {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
      }
      .pizza-item__badges {
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
      .badge--vegan {
        background: #cdf2d3;
        color: #1a7f37;
      }
      .badge--premium {
        background: #fff8c5;
        color: var(--color-warning);
      }
      .two-col {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        padding: 3rem 1rem 1.5rem;
      }
      .simple-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .simple-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.6rem 0;
        border-bottom: 1px dashed var(--color-border);
      }
      .price {
        color: var(--color-accent);
        font-weight: 600;
      }
      .disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem 1rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  private readonly mockData = inject(MockDataService);

  readonly view$ = this.mockData.menu$.pipe(
    map((menu) => ({
      categorie: menu.categorie
        .filter((c) => c.id !== 'menuFissi')
        .sort((a, b) => a.ordine - b.ordine)
        .map((cat) => ({
          id: cat.id,
          nome: cat.nome,
          pizze: menu.pizze.filter((p) => p.categoria === cat.id)
        })),
      menuFissi: menu.menuFissi,
      bevande: menu.bevande,
      dolci: menu.dolci
    }))
  );
}
