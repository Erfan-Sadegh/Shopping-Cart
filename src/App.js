import React from 'react';
import { RouterConfig } from './routes';
import 'react-toastify/dist/ReactToastify.css';

// MDB
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='App'>
      <RouterConfig />
    </div>
  );
}

export default App;
