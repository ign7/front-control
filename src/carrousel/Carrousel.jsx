
import truck from '../images/caminhaotelainicial.png';
import truck2 from '../images/truck2.png';
import logotruck from '../images/logotruck.png';
import truckgasolina from '../images/truckgasolina.png';
import './Carrousel.css';

function Carrousel() {
    return (
        <div className="container">
            <div className="alterimg">
            <img src={truck} class="img-fluid" alt="Responsive image"/> 
            <img src={truckgasolina} class="img-fluid" alt="Responsive image"/>
            <img src={truck2} class="img-fluid" alt="Responsive image"/>
            </div>                                             
        </div>
        
    );
}

export default Carrousel;

















