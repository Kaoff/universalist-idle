import React from 'react';
import { Currency } from '../../types/Currency';

export interface CurrencyViewProps {
  currency: Currency;
}

const CurrencyView: React.FC<CurrencyViewProps> = ({ currency }: CurrencyViewProps) => (
  <p>
    {currency.name}
    {' '}
    [
    {currency.value}
    ] (+
    {currency.gainPerTick}
    /-
    {currency.lossPerTick}
    )
  </p>
);

export default CurrencyView;
