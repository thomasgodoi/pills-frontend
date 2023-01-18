import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Homepage from './Homepage';
// import Tst from './tst';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
    {/* <Tst /> */}
  </React.StrictMode>
);
