import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function DeitailCarga() {

    const { id } = useParams(); 

    const [listdetail,setdetail] = useState([]);

    /*  useEffect(()=>{
        axios.get('http://localhost:8080/cargas/'+id).then(result=>{
            console.log(result.data) 
            //setdetail(result.data);     
        }).catch(error=>{
            console.log(error);
        })
    }); */


    return (
        <div className='container'>
            <h1>Detalhes da Entrega {id} </h1>
           {/*  {
                listdetail.map(detalhes=>(
                    <div key={detalhes.id}>
                    <p>detalhes.nome</p>
                    <p></p>
                    <p></p>
                    </div>
                ))}             */}
        </div>

    );
}

export default DeitailCarga;
