import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppClass from './AppClass'
import App from './App'
import "bootstrap/dist/css/bootstrap.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <AppClass msg="State using clases" /> */}
          <App msg="State using funcional Component" />
        </div>
      </div>

    </div>

  </React.StrictMode>
);
