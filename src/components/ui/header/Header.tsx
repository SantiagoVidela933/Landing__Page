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
        <div className="Header__container-icon">
            <img 
                // src={logo}
                alt="LogoSMT" 
                className='container__icon-img'
            />
        </div>
        <div className="container__box-iconMobile" onClick={onHandleChangeIcon}>
            {changeIcon ? (
                <FaBars className='box-iconMobile '/>
            ) : (
                <FaTimes className='box-iconMobile '/>
            )}
        </div>
        <div onClick={onHandleChangeIcon}
            className={
                changeIcon
                  ? "Header__container-nav moveToLeft"
                  : "Header__container-nav menuClosed"
              }
        >
            <ul className='container__nav-ul'>
                <li className='nav__ul-li'><a href="#" className='nav__ul-a'>HOME</a></li>
                <li className='nav__ul-li'><a href="#" className='nav__ul-a'>CUSTOMERS</a></li>
                <li className='nav__ul-li'><a href="#" className='nav__ul-a'>ABOUT</a></li>
                <li className='nav__ul-li'><a href="#" className='nav__ul-a'>RESOURCES</a></li>
            </ul>
        </div>
    </div>
  )
}
 