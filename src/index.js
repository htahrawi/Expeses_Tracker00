import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import "./resources/css/auth.style.css";
import "./resources/css/master.css";
import { ExpensesContextProvider } from './context/expenses-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ExpensesContextProvider>
      <AppRoutes></AppRoutes>
    </ExpensesContextProvider>
  </BrowserRouter>
);

