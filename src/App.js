import logo from './logo.svg';
import './App.css'

import Header from './titulo/Header';
import React from 'react';

import Carrousel from './carrousel/Carrousel';

import Card from './cartao/Card';
import Carga from './verCarga/Carga';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Veiculo from './verVeiculo/Veiculo';
import Empresa from './verEmpresa/Empresa';
import DetailV from './verVeiculo/DetailV';
import HomePage from './home/HomePage';

function App() {
  return (

    <Router>     
    <Header/>    
    <Routes>
      <Route path="/detalveiculo/:id" element={<DetailV/>}/>
      <Route path="/home"  element={<HomePage/>}/>
    </Routes>

  </Router>





   
  );
}

export default App;
