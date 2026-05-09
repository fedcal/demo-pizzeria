import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface ImagePlaceholder {
  id: number;
  caption: string;
  emoji: string;
  category: string;
}

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Galleria</h1>
        <p>Le nostre pizze, il forno, la sala. Aspetta foto reali — questi sono placeholder demo.</p>
      </div>
    </section>

    <article class="demo-container content">
      <ul class="gallery-grid">
        <li *ngFor="let img of images" class="gallery-item" [attr.data-cat]="img.category">
          <div class="gallery-item__placeholder" [attr.aria-label]="img.caption">
            <span class="gallery-item__emoji" aria-hidden="true">{{ img.emoji }}</span>
          </div>
          <p class="gallery-item__caption">{{ img.caption }}</p>
        </li>
      </ul>

      <p class="disclaimer">
        Per il sito reale di una pizzeria reale (cliente Federico), le immagini placeholder vengono sostituite con
        servizio fotografico professionale del locale, dei piatti e dello staff. Costo medio fotografo Italia: €300-600
        per servizio completo.
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
      .content {
        padding: 3rem 1rem;
      }
      .gallery-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .gallery-item {
        text-align: center;
      }
      .gallery-item__placeholder {
        aspect-ratio: 4 / 3;
        background: linear-gradient(135deg, #fff8f0, #ffe8d0);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        margin-bottom: 0.5rem;
      }
      .gallery-item__caption {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        margin: 0;
      }
      .disclaimer {
        font-size: 0.85rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem auto 0;
        max-width: 720px;
        padding: 1rem;
        border: 1px dashed var(--color-border);
        border-radius: var(--radius-md);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleriaComponent {
  readonly images: ImagePlaceholder[] = [
    { id: 1, caption: 'Margherita classica', emoji: '🍕', category: 'pizza' },
    { id: 2, caption: 'Pugliese DOP con bufala', emoji: '🧀', category: 'pizza' },
    { id: 3, caption: 'Burrata e prosciutto crudo', emoji: '🥓', category: 'pizza' },
    { id: 4, caption: 'Forno a legna', emoji: '🔥', category: 'locale' },
    { id: 5, caption: 'Sala interna', emoji: '🪑', category: 'locale' },
    { id: 6, caption: 'Tavoli esterni', emoji: '🌳', category: 'locale' },
    { id: 7, caption: 'Mario al forno', emoji: '👨‍🍳', category: 'team' },
    { id: 8, caption: 'Stesura impasto', emoji: '🥖', category: 'team' },
    { id: 9, caption: 'Calzone pugliese', emoji: '🥟', category: 'pizza' },
    { id: 10, caption: 'Tagliere antipasti', emoji: '🍷', category: 'piatti' },
    { id: 11, caption: 'Tiramisù della casa', emoji: '🍰', category: 'piatti' },
    { id: 12, caption: 'Vino Primitivo', emoji: '🍇', category: 'piatti' }
  ];
}
