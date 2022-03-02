import sunset from '../images/image-devices.png'
import './SecondData.css';

const SecondData = () => {

    return(
        <div className='second'>
            <div>
                 <h1>Access Clipboard anywhere</h1>
            </div>   
            <div className='para2'>
                Whether you're on the go , or at your computer, you can access all your Clipboard 
                snippets in a few simple click.
            </div>
            <img src={sunset} alt='Sunset Television' />
        </div>
    );
};

export default SecondData;