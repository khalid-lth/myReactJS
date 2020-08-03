import React from 'react';
import './style.css';
import TabelHargaBuah from './tugas11/TabelHargaBuah';

function App() {
  return (
    <div div className = "tabelHarga" >
        <h1>Tabel Harga Buah</h1>
      <table className="tabel">
        <tbody className="bg">
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
              <TabelHargaBuah/>
      </tbody>
      </table>
    </div>
    
  );
}

export default App;
