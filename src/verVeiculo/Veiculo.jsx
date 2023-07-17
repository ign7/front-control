

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Veiculo.css'

function Veiculo() {


  const [listVeiculos, guardaVeiculos] = useState([]);

  const urlimg = require.context('../images/', true);



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
            <div className="bloco">
              <div className="body-bloco-list" >
                <h2 className='tveiculo'>{Veiculos.marca} {Veiculos.nome}</h2>
                <img src={urlimg(`./${Veiculos.imagem}`)} style={{ width: 15 + 'rem', height: 50 + '%' }} class="img-thumbnail" ></img>
                <span className='place'>Placa : {Veiculos.placa}</span>
                <span className='year'>Ano de Fabricação: {Veiculos.ano}</span>
              </div>
              <div className="bodybutton">
                <div className="detail">
                  <button onClick={getVeiculos} class="btn btn-danger">Detalhes</button>
                </div>
                <div className='manut'>
                  <button data-bs-toggle="modal" data-bs-target="#manutencaomodal" class="btn btn-warning">Manutenção</button>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>


      <div class="modal fade" id="manutencaomodal" tabindex="-1" aria-labelledby="manutencaomodalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="manutencaomodalLabel">Manutençoes <span class="badge bg-warning">Veiculares</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form class="row g-3" >
                <div class="col-md-6">
                  <label for="inputnome4" class="form-label">Nome</label>
                  <input type="text" name="nome" class="form-control" id="inputnome23" />
                </div>
                <div class="col-md-6">
                  <label for="inputkm4" class="form-label">Km Veiculo </label>
                  <input type="number" name="km" class="form-control" id="inputkm23" />
                </div>
                <div class="col-md-6">
                  <label for="inputvalor" class="form-label">valor</label>
                  <input type="number" name="valor" class="form-control" id="inputvalor23" />
                </div>
                <div class="col-6">
                  <label for="inputPlaca" class="form-label">Distancia</label>
                  <input type="number" name="distancia" class="form-control" id="input23" />
                </div>
                <div class="col-md-6">
                  <label htmlFor="inputAno" className="form-label">Data Manutenção</label>
                  <input type="date" name="dataSolicitacao" class="form-control" id="inputo23" />
                </div>
                <div class="col-6">
                  <label for="inputobs2" class="form-label">Observação</label>
                  <input type="text" name="obs" class="form-control" id="obs" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-warning" data-bs-dismiss="modal"> Save </button>
            </div>
          </div>
        </div>
      </div>



    </div>

  );
}

export default Veiculo;

















