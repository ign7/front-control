

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Veiculo.css'

function Veiculo() {


  const [listVeiculos, guardaVeiculos] = useState([]);

  const urlimg=require.context('../images/', true);
 


  function getVeiculos() {
    axios.get('http://localhost:8080/veiculos').then(
      result => {
        console.log(result.data);
        guardaVeiculos(result.data);
      }
    )
  }

  return (
    <div className='container'>
      <div className='col-12' >
        <div className='col-12' >
          <div className="bloco">
            <div className="body-bloco">
              <h2>Veiculos</h2>
              <p>Visualizar Veiculos</p>
            </div>
            <div className="bodybutton">
              <button onClick={getVeiculos} class="btn btn-success">visualizar</button>
            </div>
          </div>
        </div>


        <div className='col-10' >         
          {listVeiculos.map(Veiculos => (
            <div className="bloco"  >
              <div className="body-bloco-list" >
                <h2 className='tveiculo'>{Veiculos.marca} {Veiculos.nome}</h2>
                <img src={urlimg(`./${Veiculos.imagem}`)}  style={{ width: 15 + 'rem', height: 50 + '%' }} class="img-thumbnail" ></img>
                <span className='place'>Placa : {Veiculos.placa}</span>
                <span className='year'>Ano de Fabricação: {Veiculos.ano}</span>
              </div>
              <div className="bodybutton">
                <div className="detail">
                  <button onClick={getVeiculos} class="btn btn-danger">Detalhes</button>
                </div>
                <div className='manut'>
                  <button class="btn btn-warning">Manutenção</button>
                </div>
              </div>
            </div>                    
          ))          
          }                        
        </div>      
      </div>
    </div>

  );
}

export default Veiculo;

















