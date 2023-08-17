

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Carrousel from '../carrousel/Carrousel';


function DetailV() {

    const { id } = useParams();

    const [listdetail, setdetail] = useState([]);

    function getveiculos() {
        axios.get('https://woebegone-silk-production.up.railway.app/veiculos/' + id).then(result => {
            console.log(result.data)
            setdetail(result.data);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className='container'>
            <Carrousel/>
            <div className='col-12' >
            {/* {listdetail.map(detalhes => ( */}
                <div /* key={detalhes.id} */ className="bloco">
                    <div className="body-bloco">
                        <h2>Detalhes Veiculo {/* {detalhes.nome} */}</h2>
                        <p>Visualizar Manutençoes e dados da Entrega </p>
                    </div>
                    <div className="bodybutton">
                        <button onClick={getveiculos} class="btn btn-success">visualizar</button>
                    </div>
                </div>
           {/*  ))} */}
            </div>          
        </div>

    );
}

export default DetailV;

















