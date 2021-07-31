import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav() {
    const [show, handleShow]= useState(false);
    const history= useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100)
        {
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
    
    return (
        <div className={'nav ${show && "nav__black"}'}>
            <div className='nav__contents'>
            <img
            onClick={() => history.push('/')}
            className='nav__logo'
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            />

            <img
            onClick={() => history.push('/profile')}
            className='nav__avatar'
            src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/11718d2f5e7c6e68da3b4959_rw_600.png?h=287f1b3bd0b666897ae600e854a0c251"
            alt=""
            />
            </div>
            
        </div>
    );
}

export default Nav;
