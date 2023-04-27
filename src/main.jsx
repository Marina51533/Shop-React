import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import './index.scss'
import { UserProvider } from './context/user.context.jsx';
import { ProductProvider } from './context/products.context.jsx';
import { CardProvider } from './context/card.context.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
