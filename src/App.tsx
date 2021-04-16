import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';
import Main from './containers/Main';

const App: React.FC = () => (
  <RecoilRoot>
    <Main />
  </RecoilRoot>
);

export default App;
