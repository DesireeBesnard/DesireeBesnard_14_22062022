import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { persistStore } from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react"


const container = document.getElementById('root');
const root = createRoot(container);
//let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
