import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const app = <ApolloProvider client={client}><App /></ApolloProvider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
