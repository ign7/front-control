import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import imgcarga from '../images/carga.png'

 
import  './Entrega.css'

function Entrega() {

    const [listEntregas, guardaEntregas] = useState([]);


  function getEntregas() {
    axios.get('http://localhost:8080/entregas').then(
      result => {
        console.log(result.data);
        guardaEntregas(result.data);
      }
    )
  }


    return (
      

      <div className='container'>
      <div className='col-12' >
        <div className='col-12' >
          <div className="bloco">
            <div className="body-bloco">
              <h2>Entregas</h2>
              <p>Visualizar Entregas</p>
            </div>
            <div className="bodybutton">
              <button onClick={getEntregas} class="btn btn-success">visualizar</button>
            </div>
          </div>
        </div>


        <div className='col-12' >
          {listEntregas.map(Entregas => (
            <div >
              { Entregas.cargas.map(cargas =>( 
            <div className="bloco"  key={Entregas.id}>                     
              <div className="body-bloco-list"  key={cargas.id} >
                <h2 className='tcarga'>{cargas.nome} </h2>
                <img src={imgcarga} style={{ width: 15 + 'rem', height: 50 + '%' }} class="img-thumbnail" ></img>
                <span className='place'>{cargas.nomeEmpresa}</span>
                <span className='year'>R${cargas.valor} </span>
              </div>
              <div className="bodybutton">
                <div className="detail">
                 {/*  <Link to={`/detalveiculo/${Entregas.id}`} className="btn btn-danger">Detalhes</Link>      */}       
                </div>
                <div className='manut'>
                  <button data-bs-toggle="modal"  /* value={Entregas.id}  onClick={() => handleidveichle(Entregas.id)} */ data-bs-target="#despesamodal" class="btn btn-warning">Despesas</button>
                </div>
              </div>             
              </div>
              ))}
            </div>
           ))
          }
        </div>
      </div>


      <div class="modal fade" id="despesamodal" tabindex="-1" aria-labelledby="despesamodalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="despesamodalLabel">Despesa <span class="badge bg-warning">Carga</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form class="row g-3" >
               {/*  <div class="col-md-6">
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
                </div> */}
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-warning" /* onClick={setmanutencao} */ data-bs-dismiss="modal"> Save </button>
            </div>
          </div>
        </div>
      </div>



    </div>
    );
}

export default Entrega;

















