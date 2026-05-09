// Tipi TypeScript per i dati mock della pizzeria

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariApertura {
  lunedi: string;
  martedi: string;
  mercoledi: string;
  giovedi: string;
  venerdi: string;
  sabato: string;
  domenica: string;
}

export interface ServiziAttivita {
  consegnaDomicilio: boolean;
  asportoOnline: boolean;
  raggioConsegnaKm: number;
  parcheggioConvenzionato: boolean;
  accessibileDisabili: boolean;
  petFriendly: boolean;
  wifiGratuito: boolean;
  ariaCondizionata: boolean;
  tavoliEsterni: boolean;
  postiAtTotali: number;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoAttivita {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariApertura;
  servizi: ServiziAttivita;
  metaSeo: MetaSeo;
}

export interface CategoriaPizza {
  id: string;
  nome: string;
  ordine: number;
}

export interface Pizza {
  id: number;
  categoria: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  vegetariano?: boolean;
  vegano?: boolean;
  celiaco?: boolean;
  premium?: boolean;
  image: string;
}

export interface MenuFisso {
  id: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  orario: string;
  image: string;
}

export interface Bevanda {
  nome: string;
  prezzo: number;
}

export interface Dolce {
  nome: string;
  prezzo: number;
}

export interface Menu {
  categorie: CategoriaPizza[];
  pizze: Pizza[];
  menuFissi: MenuFisso[];
  bevande: Bevanda[];
  dolci: Dolce[];
}

export interface Membro {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  image: string;
  specialita: string[];
}

export interface Team {
  team: Membro[];
}

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface Faq {
  faq: FaqItem[];
}
