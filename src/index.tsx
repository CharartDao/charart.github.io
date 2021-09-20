import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Swidget from './App';
import './i18n';

const onResize = () => {
  const root = window.document.documentElement;
  if (root && window && window.innerHeight) {
    root.style.setProperty('--max-height', `${window.innerHeight}px`);
  }
};

const initializeApplication = () => {
  onResize();
  window.addEventListener('resize', onResize, false);

  if (navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(async function (registrations) {
      for (const registration of registrations) {
        await registration.unregister();
      }
    });
  }

  ReactDOM.render(<Swidget />, document.getElementById('root') || document.createElement('div'));
};

initializeApplication();


reportWebVitals();
