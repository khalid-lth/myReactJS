import React, { Component } from 'react';
import Harga from './Harga';
import Nama from './Nama';
import Berat from './Berat';


let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class TabelHarga extends Component {
render() {
    return (
    <>     
        {dataHargaBuah.map(ez => {
        return (
            <tr>
                <td><Nama name = {ez.nama}/></td >
                <td><Harga harga={ez.harga}/></td>
                <td><Berat berat={`${ez.berat/1000}kg`}/></td>
            </tr>
        )
        })}
    </>
    )
}
}

export default TabelHarga;