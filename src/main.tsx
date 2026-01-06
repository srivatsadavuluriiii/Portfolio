import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Work from '../Pages/Work';
import Contact from '../Pages/Contact';
import ProjectDetail from '../Pages/ProjectDetail';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/home" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/about" element={<Layout currentPageName="About"><About /></Layout>} />
        <Route path="/work" element={<Layout currentPageName="Work"><Work /></Layout>} />
        <Route path="/contact" element={<Layout currentPageName="Contact"><Contact /></Layout>} />
        <Route path="/projectdetail" element={<Layout currentPageName="ProjectDetail"><ProjectDetail /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

