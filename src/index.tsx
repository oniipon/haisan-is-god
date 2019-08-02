import * as React from 'react';
import { render } from 'react-dom';
import HistoryComponent from './history/index'

const App = () => (
  <div>
    <img src="img/i_am_god.png" alt="はいさん神ってる" />
    <HistoryComponent /> 
  </div>
);
render(<App />, document.getElementById('root'));
