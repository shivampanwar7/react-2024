import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Product from './components/Product/Product';
import About from './components/About/About';
import Excel from './components/Excel/Excel';

const root = ReactDOM.createRoot(document.getElementById('root'));
const headers = ["Book", "Author", "Language", "Published", "Sales"];
const data = [
  [
    "A tale of two cities",
    "Charles Diclens",
    "English",
    "1856",
    "200 million",
  ],
  ["Le Pettie", "Anthonie", "French", "1943", "150 million"],
  [
    "Harry Potter philosper stone",
    "JK Rowling",
    "English",
    "1997",
    "120 million",
  ],
  [
    "And there were none",
    "Agatha Christie",
    "English",
    "1939",
    "100 million",
  ],
  ["Dream of the red chamber", "Co Xueqin", "Chinese", "1791", "100 million"],
  ["The Hobbit", "J RR Tolkien", "English", "1937", "100 million"],
];
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}  />
        <Route path="/aboutUs" element={<About />}  />
        <Route path="/product" element={<Product />}  />
        <Route path="/excel" element={<Excel headers={headers} initialData={data} />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

