import logo1 from '../images/logo-google.png';
import logo2 from '../images/logo-ibm.png';
import logo3 from '../images/logo-microsoft.png';
import logo4 from '../images/logo-hp.png';
import logo5 from '../images/logo-vector-graphics.png';
import './LogoData.css';


const LogoData = () => {

    return (
        <div className="logo-images">
            <div>
            <img src={logo1} alt='Google-image'/>
            </div>
            <div>
            <img src={logo2} alt='ibm-image'/>
            </div>
            <div>
            <img src={logo3} alt='microsoft-image'/>
            </div>
            <div>
            <img src={logo4} alt='hp-image'/>
            </div>
            <div>
            <img src={logo5} alt='vector-image'/>
            </div>  
        </div>
    );
}; 

export default LogoData;