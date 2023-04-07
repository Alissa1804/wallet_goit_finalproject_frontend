import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
/*import { Provider } from 'react-redux';
/*import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store>
      <PersistGate loading={null} persistor>
<BrowserRouter basename="/wallet_goit_finalproject_frontend/"> */}
    <App />
    {/*    </BrowserRouter>
      </PersistGate>
</Provider >*/}
  </React.StrictMode>
);
