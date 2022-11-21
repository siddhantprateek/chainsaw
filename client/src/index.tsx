import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// @dev uri: http://localhost:4000
// @production: https://
// GraphQL Provider 
// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache: new InMemoryCache(),
// })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ApolloProvider client={client}> */}
        <App />
      {/* </ApolloProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
