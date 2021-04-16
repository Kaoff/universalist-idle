export interface Currency {
  name: string;
  enabled: boolean;
  value: number;
  gainPerTick: number;
  gainPerAction: number;
  lossPerTick: number;
}

export enum CurrencyType {
  Neutral = 'neutral',
}

export type CurrencyRecord = Partial<Record<CurrencyType, Currency>>;
