import * as React from 'react';
import { render } from 'react-dom';
// @ts-ignore
import imags from './assets/img/*.png';
const App = () => (
  <div>
    <img src={imags['i_am_god']} alt="はいさん神ってる" />
    <h2>history</h2>
    <ul>
      <li>201704: 世代代表になる</li>
    </ul>
  </div>
);
render(<App />, document.getElementById('root'));
