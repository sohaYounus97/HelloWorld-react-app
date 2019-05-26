import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




var h1 = React.createElement('h1', null, 'Hello World!');
var p = React.createElement('p' , null, 'This is my first react app that is "Hello-World"');
 
 var root = document.getElementById('root')
ReactDOM.render(
React.createElement('div', null, h1, p)
,
root
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
