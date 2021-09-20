import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './routes/Route';
import './App.css';

const Swidget= () => {

  return (
        <Router>
              <Suspense fallback="loading">
                <Route />
              </Suspense>
        </Router>
  );
};

Swidget.metadata = {
  authors: [],
  description: 'foolish-art',
};

export default Swidget;