import { MDBBtn } from 'mdb-react-ui-kit';
import './HeaderSection.css';

export const HeaderSection = () => {
  return (
    <div className='HeaderSection__container'>
        <div className="HeaderSection__container-box">
            <h1 className="HeaderSection__container-box-h1">Operate at a higher level.</h1>
            <p className="HeaderSection__container-box-p    ">The leading virtual reality surgical training and assessment platform.</p>
            <MDBBtn className='HomeSection__container-box-info-btn'>REQUEST A DEMO</MDBBtn>
        </div>
    </div>
  )
}
