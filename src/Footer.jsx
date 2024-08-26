import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faSquareInstagram, faYoutube, faSnapchat, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div style={{height:'300px',backgroundColor: 'black'}} className=' d-flex flex-column flex-md-row text-light'>
        <img src="https://staticg.sportskeeda.com/editor/2023/02/1d2a6-16764737820971-1920.jpg" alt="" />

        <ul style={{marginTop:'80px',marginLeft:'30px',backgroundColor: 'black'}}>
            <li style={{listStyle:'none',fontSize:'20px'}}>About Marvel</li>
            <li style={{listStyle:'none',fontSize:'20px'}}>Help/FAQs</li>
            <li style={{listStyle:'none',fontSize:'20px'}}>Careers</li>
            <li style={{listStyle:'none',fontSize:'20px'}}>Internships</li>
        </ul>
        <ul style={{marginTop:'80px',marginLeft:'30px',backgroundColor: 'black'}}>
            <li style={{listStyle:'none',fontSize:'20px'}}>Advertising</li>
            <li style={{listStyle:'none',fontSize:'20px'}}>Disney+</li>
            <li style={{listStyle:'none',fontSize:'20px'}}>Marvelhq.com</li>
            <li style={{listStyle:'none',fontSize:'20px'}}>Redeem Digital Comics</li>
        </ul>
        <ul style={{marginTop:'80px',backgroundColor: 'black'}} >
            <li style={{listStyle:'none',fontSize:'20px'}}><img src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="" /></li>
            <li style={{listStyle:'none',fontSize:'20px'}}><img src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="" /></li>
        </ul>
        <ul style={{marginTop:'80px',backgroundColor: 'black'}} >
            <li style={{listStyle:'none',fontSize:'20px'}}>Marvel Insider
            <p style={{fontSize:'10px'}}>Get Rewarded for Being a Marvel Fan</p></li>
            <li style={{listStyle:'none',fontSize:'20px'}}>Marvel Unlimited
            <p style={{fontSize:'10px'}}>Access Over 30,000+ Digital Comics</p></li>
        </ul>
        <ul style={{marginTop:'80px',marginLeft:'30px',backgroundColor: 'black'}} >
            <h5 className='text-center'>FOLLOW US ON</h5>
            <div className='d-flex justify-content-evenly align-items-center p-2 '>
                <li style={{listStyle:'none',padding:'10px',fontSize:'25px',backgroundColor: 'black'}}><FontAwesomeIcon icon={faFacebook} /></li>
                <li style={{listStyle:'none',padding:'10px',fontSize:'25px',backgroundColor: 'black'}}><FontAwesomeIcon icon={faXTwitter} /></li>
                <li style={{listStyle:'none',padding:'10px',fontSize:'25px',backgroundColor: 'black'}}><FontAwesomeIcon icon={faSquareInstagram} /></li>
                <li style={{listStyle:'none',padding:'10px',fontSize:'25px',backgroundColor: 'black'}}><FontAwesomeIcon icon={faYoutube} /></li>
                <li style={{listStyle:'none',padding:'10px',fontSize:'25px',backgroundColor: 'black'}}><FontAwesomeIcon icon={faSnapchat} /></li>
                <li style={{listStyle:'none',padding:'10px',fontSize:'25px',backgroundColor: 'black'}}><FontAwesomeIcon icon={faTiktok} /></li>
            </div>
        </ul>
    </div>
  )
}

export default Footer;
