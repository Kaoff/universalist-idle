import React from 'react';
import CurrencyView from '../../components/CurrencyView';
import useCurrencies from '../../recoil/currency/hooks';
import { CurrencyType } from '../../types/Currency';
import useInterval from '../../utils/hooks/useInterval';

const Main: React.FC = () => {
  const { currencies, gainActionCurrency, gainTickCurrency } = useCurrencies();

  useInterval(() => {
    gainTickCurrency(CurrencyType.Neutral);
  }, 1000);

  return (
    <div>
      { currencies.neutral && <CurrencyView currency={currencies.neutral} /> }
      <button type="button" onClick={() => gainActionCurrency(CurrencyType.Neutral)}>
        Gain
        {currencies.neutral?.gainPerAction}
        {' '}
        {currencies.neutral?.name}
        {' '}
      </button>
    </div>
  );
};

export default Main;
