import * as React from 'react';
import { render } from 'react-dom';
// @ts-ignore
import imags from './assets/img/*.png';
import HistoryComponent from './history/'

const App = () => (
  <div>
    <img src={imags['i_am_god']} alt="はいさん神ってる" />
    <HistoryComponent /> 
  </div>
);
render(<App />, document.getElementById('root'));
