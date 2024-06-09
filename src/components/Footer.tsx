import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
      <>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer'>
          <section className='border-top' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    Built using
                  </h6>
                  <div className="contact">
                    <a href='https://id.linkedin.com/in/griselda-neysa-sadiya-6629a2238' target="_blank" rel="noopener noreferrer" className="card-logo-link">
                      <img src='./logo/react.png' alt="GitHub Logo" className="card-logo"/>
                    </a>
                    <span style={{marginInlineStart: '5px'}}>ReactJS</span>
                  </div>
                </MDBCol>
    
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Connect with me!</h6>
                  <div className="contact">
                    <a href='https://id.linkedin.com/in/griselda-neysa-sadiya-6629a2238' target="_blank" rel="noopener noreferrer" className="card-logo-link">
                      <img src='./logo/linkedin.svg' alt="GitHub Logo" className="card-logo"/>
                    </a>
                    <span style={{marginInlineStart: '10px'}}>Griselda Neysa Sadiya</span>
                  </div>
                  <div className="contact">
                    <a href='https://www.instagram.com/griseldans/' target="_blank" rel="noopener noreferrer" className="card-logo-link">
                      <img src='./logo/instagram.svg' alt="GitHub Logo" className="card-logo"/>
                    </a>
                    <span style={{marginInlineStart: '10px'}}>griseldans</span>
                  </div>   
                  <div className="contact">
                    <a href='https://github.com/griseldans' target="_blank" rel="noopener noreferrer" className="card-logo-link">
                      <img src='./logo/github.svg' alt="GitHub Logo" className="card-logo"/>
                    </a>
                    <span style={{marginInlineStart: '10px'}}>griseldans</span>
                  </div>               
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
      </>
      );
}

export default Footer