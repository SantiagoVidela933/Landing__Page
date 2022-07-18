import './Header.css';


export const Header = () => {


  return (
    <div className='Header__container'>
        <div className="Header__container-icon"> LOGO SMARTRAINING</div>
        <div className="Header__container-nav">
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
 