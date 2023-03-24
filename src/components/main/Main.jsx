import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

const Main = ({ children }) => {
  return (
    <main className='mt-4'>
      <MDBContainer>
        <MDBRow className='mb-3'>
          {children}
        </MDBRow>
      </MDBContainer>
    </main>
  );
};

export default Main;
