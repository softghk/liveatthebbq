import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli0t1cb83y6o01um32x3d5xb/master',
    cache: new InMemoryCache(),
});


root.render(
  <React.StrictMode>
      <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
      </Provider>
  </React.StrictMode>
);

