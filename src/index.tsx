import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import axios from "axios";
import {AXIOS_BASE_URL} from "./shared/const/url";

axios.defaults.baseURL = AXIOS_BASE_URL;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>,
  </React.StrictMode>
);
reportWebVitals();
