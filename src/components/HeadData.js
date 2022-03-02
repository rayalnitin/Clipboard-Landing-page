import ButtonData from './ButtonData';
import './HeadData.css';
import copy from '../images/logo.svg';

const HeadData = () => {
   
    return (
      < >
        <div className="head">
            <div className="data">
                <img src={copy} alt='Copyright'/>
                <div className='content'>
                      <h1>A history of everything you copy</h1>
                      <div className='para1'>
                          Clipboard allows you to track and organize everything you copy. Instantly
                          access your clipboard on all your devices.
                      </div>
                </div>
                <ButtonData />
            </div>
        </div>
      </>
    );
};

export default HeadData;