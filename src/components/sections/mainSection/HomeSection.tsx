import { Header } from '../../ui/header/Header';
import './HomeSection.css';

export const HomeSection = () => {
  return (
    <div className="HomeSection__container">
        {/* <Header/> */}
        <div className="HomeSection__container-box">
            <div className="container__box-info">
                <h2 className='box__info-h2'>Inspire healthcare professionals at scale.</h2>
                <p className='box__info-p'>Virtual training experiences that accelerate learning and drive adoption.</p>
                <button className='box__info-btn'>Learn more about our platform</button>
            </div>
            <div className="container__box-sample">
                <div className='box__sample-div'></div> 
            </div>
        </div>
    </div>
  )
}
