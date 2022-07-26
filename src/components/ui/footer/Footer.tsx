import './Footer.css';
import {MDBFooter, MDBContainer, MDBIcon} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    // <div className='Footer__container'>
        <MDBFooter className='bg-dark text-center text-white'>
          <MDBContainer className='p-4 pb-0'>

            <section className='mb-4'>
              <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='facebook-f' />
              </a>

              <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='twitter' />
              </a>

              <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='google' />
              </a>
              <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fab icon='instagram' />
              </a>

            </section>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
    // </div>
  )
}
