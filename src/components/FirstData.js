import './FirstData.css';
import FirstImage from './FirstImage';

const FirstData = () => {
  
   return (
        <div className='first'>
            <div>
               <h1>Keep track of your snippets</h1>
            </div> 
               <div className='para2'>
                  Clipboard instantly stores any item you store in the cloud , meaning you can access 
                  your snippets immediately on all your devices. Our Mac and iOS apps will help you 
                  organize everything.
               </div>
               <FirstImage /> 
          
        </div>
      
   );
};

export default FirstData;