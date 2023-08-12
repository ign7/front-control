import axios from 'axios';
import React, { useState, useEffect } from 'react';

import truckgasolina from '../images/truckgasolina.png';
import m3 from '../images/m3.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import imgcarga from '../images/carga.png'
import './DetailCarga.css'


function DeitailCarga() {

    const { id } = useParams();

    const [listdetail, setdetail] = useState([]);

    const [listdetailcargas, setdetailcargas] = useState([]);

    const [idcargadespesaselect, setdespesa] = useState(null);

    const [cadastrodespesa,setcadastrodespesa] = useState({
        refeicao:'',
        ajudante:'',
        pedagio:'',
        combustivel:'',
        litro:''
    })

    function getcargasbyentrega() {
        axios.get('http://localhost:8080/entregas/' + id).then(result => {
            console.log(result.data.cargas)
            setdetailcargas(result.data.cargas);
            setdetail(result.data);
        }).catch(error => {
            console.log(error);
        })
    }


    function HandleidcargaChange(event){      
        console.log(event);
        setdespesa(event);
    }

    function HandleDespesaChange(event){
        setcadastrodespesa({...cadastrodespesa,[event.target.name ] : event.target.value})
    }


    function savedespesa(){
        axios.post('http://localhost:8080/despesas/'+idcargadespesaselect,cadastrodespesa).then(result=>{
            console.log("nao se esqueca do usestate como parametro na url acima ");
            getcargasbyentrega()
        })
    }

   /*  function deletecargabyid(iddeletecarga){
      axios.delete('http://localhost:8080/cargas/'+iddeletecarga).then(result=>{
          console.log("delete");
          //getcargasbyentrega();
      })
    } */


    


    return (
        <div className='container'>
      <div className='col-12' >       
        <div className='col-12' >      
          <div className="bloco">                  
            <div className="body-bloco">
              <h2>Cargas</h2>
              <p>Visualizar Cargas da Entrega </p>
            </div>
            <div className="bodybutton">
              <button onClick={getcargasbyentrega} class="btn btn-success">visualizar</button>
            </div>           
          </div>
      
        </div>


         <div className='col-12' >
          {listdetailcargas.map(Entregas => (
            <div >
            <div className="bloco"  key={Entregas.id}>                     
              <div className="body-bloco-list" >
                              
                <h2 className='tcarga'>{Entregas.nome} / {Entregas.nomeEmpresa} </h2>
                <img src={imgcarga} style={{ width: 15 + 'rem', height: 50 + '%' }} class="img-thumbnail" ></img>
                <span className='place'><span >{Entregas.nomeEmpresa}</span></span>
                <hr></hr>
                <span className='place'>Valor R$ : <span className='dadoscarga'>{Entregas.valor} ,00</span></span>
                <hr></hr>
                <span className='place'>Lucro R$ : <span className='dadoscarga'>{Entregas.lucro},00</span></span>      
                <hr></hr>          
              </div>


              

              <div className='bloco-carga'>
              
                <div className=''>
                    <label className='place'>Cidade/Região</label>
                    <span className='dadoscarga'> {Entregas.local}</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Distancia: </label>
                    <span className='dadoscarga'> {Entregas.distancia} Kilometros</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Peso: </label>
                    <span className='dadoscarga'> {Entregas.peso} Kilos</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Data Solicitacao: </label>
                    <span className='dadoscarga'> {Entregas.dataSolicitacao}</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>DataEntrega: </label>
                    <span className='dadoscarga'> {Entregas.dataEntrega}</span>
                </div>
                </div>
                {Entregas.despesa!=null ?(
              <div className='bloco-despesas'>                
                <div className=''>
                    <label className='place'>Gasto Ajudante </label>
                    <span className='dadoscarga'> {Entregas.despesa.ajudante},00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Gasto Refeição: </label>
                    <span className='dadoscarga'> {Entregas.despesa.refeicao},00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Gasto Pedagio: </label>
                    <span className='dadoscarga'> {Entregas.despesa.pedagio},00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Gasto Combustivel: </label>
                    <span className='dadoscarga'> {Entregas.despesa.combustivel},00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Litros: </label>
                    <span className='dadoscarga'> {Entregas.despesa.litro} L</span>
                </div>
              </div>
              ) : 


              
               <div className='bloco-despesas'>                
                <div className=''>
                    <label className='place'>Gasto Ajudante </label>
                    <span className='dadoscarga'> 00,00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Gasto Refeição: </label>
                    <span className='dadoscarga'> 00,00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Gasto Pedagio: </label>
                    <span className='dadoscarga'> 00,00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Gasto Combustivel: </label>
                    <span className='dadoscarga'> 00,00</span>
                </div>
                <hr></hr>
                <div className=''>
                    <label className='place'>Litros: </label>
                    <span className='dadoscarga'> 0 L</span>
                </div>
              </div>
              
              }

              
              <div className="bodybutton">
                {/* <div className="detail">
                <button data-bs-toggle="modal"  onClick={deletecargabyid(Entregas.id)}>Excluir</button>   
                </div> */}
                <div className='manut'>
                {Entregas.despesa==null ?(
                  <button data-bs-toggle="modal" value={Entregas.id} onClick={()=>HandleidcargaChange(Entregas.id)}   data-bs-target="#despesamodal" class="btn btn-warning">Despesas</button>
              ) : <div className='negmanut'>
                    <span className='grenflag'>Concluido</span>
                 </div>
                 } 
                  </div>
              </div>             
              </div>
              
            </div>
           ))
          }
        </div> 
      </div>


      <div class="modal fade" id="despesamodal" tabindex="-1" aria-labelledby="despesamodalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-2" id="despesamodalLabel">Despesa <span class="badge bg-warning">Carga</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="row g-3" >
                 <div class="col-md-6">
                  <label for="inputrefeicao4" class="form-label">refeicao</label>
                  <input type="text" name="refeicao" value={cadastrodespesa.refeicao} onChange={HandleDespesaChange} class="form-control" id="inputnome23" />
                </div>
                <div class="col-md-6">
                  <label for="inputajudante4" class="form-label">ajudante </label>
                  <input type="number" name="ajudante"  value={cadastrodespesa.ajudante}  onChange={HandleDespesaChange} class="form-control" id="inputkm23" />
                </div>
                <div class="col-md-6">
                  <label for="inputpedagio" class="form-label">pedagio</label>
                  <input type="number" name="pedagio" value={cadastrodespesa.pedagio}  onChange={HandleDespesaChange} class="form-control" id="inputvalor23" />
                </div>
               
                <div class="col-md-6">
                  <label htmlFor="inputcombustivel" className="form-label">combustivel</label>
                  <input type="number" name="combustivel" value={cadastrodespesa.dataDespesaencao}  onChange={HandleDespesaChange} class="form-control" id="inputo23" />
                </div>
                <div class="col-6">
                  <label for="inputobs2" class="form-label">litro</label>
                  <input type="number" name="litro" value={cadastrodespesa.litro}  onChange={HandleDespesaChange} class="form-control" id="obs" />
                </div> 
              </form> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-warning"  onClick={savedespesa}  data-bs-dismiss="modal"> Save </button>
            </div>
          </div>
        </div>
      </div>



    </div>
    );
}

export default DeitailCarga;
