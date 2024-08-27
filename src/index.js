import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Setting from './pages/setting';
import Downloading from './pages/downloading';
import Profile from './pages/profile';
import App from './App';
import Document from './pages/document';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path='document'element={<Document/>} />
          <Route path='setting'element={<Setting/>} />
          <Route path='profile'element={<Profile/>} />
          <Route path='downloading'element={<Downloading/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
