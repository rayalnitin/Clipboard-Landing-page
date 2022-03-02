import './FirstImage.css';
import tv from '../images/image-computer.png';

const FirstImage = () => {
 
    return (
        <div className='image-part'>
             <img src={tv} alt='Big-television'  />
             <div>
                 <div className='list'>
                      <div className='heading'>
                           <h3>Quick Search</h3>
                           <div className='write'>
                               Easily search you snippets by content, 
                               category, web address, application, and more.
                           </div>
                      </div>
                      <div className='heading'>
                           <h3>iCloud Sync</h3>
                           <div className='write'>
                               Instantly saves and syncs snippets across all your devices.
                           </div>
                      </div>
                      <div className='heading'>
                           <h3>Complete History</h3>
                           <div className='write'>
                               Retrieve any snippets from the first moment 
                               you started using the app.
                           </div>
                      </div>
                 </div>
             </div>
        </div>
    );

};

export default FirstImage;