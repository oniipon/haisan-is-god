import * as React from 'react';
import { render } from 'react-dom';
const App: React.SFC = () => (
  <div>
    <img src="assets/img/i_am_god.png" alt="はいさん神ってる" />
    <h2>history</h2>
    <ul>
      <li>201704: 世代代表になる</li>
    </ul>
  </div>
);
render(<App />, document.getElementById('root'));
