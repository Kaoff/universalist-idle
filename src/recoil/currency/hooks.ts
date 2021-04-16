import { useRecoilState } from 'recoil';
import { CurrencyRecord, CurrencyType } from '../../types/Currency';
import currencyState from './atom';

interface CurrenciesHook {
  currencies: CurrencyRecord;
  gainTickCurrency: (type: CurrencyType) => void;
  gainActionCurrency: (type: CurrencyType) => void;
}

const useCurrencies = (): CurrenciesHook => {
  const [currencies, setCurrencies] = useRecoilState(currencyState);

  const gainTickCurrency = (type: CurrencyType): void => {
    const current = currencies[type];

    if (current) {
      setCurrencies({
        ...currencies,
        [type]: {
          ...current,
          value: current.value + (current.gainPerTick - current.lossPerTick),
        },
      });
    }
  };

  const gainActionCurrency = (type: CurrencyType): void => {
    const current = currencies[type];

    if (current) {
      setCurrencies({
        ...currencies,
        [type]: {
          ...current,
          value: current.value + current.gainPerAction,
        },
      });
    }
  };

  return {
    currencies,
    gainTickCurrency,
    gainActionCurrency,
  };
};

export default useCurrencies;
