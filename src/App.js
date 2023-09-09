
import './App.css';
import React from 'react';
import Subaccept from './components/Subsaccept';
import Subnews from './components/Subsnews';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom' 
import './style/style.css';
function App() {
  return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route path="/send" element={<Subaccept />} />
          <Route path="/" element={<Subnews />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

 //<Router>
//       {/* <div>
//         <Routes>
//           <Route path="/" element={<Subnews />} />
//           <Route path="/send" element={<Subaccept />} />
//         </Routes>
//       </div> */}
     //</Router>
         // <Subaccept />