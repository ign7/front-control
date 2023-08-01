import logo from '../logo.svg';
import '../App.css'

import Header from '../titulo/Header';
import React from 'react';

import Carrousel from '../carrousel/Carrousel';

import Card from '../cartao/Card';
import Carga from '../verCarga/Carga';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Veiculo from '../verVeiculo/Veiculo';
import Empresa from '../verEmpresa/Empresa';
import DetailV from '../verVeiculo/DetailV';
import Entrega from '../verEntrega/Entrega';

function HomePage() {
  return (
    <div className="meuHP">
      <Carrousel />
      <Card />
      <Veiculo />
      <Entrega/>
      {/* <Empresa />    */}   
      {/* <Carga /> */}
    </div>
  );
}

export default HomePage;
