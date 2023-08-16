
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Veiculo.css'




function Veiculo() {


  const [listVeiculos, guardaVeiculos] = useState([]);
  const [idselectveichle,setidselectveichle] = useState(null);

  const [cadastromanut,setmanut] = useState({
    nome : '',
    km:'',
    valor:'',
    dataManutencao:'',
    observacao:''
  })

  const urlimg = require.context('../images/', true);



  function getVeiculos() {
    axios.get('http://woebegone-silk-production.up.railway.app/veiculos').then(
      result => {
        console.log(result.data);
        guardaVeiculos(result.data);
      }
    )
  }

  function HandleManutChange(event){
    setmanut({...cadastromanut,[event.target.name] : event.target.value});
  }


  function setmanutencao(){
    axios.post('http://woebegone-silk-production.up.railway.app/manutencoes/'+idselectveichle,cadastromanut).then(result=>{
      console.log(result.data);

    }).catch(error=>{
      console.log(error);
  })
  }

 function handleidveichle(veiculo){
  //const idveichle=veiculo.target.value;
    setidselectveichle(veiculo);
    console.log(veiculo);
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


        <div className='col-12' >
          {listVeiculos.map(Veiculos => (
            <div className="bloco"  key={Veiculos.id}>
              <div className="body-bloco-list" >
                <h2 className='tveiculo'>{Veiculos.marca} {Veiculos.nome}</h2>
                <img src={urlimg(`./${Veiculos.imagem}`)} style={{ width: 15 + 'rem', height: 50 + '%' }} class="img-thumbnail" ></img>
                <span className='place'>Placa : {Veiculos.placa}</span>
                <span className='year'>Ano de Fabricação: {Veiculos.ano}</span>
              </div>
              <div className="bodybutton">
                <div className="detail">
                  <Link to={`/detalveiculo/${Veiculos.id}`} className="btn btn-danger">Detalhes</Link>            
                </div>
                <div className='manut'>
                  <button data-bs-toggle="modal"  value={Veiculos.id}  onClick={() => handleidveichle(Veiculos.id)} data-bs-target="#manutencaomodal" class="btn btn-warning">Manutenção</button>
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
                  <input type="text" name="nome" value={cadastromanut.nome} onChange={HandleManutChange} class="form-control" id="inputnome23" />
                </div>
                <div class="col-md-6">
                  <label for="inputkm4" class="form-label">Km Veiculo </label>
                  <input type="number" name="km"  value={cadastromanut.km}  onChange={HandleManutChange} class="form-control" id="inputkm23" />
                </div>
                <div class="col-md-6">
                  <label for="inputvalor" class="form-label">valor</label>
                  <input type="number" name="valor" value={cadastromanut.valor}  onChange={HandleManutChange} class="form-control" id="inputvalor23" />
                </div>
               
                <div class="col-md-6">
                  <label htmlFor="inputAno" className="form-label">Data Manutenção</label>
                  <input type="date" name="dataManutencao" value={cadastromanut.dataManutencao}  onChange={HandleManutChange} class="form-control" id="inputo23" />
                </div>
                <div class="col-6">
                  <label for="inputobs2" class="form-label">Observação</label>
                  <input type="text" name="observacao" value={cadastromanut.observacao}  onChange={HandleManutChange} class="form-control" id="obs" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-warning" onClick={setmanutencao} data-bs-dismiss="modal"> Save </button>
            </div>
          </div>
        </div>
      </div>



    </div>

  );
}

export default Veiculo;

















