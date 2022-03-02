import './NavbarData.css';
import copy from '../images/logo.svg';
import fb from '../images/icon-facebook.svg';
import tt from '../images/icon-twitter.svg';
import insta from '../images/icon-instagram.svg';

const NavbarData = () => {

    return (
        <div>
             <div className='navbar'>
             <img src={copy} className='nav-logo' alt='Copyright-navbar-logo' />
                    <div className='nav-list'>
                            <div className='list1'>
                                 <div className='type common'>FAQs</div>
                                 <div className='common'>Contact us</div>
                            </div> 
                            <div className='list2'>
                                <div className='type common'>Privacy Policy</div>
                                <div className='common'>Press Kit</div>
                            </div>       
                            <div className='common list3'>Install Guide</div>   
                    </div>
                   <div className='icons'>
                       <div className='i-logo'> <img src={fb} /></div>
                       <div className='i-logo'> <img src={tt}/></div>
                       <div className='i-logo'> <img src={insta}/></div>
                   </div>
             </div>
        </div>
    );
};

export default NavbarData;