import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainApp from './Entryfile/Main';
window.Popper = require("popper.js").default;



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp/>
    </Provider>
  </React.StrictMode>
);

