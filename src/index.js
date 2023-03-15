import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstForJSX from './firstForJSX';
import FirstComponent from './firstComponent';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstForJSX />
    <FirstComponent date={new Date().toLocaleTimeString()} />
    <Clock prefix="Clock now is" />
  </React.StrictMode>
);