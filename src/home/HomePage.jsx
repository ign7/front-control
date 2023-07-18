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

function HomePage() {
  return (
    <div className="meuHP">
      <Carrousel />
      <Card />
      <Veiculo />
      <Carga />
      <Empresa />
    </div>
  );
}

export default HomePage;
