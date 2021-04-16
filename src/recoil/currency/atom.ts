import { atom } from 'recoil';
import { Currency, CurrencyType } from '../../types/Currency';

const currencyState = atom<Partial<Record<CurrencyType, Currency>>>({
  key: 'currencyState',
  default: {
    neutral: {
      name: 'Neutral Mana',
      enabled: false,
      gainPerAction: 1,
      gainPerTick: 10,
      lossPerTick: 1,
      value: 0,
    },
  },
});

export default currencyState;
