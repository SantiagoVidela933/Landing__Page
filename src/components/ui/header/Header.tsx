import './Header.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

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
                // src={logo}
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
                <li className='Header__container-nav-ul-li'><a href="#" className='Header__container-nav-ul-li-a'>HOME</a></li>
                <li className='Header__container-nav-ul-li'><a href="#" className='Header__container-nav-ul-li-a'>CONTENT</a></li>
                <li className='Header__container-nav-ul-li'><a href="#" className='Header__container-nav-ul-li-a'>ABOUT</a></li>
                <li className='Header__container-nav-ul-li'><a href="#" className='Header__container-nav-ul-li-a'>RESOURCES</a></li>
                <button className='Header__container-nav-ul-btn'>REQUEST A DEMO</button>
            </ul>
        </div>
    </div>
  )
}
 