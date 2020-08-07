import React from 'react';
import TabelHargaBuah from './tugas11/TabelHargaBuah';
import Timer from './tugas12/waktu';
import TabelHarga from './tugas13/TambahElemen';
import TabelHargaFruit from './tugas14/tugas14';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './tugas15/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes></Routes>
      </Router>
      {/* <TabelHargaBuah/> */}
      {/* <TabelHarga/> */}
      {/* <TabelHargaFruit/>
      <Timer start={114}/> */}
    </div>
    
  );
}

export default App;
