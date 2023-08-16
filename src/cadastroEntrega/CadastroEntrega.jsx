
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Modal } from 'bootstrap';
import { error } from 'jquery';





function CadastroEntrega(props) {

  const id = props.id;

  const [CadastroEntrega, setCadastroEntrega] = useState({
    codigoCarga: ''
  });

  const [listaempresa, setlistclient] = useState([]);
  const [empresaSelecionado, setempresaSelecionado] = useState(null);
   

  const [listaveichle, setlistveichle] = useState([]);
  const [veichleSelecionado, setveichleSelecionado] = useState(null);



  function getempresas() {
    axios.get('http://woebegone-silk-production.up.railway.app/empresas').then(result => {
      setlistclient(result.data);
    });
  }


 function getveiculos(){
      axios.get('http://woebegone-silk-production.up.railway.app/veiculos').then(result=>{
        console.log(result.data);
        setlistveichle(result.data);
      });
  }

  function handleChangecarga(event) {
    setCadastroEntrega({ ...CadastroEntrega, [event.target.name]: event.target.value });
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

  function salvarentrega() {
    if(empresaSelecionado && veichleSelecionado){
      axios.post('http://woebegone-silk-production.up.railway.app/entregas/'+empresaSelecionado+'/'+veichleSelecionado,CadastroEntrega).then(result => {
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
              <h1 class="modal-title fs-2" id="cargaModalLabel">Cadastro de <span class="badge bg-info">Entregas</span></h1>
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
                  <label for="inputveicle4" class="form-label">Veiculo</label>
                  <select className="form-select" name="empresa"  onChange={handleveiculoChange}  onClick={getveiculos} >
                    <option value="" >Selecione o Veiculo</option >
                     {listaveichle.map(veichle => (                     
                      <option key={veichle.id} value={veichle.id}>{veichle.nome}</option>
                    ))
                    } 
                  </select>
                </div>
                <div class="col-md-12">
                  <label for="inputnome4" class="form-label">Numero de Entrega</label>
                  <input type="text"  name="codigoCarga" value={CadastroEntrega.codigoCarga} onChange={handleChangecarga} class="form-control" id="inputnome4" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          {empresaSelecionado ? (
            <button class="btn btn-info" onClick={salvarentrega} data-bs-dismiss="modal">
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

export default CadastroEntrega;

