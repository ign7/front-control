


import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Modal } from 'bootstrap';

import FormData from 'form-data';




function CadastroVeiculo(props) {

  const id = props.id;

  const arrayMarcaCarros = [
    'FIAT','VOLKSWAGEM','BMW','IVECO','MERCEDES-BENZ','CHEVROLET'
  ]

  const [ano, setAno] = useState('');

  const handleAnoChange = (event) => {
    let value = event.target.value;
    if (value.length > 4) {
      value = value.slice(0, 4);
    }
    setAno(value);
  };


  const [marcaSelecionada, setMarcaSelecionada] = useState('');

  const handleMarcaChange = (event)=>{
    let value=event.target.value;
    setMarcaSelecionada(value);

  }

  const [cadastrarVeiculo,setCadastroVeiculo] = useState({nome:'',placa:'',marca:'',ano:''});
  const [veiculos,listaveiculos] = useState([]);
  const [atualizar, setatt] = useState();

  function handleVeiculoChange(event) {
    setCadastroVeiculo({ ...cadastrarVeiculo, [event.target.name]: event.target.value })
}



const [imagemSelecionada, setImagemSelecionada] = useState(null);



const handleImagemChange = (event) => {
  const file = event.target.files[0];
  setImagemSelecionada(file);
};



function salvar() {
  console.log(cadastrarVeiculo);

  const formData = new FormData();
  formData.append('veiculo', JSON.stringify(cadastrarVeiculo));
  if (imagemSelecionada) {    
    formData.append('imagem', imagemSelecionada);
  }


  axios.post('http://woebegone-silk-production.up.railway.app/veiculos', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(result => {
      console.log(result);
      setatt(result);
    })
    .catch(error => {
      console.error(error);
    });
}



  return (
    <div className='form-vehicle'>
      <div class="modal fade" id={id} tabindex="-1" aria-labelledby="veiculoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="veiculoModalLabel">Cadastro de <span class="badge bg-danger">Veiculos</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form class="row g-3" >
                <div class="col-md-5">
                  <label for="inputVeiculo4" class="form-label">Veiculo</label>
                  <input type="text" onChange={handleVeiculoChange} value={cadastrarVeiculo.nome} name="nome" class="form-control" id="inputVeiculo4" />
                </div>
                <div class="col-md-6">
                  <label for="inputMarca" class="form-label">Marca</label>
                  <select className="form-select"  onChange={handleVeiculoChange} value={cadastrarVeiculo.marca} name="marca"  >
                    <option value="" onChange={handleMarcaChange}>Selecione a Marca</option>
                    {arrayMarcaCarros.map((marca,index) => (
                      <option key={index} value={marca}>{marca}</option>
                    ))}
                  </select>
                </div>
                <div class="col-6">
                  <label for="inputPlaca" class="form-label">placa</label>
                  <input type="text"  onChange={handleVeiculoChange} value={cadastrarVeiculo.placa} name="placa" class="form-control" id="inputPlaca" placeholder="XXX-9999" />
                </div>                
                <div class="col-md-6">
                  <label htmlFor="inputAno" className="form-label">Ano de Fabricação</label>
                  <select className="form-select" onChange={handleVeiculoChange} value={cadastrarVeiculo.ano} name="ano" >
                    <option >Selecione o Ano</option>
                    {Array.from({ length: 91 }, (_, index) => 1950 + index).map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Imagem</label>
                  <input onChange={handleImagemChange} name="imagem" type="file" class="form-control" id="inpo" />
                </div>
              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button   onClick={salvar}class="btn btn-danger" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CadastroVeiculo;

