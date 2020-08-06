import React from 'react';
import TabelHargaBuah from './tugas11/TabelHargaBuah';
import Timer from './tugas12/waktu';
import TabelHarga from './tugas13/TambahElemen';
import TabelHargaFruit from './tugas14/tugas14';

function App() {
  return (
    <div className="App">
      {/* <TabelHargaBuah/> */}
      {/* <TabelHarga/> */}
      <TabelHargaFruit/>
      <Timer start={114}/>
      
    </div>
    
  );
}

export default App;
