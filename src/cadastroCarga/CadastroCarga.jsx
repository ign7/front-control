
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Modal } from 'bootstrap';
import { error } from 'jquery';





function CadastroCarga(props) {

  const id = props.id;

  const [cadastrocarga, setcadastrocarga] = useState({
    nome: '',
    local: '',
    distancia: '',
    dataSolicitacao: '',
    dataEntrega: ''
  });

  const [listaempresa, setlistclient] = useState([]);
  const [empresaSelecionado, setempresaSelecionado] = useState(null);

  function getempresas() {
    axios.get('http://localhost:8080/empresas').then(result => {
      setlistclient(result.data);
    });
  }

  function handleChangecarga(event) {
    setcadastrocarga({ ...cadastrocarga, [event.target.name]: event.target.value });
  }

  function handleEmpresaChange(empresa) {
    const empresaId = empresa.target.value;
    setempresaSelecionado(empresaId);
    console.log(empresaId);
  }

  function salvarcarga() {
    if(empresaSelecionado){
      axios.post('http://localhost:8080/cargas/' + empresaSelecionado,cadastrocarga).then(result => {
        console.log(result);
      }).catch(error=>{
           console.log(error)
      })
    }
    
  }

  return (
    <div className='form-carga'>
      <div class="modal fade" id={id} tabindex="-1" aria-labelledby="cargaModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="cargaModalLabel">Cadastro de <span class="badge bg-info">Cargas</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form class="row g-3" >
                <div class="col-md-6">
                  <label for="inputnome4" class="form-label">Empresa</label>
                  <select className="form-select" name="empresa"  onChange={handleEmpresaChange}  onClick={getempresas} >
                    <option value="" >Selecione a Empresa</option >
                     {listaempresa.map(empresa => (                     
                      <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
                    ))
                    } 
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputnome4" class="form-label">nome</label>
                  <input type="text"  name="nome" value={cadastrocarga.nome} onChange={handleChangecarga} class="form-control" id="inputnome4" />
                </div>
                <div class="col-md-6">
                  <label for="inputlocal" class="form-label">local</label>
                  <input type="text" name="local"  value={cadastrocarga.local} onChange={handleChangecarga} class="form-control" id="inputlocal4" />
                </div>
                <div class="col-6">
                  <label for="inputPlaca" class="form-label">Distancia</label>
                  <input type="number" name="distancia" value={cadastrocarga.distancia} onChange={handleChangecarga} class="form-control" id="input4" />
                </div>
                <div class="col-md-6">
                  <label htmlFor="inputAno" className="form-label">Data Solicitação</label>
                  <input type="date" name="dataSolicitacao"  value={cadastrocarga.dataSolicitacao} onChange={handleChangecarga} class="form-control" id="inputo4" />
                </div>
                <div class="col-6">
                  <label for="inputAddress2" class="form-label">Data Entrega</label>
                  <input type="date"  name="dataEntrega"  value={cadastrocarga.dataEntrega}  onChange={handleChangecarga} class="form-control" id="inputV" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          {empresaSelecionado ? (
            <button class="btn btn-info" onClick={salvarcarga} data-bs-dismiss="modal">
              Save changes
            </button>
          ) : null}
        </div>     
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroCarga;

