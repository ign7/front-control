
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Modal } from 'bootstrap';


function CadastroEmpresa(props) {

  const id = props.id;
  

   const [cadastro,setcadastro] = useState({nome:'',cnpj:''});
   const [listaempresa,setlist] =useState([]);
   const [atualizar, setatt] = useState();


  function handleChange(event){
    setcadastro({...cadastro,[event.target.name]:event.target.value})

  }

  function salvarempresa(){
    axios.post('http://localhost:8080/empresas',cadastro).then(
      result=>{
        console.log(result);
        setatt(result);
      }
    )
  }
  

  return (
    <div className='form-empresa'>
      <div class="modal fade" id={id} tabindex="-1" aria-labelledby="empresaModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="empresaModalLabel">Cadastro de <span class="badge bg-success">Empresas</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form class="row g-3" >
                <div class="col-md-5">
                  <label for="inputVeiculo4" class="form-label">Nome </label>
                  <input type="text" onChange={handleChange} value={cadastro.nome}   name="nome" class="form-control" id="inputempresa4" />
                </div>
                <div class="col-md-6">
                  <label for="inputMarca" class="form-label">CNPJ</label>
                  <input type="text"  onChange={handleChange} value={cadastro.cnpj} name="cnpj" class="form-control" id="inputempresacnpj" />
                </div>                
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-success" onClick={salvarempresa} data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroEmpresa;

