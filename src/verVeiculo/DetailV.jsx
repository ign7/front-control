

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function DetailV() {

    const { id } = useParams(); 

    const [listdetail,setdetail] = useState([]);

     useEffect(()=>{
        axios.get('http://localhost:8080/veiculos/'+id).then(result=>{
            console.log(result.data)         
        }).catch(error=>{
            console.log(error);
        })
    });


    return (
        <div className='container'>
          

            <h1>Detalhes do Veículo{id}</h1>

            
        </div>

    );
}

export default DetailV;

















