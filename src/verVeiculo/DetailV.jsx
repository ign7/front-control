

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function DetailV() {

    const { id } = useParams(); 
    return (
        <div className='container'>
            <div className='col-12'>

            <h1>Detalhes do Veículo{id}</h1>

            </div>
        </div>

    );
}

export default DetailV;

















