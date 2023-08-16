

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import  './Empresa.css'

function Empresa() {

    const [listempresas, guardaempresas] = useState([]);


  function getempresas() {
    axios.get('http://woebegone-silk-production.up.railway.app/empresas').then(
      result => {
        console.log(result.data);
        guardaempresas(result.data);
      }
    )
  }


    return (
        <div className='container'>
        <div className='col-6' >
          <div className='col-12' >
            <div className="bloco">
              <div className="body-bloco">
                <h2>Empresas</h2>
                <p>Visualizar Empresas</p>
              </div>
              <div className="bodybutton">
                <button onClick={getempresas} class="btn btn-danger">visualizar</button>
              </div>
            </div>
          </div>
  
          <table class="table">
            <thead >
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">CNPJ</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {listempresas.map(empresas=>(
                <tr key={empresas.id}>
                <td>{empresas.nome}</td>
                <td>{empresas.cnpj}</td>
              </tr>
              ))           
              }
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Empresa;

















