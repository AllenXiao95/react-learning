import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstForJSX from './firstForJSX';
import FirstComponent from './firstComponent';
import Clock from './Clock';
import ConditionComponent from './conditionComponent';
import ListComponent from './listComponent';
import FormComponent from './formComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstForJSX />
    <FirstComponent date={new Date().toLocaleTimeString()} />
    <Clock prefix="Clock now is" />
    <ConditionComponent />
    <ListComponent />
    <FormComponent />
  </React.StrictMode>
);