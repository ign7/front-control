
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
    peso:'',
    valor:'',
    dataSolicitacao: '',
    dataEntrega: ''
  });

   const [listaempresa, setlistclient] = useState([]);
  const [empresaSelecionado, setempresaSelecionado] = useState(null);
   

  const [listaveichle, setlistveichle] = useState([]);
  const [veichleSelecionado, setveichleSelecionado] = useState(null); 

  const [listaentrega, setlistentrega] = useState([]);
  const [entregaSelecionado, setentregaSelecionado] = useState(null);



   function getempresas() {
    axios.get('https://woebegone-silk-production.up.railway.app/empresas').then(result => {
      setlistclient(result.data);
    });
  }


 function getveiculos(){
      axios.get('https://woebegone-silk-production.up.railway.app/veiculos').then(result=>{
        console.log(result.data);
        setlistveichle(result.data);
      });
  } 

  function getentregas(){
    axios.get('https://woebegone-silk-production.up.railway.app/entregas').then(result=>{
         console.log(result.data);
         setlistentrega(result.data);

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

  function handleveiculoChange(veiculo) {
    const veiculoId = veiculo.target.value;
    setveichleSelecionado(veiculoId);
    console.log(veiculoId);
  } 

  function handleentregaChange(entrega) {
    const entregaId = entrega.target.value;
    setentregaSelecionado(entregaId);
    console.log(entregaId);
  }

  function salvarcarga() {
    if(entregaSelecionado){
      axios.post('https://woebegone-silk-production.up.railway.app/cargas/'+entregaSelecionado,cadastrocarga )
      .then(result => {
        
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
                  <select className="form-select" name="empresa"  onChange={handleEmpresaChange}  disabled onClick={getempresas} >
                    <option value="" >Selecione a Empresa</option >
                     {listaempresa.map(empresa => (                     
                      <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
                    ))
                    } 
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputveicle4" class="form-label">Veiculo</label>
                  <select className="form-select" name="empresa"  onChange={handleveiculoChange}  disabled onClick={getveiculos} >
                    <option value="" >Selecione o Veiculo</option >
                     {listaveichle.map(veichle => (                     
                      <option key={veichle.id} value={veichle.id}>{veichle.nome}</option>
                    ))
                    } 
                  </select>
                </div> 
                <div class="col-md-6">
                  <label for="inputnome4" class="form-label">Entrega</label>
                  <select className="form-select" name="entrega"  onChange={handleentregaChange}  onClick={getentregas} >
                    <option value="" >Selecione a entrega</option >
                     {listaentrega.map(entrega => (                     
                      <option key={entrega.id} value={entrega.id}>{entrega.codigoCarga}</option>
                    ))
                    } 
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputnome4" class="form-label">Nome</label>
                  <input type="text"  name="nome" value={cadastrocarga.nome} onChange={handleChangecarga} class="form-control" id="inputnome4" />
                </div>
                <div class="col-md-6">
                  <label for="inputlocal" class="form-label">local</label>
                  <input type="text" name="local"  value={cadastrocarga.local} onChange={handleChangecarga} class="form-control" id="inputlocal4" />
                </div>
                <div class="col-6">
                  <label for="inputPlaca" class="form-label">Distancia (Km)</label>
                  <input type="number" name="distancia" value={cadastrocarga.distancia} onChange={handleChangecarga} class="form-control" id="input4" />
                </div>
                <div class="col-6">
                  <label for="inputAddress2" class="form-label">Peso</label>
                  <input type="number"  name="peso"  value={cadastrocarga.peso}  onChange={handleChangecarga} class="form-control" id="inputV" />
                </div>
                <div class="col-6">
                  <label for="inputAddress2" class="form-label">Valor</label>
                  <input type="number"  name="valor"  value={cadastrocarga.valor}  onChange={handleChangecarga} class="form-control" id="inputV" />
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
          {entregaSelecionado ? (
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

