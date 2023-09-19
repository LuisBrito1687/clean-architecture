import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/about/about';
import Chat from './components/chat/chat';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import News from './components/news/news';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <App/>
    <About/>
    <Chat/>
    <Contact/>
    
    <News/>

  </React.StrictMode>
);


