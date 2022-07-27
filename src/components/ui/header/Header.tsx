import './Header.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

import { Link } from "react-scroll";
import { MDBBtn } from 'mdb-react-ui-kit';
// import logo from "../../../assets/icons/logo_smt_negro.png";

export const Header = () => {

    

    const [changeIcon, setChangeIcon] = useState(true);

    const onHandleChangeIcon = () => {
        setChangeIcon(!changeIcon);
    };

  return (
    <div className='Header__container'>
        <div className="Header__container-logo">
             {/* <img 
                src={logo}
                alt="LogoSMT" 
                className='Header__container-logo-img'
            /> */}
        </div>
        <div className="Header__container-menuMobile" onClick={onHandleChangeIcon}>
            {changeIcon ? (
                <FaBars className='header__container-menuMobile-icon'/>
            ) : (
                <FaTimes className='header__container-menuMobile-icon'/>
            )}
        </div>
        <div onClick={onHandleChangeIcon}
            className={
                changeIcon
                  ? "Header__container-nav moveToLeft"
                  : "Header__container-nav menuClosed"
            }
        >
            <ul className='Header__container-nav-ul'>
                <li className='Header__container-nav-ul-li'><Link to="hero" spy={true} smooth={true} offset={50} duration={500} className='Header__container-nav-ul-li-a'>HOME</Link></li>
                <li className='Header__container-nav-ul-li'><Link to="phones" spy={true} smooth={true} offset={50} duration={500} className='Header__container-nav-ul-li-a'>PHONES</Link></li>
                <li className='Header__container-nav-ul-li'><Link to="oculus" spy={true} smooth={true} offset={50} duration={500} className='Header__container-nav-ul-li-a'>OCULUS VR</Link></li>
                <li className='Header__container-nav-ul-li'><Link to="computers" spy={true} smooth={true} offset={50} duration={500} className='Header__container-nav-ul-li-a'>COMPUTERS</Link></li>
                <MDBBtn className='Header__container-nav-ul-btn'>BTN Lorem</MDBBtn>
            </ul>
        </div>
    </div>
  )
}
 