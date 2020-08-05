import React from 'react';
import TabelHargaBuah from './tugas11/TabelHargaBuah';
import Timer from './tugas12/waktu';
import TabelHarga from './tugas13/TambahElemen';

function App() {
  return (
    <div className="App">
      {/* <TabelHargaBuah/> */}
      <TabelHarga/>
      <Timer start={114}/>
      
    </div>
    
  );
}

export default App;
