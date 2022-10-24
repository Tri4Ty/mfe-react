import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route 
} from "react-router-dom";
import './index.css';
import App from './AppShell';
import AppOne from "./AppOne";
import AppTwo from "./AppTwo";
 import reportWebVitals from './reportWebVitals';
 import './App.css';
 import AppOneA from "./AppOneA";
 import AppOneB from "./AppOneB";
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/appone">App 1</Link>
              </li>
              <li>
                <Link to="/apptwo">App 2</Link>
              </li>
            </ul>
          </nav>
        </div>
        <header className="App-header">
          <Routes>
            <Route path="/" element={ <App /> } />
            <Route path="/appone/*" element={<AppOne/>}>
              <Route index element={<AppOneA/>} />
              <Route path="appone_b" element={<AppOneB/>} />
            </Route>
            <Route path="/apptwo" element={<AppTwo/>} />
          </Routes>
        </header>
    </Router>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
