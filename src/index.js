import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
// import * as atatus from 'atatus-spa';

// const container = document.getElementById('app');
// const root = createRoot(container);
// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// root.render(<App tab="home" />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// atatus.config('530f6b25e42249e49653a87dcdb5c9c5').install();
