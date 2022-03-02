import './ThirdImage.css';
import logo1 from '../images/icon-blacklist.svg';
import logo2 from '../images/icon-text.svg';
import logo3 from '../images/icon-preview.svg';


const ThirdImage = () => {

    return (
        <div>
           <div className='demo'>
               <div className='part black'>
                  <img src={logo1}  alt='Text logo' />
                  <h3>Create blacklists</h3>
                  <div className='text'>
                       Ensure sensitive information never make its
                       way to your clipboard by excluding certain
                       sources.
                  </div>
              </div>
              <div className='part'>
                  <img src={logo2}  alt='Text logo' />
                  <h3>Plain text snippets</h3>
                  <div className='text'>
                       Remove unwanted formatting from copied text 
                       for a consistent look.
                  </div>
              </div>
              <div className='part'>
                  <img src={logo3} alt='Preview logo' />
                  <h3>Sneak preview</h3>
                  <div className='text'>
                       Quick preview of all snippets on your Clipboard 
                       for easy accepts.
                  </div>
              </div>
        </div>
 
   </div>
       
    );
};

export default ThirdImage;