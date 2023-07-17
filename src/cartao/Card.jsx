
import './Cartao.css';
import truck from '../images/caminhaotelainicial.png';
import truck2 from '../images/truck2.png';
import empresa from '../images/empresa.png'
import carga from '../images/carga.png'
import truckgasolina from '../images/truckgasolina.png';

import CadastroVeiculo from '../cadastroVeiculo/CadastroVeiculo'
import CadastroEmpresa from '../cadastroEmpresa/CadastroEmpresa';
import CadastroCarga from'../cadastroCarga/CadastroCarga'


function Card() {
    return (
        <div>
            
            <div className='title'>
                <h2>Controle de <span class="badge bg-success">Veiculos</span> <span class="badge bg-danger">Empresas</span> <span class="badge bg-info">Cargas</span> </h2>
            </div>
            
                <div className="container " >

                    <div class="card " style={{ width: 20 + 'rem', height: 50 + '%' }}>
                        <img src={truckgasolina} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Cadastro de Veiculo</h4>
                            <p class="card-text">Somente Caminhoes e Carretas</p>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#veiculoModal">Cadastrar</button>
                        </div>
                    </div>

                    <div class="card " style={{ width: 20 + 'rem', height: 50 + '%' }}>
                        <img src={empresa} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cadastro de Empresas</h5>
                            <p class="card-text">Somente Empresas autorizadas</p>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#empresaModal">Cadastrar</button>
                        </div>
                    </div>


                    <div class="card " style={{ width: 20 + 'rem', height: 50 + '%' }}>
                        <img src={carga} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cadastro de Cargas</h5>
                            <p class="card-text">Somente Cargas Autorizadas</p>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cargaModal">Cadastrar</button>
                        </div>
                    </div>

                </div>
          

        <hr></hr>

        <div className='form-veiculo'>
          <CadastroVeiculo id="veiculoModal" />
        </div>

        <div className='form-empresa'>
          <CadastroEmpresa id="empresaModal" />
        </div>

        <div className='form-carga'>
          <CadastroCarga id="cargaModal" />
        </div>

      

        </div>
       
    );
}

export default Card;

















