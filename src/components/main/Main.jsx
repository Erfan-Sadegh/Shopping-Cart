import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Main = ({ children }) => {
  return (
    <main className='mt-4'>
      <MDBContainer>
        <MDBRow className='mb-3'>
          <MDBCol size='4'>{children}</MDBCol>
        </MDBRow>
      </MDBContainer>
    </main>
  );
};

export default Main;
