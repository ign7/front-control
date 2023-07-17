import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


 
import  './Carga.css'

function Carga() {

    const [listcargas, guardacargas] = useState([]);


  function getcargas() {
    axios.get('http://localhost:8080/cargas').then(
      result => {
        console.log(result.data);
        guardacargas(result.data);
      }
    )
  }


    return (
        <div className='container'>
        <div className='col-10'>
          <div className='col-12' >
            <div className="bloco">
              <div className="body-bloco">
                <h2>Cargas</h2>
                <p>Visualizar Cargas</p>
              </div>
              <div className="bodybutton">
                <button onClick={getcargas} class="btn btn-info">visualizar</button>
              </div>
            </div>
          </div>
  
          <table class="table">
            <thead class="">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Empresa</th>
                <th scope="col">Local</th>
                <th scope="col">Distancia(KM)</th>
                <th scope="col">Solicitada</th>
                <th scope="col">Entregue</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {listcargas.map(cargas=>(
                <tr key={cargas.id}>
                <td>{cargas.nome}</td>
                <td>{cargas.nomeEmpresa}</td>
                <td>{cargas.local}</td>
                <td>{cargas.distancia}</td>
                <td>{cargas.dataSolicitacao}</td>
                <td>{cargas.dataEntrega}</td>
              </tr>
              ))           
              }
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Carga;

















