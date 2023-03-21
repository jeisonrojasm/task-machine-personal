import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from './components/App/App';

import { TodoProvider } from './components/TodoContext/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);