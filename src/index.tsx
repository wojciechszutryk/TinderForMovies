import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import App from './App';
import store from "./data/state/store";
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()

ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
                <App />
          </React.StrictMode>
        </QueryClientProvider>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
