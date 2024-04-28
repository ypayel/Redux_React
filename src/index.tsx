import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductCartProvider } from './components/context/ProductCart';
import { SongContextProvider } from './components/context/SongContext';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import { storeCount } from './components/redux/Counter/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductCartProvider>
    <SongContextProvider>
    <Provider store={storeCount}>
    <App />
    </Provider>
    </SongContextProvider>
    </ProductCartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
