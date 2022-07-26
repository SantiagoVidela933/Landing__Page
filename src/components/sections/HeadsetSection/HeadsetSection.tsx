import './HeadsetSection.css';
import { MDBBtn } from 'mdb-react-ui-kit';

export const HeadsetSection = () => {
  return (
    <div className='HeadsetSection__container' id='oculus'>
        <div className="HeadsetSection__container-box">
            <div className="HeadsetSection__container-box-animation">
              <div className='HeadsetSection__container-box-animation-video'></div> 
            </div>
            <div className="HeadsetSection__container-box-info">
                <h2 className='HeadsetSection__container-box-info-h2'>Put every procedure in reach.</h2>
                <p className='HeadsetSection__container-box-info-p'>The world’s largest VR surgical training library.</p>
                <MDBBtn className='HeadsetSection__container-box-info-btn'>Solutions for healthcare professionals</MDBBtn>
            </div>
        </div>
    </div>
  )
}
