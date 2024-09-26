import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}> 
    <App />
    </Provider>
  </BrowserRouter>
);
//Le <Provider> est un composant fourni par la bibliothèque react-redux qui est utilisé pour intégrer le store Redux dans votre application React. Redux est une bibliothèque de gestion d'état pour les applications JavaScript, et le store Redux est l'endroit où tout l'état de l'application est conservé.
//Fonctionnement : Vous enveloppez votre application avec <Provider> et vous lui passez le store Redux en tant que prop. Une fois que cela est fait, tous les composants enfants de <Provider> ont accès au store via le contexte.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
