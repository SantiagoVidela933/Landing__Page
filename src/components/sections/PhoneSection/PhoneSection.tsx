import { MDBBtn } from 'mdb-react-ui-kit'
import './PhoneSection.css'

export const PhoneSection = () => {
  return (
    <div className='PhoneSection__container' id='phones'>
      <div className='PhoneSection__container-box'>
        <div className='PhoneSection__container-box-info'>
            <h2 className='PhoneSection__container-box-info-h2'>Fire up your performance with powerful analytics.</h2>
            <p className='PhoneSection__container-box-info-p'>Objective assessment and coaching to guide training and measure proficiency.</p>
            <MDBBtn className='PhoneSection__container-box-info-btn'>Learn more about assessment and analytics</MDBBtn>
        </div>
        <div className='PhoneSection__container-box-animation'>
            <div className='PhoneSection__container-box-animation-video'></div>
        </div>
      </div>
    </div>
  )
}
