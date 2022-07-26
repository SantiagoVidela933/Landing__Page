import { MDBBtn } from 'mdb-react-ui-kit';
import './HomeSection.css';

export const HomeSection = () => {
  return (
    <div className="HomeSection__container" id='hero'>
        <div className="HomeSection__container-box">
            <div className="HomeSection__container-box-info">
                <h2 className='HomeSection__container-box-info-h2'>Inspire healthcare professionals at scale.</h2>
                <p className='HomeSection__container-box-info-p'>Virtual training experiences that accelerate learning and drive adoption.</p>
                <MDBBtn className='HomeSection__container-box-info-btn'>Learn more about our platform</MDBBtn>
            </div>
            <div className="HomeSection__container-box-animation">
                <div className='HomeSection__container-box-animation-video'></div> 
            </div>
        </div>
    </div>
  )
}
