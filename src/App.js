import logo from './logo.svg';
import './App.css';
import Header from './titulo/Header';

import Carrousel from './carrousel/Carrousel';

import Card from './cartao/Card';
import Carga from './verCarga/Carga';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Veiculo from './verVeiculo/Veiculo';
import Empresa from './verEmpresa/Empresa';

function App() {
  return (
    <div className="meu">
      <Header/>
      <div>
      <hr></hr>
        <Carrousel/>
      </div>        
      <hr></hr>
      
      <div>
        <Card/>
      </div>

      <div className='title'>
          <h2>Visualizar <span class="badge bg-success">Veiculos</span> <span class="badge bg-danger">Empresas</span> <span class="badge bg-info">Cargas</span> </h2>
      </div>
      
      <div>
        <Veiculo/>
      </div>

        <div>
        <Carga/>
      </div>

      <div>
        <Empresa/>
      </div>  

     
      

    </div>
  );
}

export default App;
