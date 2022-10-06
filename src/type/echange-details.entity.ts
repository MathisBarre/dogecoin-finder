export interface Links {
  twitter: string[];
  website: string[];
}

export interface Fiat {
  name: string;
  symbol: string;
}

export interface USD {
  reported_volume_24h: number;
  adjusted_volume_24h: number;
  reported_volume_7d: number;
  adjusted_volume_7d: number;
  reported_volume_30d: number;
  adjusted_volume_30d: number;
}

export interface Quotes {
  USD: USD;
}

export interface ExchangeDetail {
  id: string;
  name: string;
  description: string;
  active: boolean;
  website_status: boolean;
  api_status: boolean;
  message?: any;
  links: Links;
  markets_data_fetched: boolean;
  adjusted_rank: number;
  reported_rank: number;
  currencies: number;
  markets: number;
  fiats: Fiat[];
  quotes: Quotes;
  last_updated: Date;
  img_rev: number;
  sessions_per_month: number;
  confidence_score: number;
}
