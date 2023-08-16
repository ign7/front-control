import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import imgcarga from '../images/carga.png'


import './Entrega.css'

function Entrega() {

  const [listEntregas, guardaEntregas] = useState([]);


  function getEntregas() {
    axios.get('http://woebegone-silk-production.up.railway.app/entregas').then(
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
            <div className="bloco" key={Entregas.id}>
              <div className="body-bloco-list"   >
                <h2 className='tcarga'>Codigo Entrega {Entregas.codigoCarga}</h2>
                <img src={imgcarga} style={{ width: 15 + 'rem', height: 50 + '%' }} class="img-thumbnail" ></img>
                <span className='year'>Lucro R$ {Entregas.total},00 </span>
              </div>
              <div className="bodybutton">
                <div className="detail">
                  {<Link to={`/detalcarga/${Entregas.id}`} className="btn btn-danger">Detalhes</Link>}
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

export default Entrega;

















