export interface ExchangeResumeFiat {
    name: string;
    symbol: string;
}

export interface ExchangeResume {
    id: string;
    name: string;
    adjusted_volume_24h_share: number;
    fiats: ExchangeResumeFiat[];
}