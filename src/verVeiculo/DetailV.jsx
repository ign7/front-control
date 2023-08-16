

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Carrousel from '../carrousel/Carrousel';


function DetailV() {

    const { id } = useParams(); 

    const [listdetail,setdetail] = useState([]);

     useEffect(()=>{
        axios.get('https://woebegone-silk-production.up.railway.app/veiculos/'+id).then(result=>{
            console.log(result.data) 
            //setdetail(result.data);     
        }).catch(error=>{
            console.log(error);
        })
    });


    return (
        <div className='container'>

             <Carrousel />  
          

            {/* <h1>Detalhes do Veículo {id} </h1> */}
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

export default DetailV;

















