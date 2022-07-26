import { MDBBtn } from 'mdb-react-ui-kit';
import './ComputerSection.css';

export const ComputerSection = () => {
  return (
    <div className="ComputerSection__container" id='computers'>
        <div className='ComputerSection__container-box'>
            <div className='ComputerSection__container-box-info'>
                <h2 className='ComputerSection__container-box-info-h2'>Train on your terms, from anywhere.</h2>
                <p className='ComputerSection__container-box-info-p'>Digitize the HCP learning journey and collaborate from anywhere in the world using Oculus VR technology.</p>
                <MDBBtn className='ComputerSection__container-box-info-btn'>Solutions for medical device companies</MDBBtn>
            </div>
            <div className='ComputerSection__container-box-animation'>
                <div className='ComputerSection__container-box-animation-video'></div>
            </div>
        </div>
    </div>
  )
}
