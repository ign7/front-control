

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
            <Carrousel />

            <div>
                <button onClick={getveiculos}>CLIQUE AQUI </button>
            </div>

        {listdetail.map(detalhes => (
            <div key={detalhes.id} className='bloco-manut'>                
                    <h1>Detalhes {detalhes.marca +'/'+detalhes.nome} </h1> 
                    <div>
                        <p>{detalhes.ano}</p>
                        <p>{detalhes.placa}</p>
                        <p></p>
                    </div>
               
            </div>
             ))}
        </div>

    );
}

export default DetailV;

















