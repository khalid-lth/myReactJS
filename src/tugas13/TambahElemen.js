import React, { Component } from 'react';
import Harga from '../tugas11/Harga';
import Nama from '../tugas11/Nama';
import Berat from '../tugas11/Berat';
import './tugas13.css';

class TabelHarga extends Component {

constructor(props){
    super(props)
    this.state = {
    dataHargaBuah : [
{nama: "Semangka", harga: 10000, berat: 1000},
{nama: "Anggur", harga: 40000, berat: 500},
{nama: "Strawberry", harga: 30000, berat: 400},
{nama: "Jeruk", harga: 30000, berat: 1000},
{nama: "Mangga", harga: 30000, berat: 500}
],
    input : {
        nama : "",
        harga: "",
        berat: ""
    },
    indexOfForm: -1
}
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handlesEdit = this.handlesEdit.bind(this);
this.handlesDelete = this.handlesDelete.bind(this);
}

handleChange (event){
    let input = {...this.state.input}
    input[event.target.name] = event.target.value
    this.setState({
        input
    });
}

    handleSubmit(event){
        event.preventDefault()

        let input = this.state.input
        if (input['nama'].replace(/\s/g, '') !== "" && input['harga'].toString().replace(/\s/g, '') !== "" && input['berat'].toString().replace(/\s/g, '') !== "") {

            let newDataBaru = this.state.dataHargaBuah
            let index = this.state.indexOfForm

            console.log(index)

            if (index === -1){
        newDataBaru = [...newDataBaru, input]
    }else{
        newDataBaru[index] = input
    }

    this.setState({
        dataHargaBuah: newDataBaru,
        input:{
            nama: "",
            harga:"",
            berat: ""
        },
        indexOfForm: index
    })    
        }

    }

handlesEdit(event){
    let index = event.target.value
    let dataBuah = this.state.dataHargaBuah[index]
    this.setState({
        input:{
            nama: dataBuah.nama,
            harga: dataBuah.harga,
            berat: dataBuah.berat
        },
        indexOfForm: index
    })
}

handlesDelete(event){
    let index = event.target.value
    let newDataBuah = this.state.dataHargaBuah
    let daftarBuah = newDataBuah[this.state.indexOfForm]
    newDataBuah.splice(index, 1)

    if(daftarBuah !== undefined){
        var newIndex = newDataBuah.findIndex((el) => el === daftarBuah)
        this.setState({dataHargaBuah: newDataBuah, indexOfForm: newIndex})
    }else{
        this.setState({dataHargaBuah: newDataBuah})
    }
}


render() {
    return (
    <div className = "tabelHarga"> 
        <h1>Tabel Harga Buah</h1>
    <table className="tabel">
        <thead>
        <tr>
            <th>NO</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
        </tr>
        </thead>
        <tbody className="bg">
        {this.state.dataHargaBuah.map((el, index) => {
        return (
            <tr >
                <td style={{textAlign: 'center', fontWeight: 'bold'}}>{index+1}</td>
                <td><Nama name = {el.nama}/></td >
                <td><Harga harga={el.harga}/></td>
                <td><Berat berat={`${el.berat/1000}kg`}/></td>
                <td  style = {{textAlign: 'center'}}>
                    <button class= "btn-1" onClick={this.handlesEdit} value={index}>Edit</button>
                    &nbsp;
                    <button class= "btn-2" onClick={this.handlesDelete} value = {index}>Delete</button>
                </td>
            </tr>
        )
        })}
        </tbody>
        </table>
        <br/><br/>
        <form onSubmit={this.handleSubmit}>
            <h1>Formulir Tabel Harga Buah</h1>
        <label>
            <b>Masukkan Nama Buah:</b>
        </label>          
        <input class = "input-1" type="text" name ='nama' placeholder = 'masukan nama' value={this.state.input.nama} onChange={this.handleChange}/>
        <br/>
        <label>
           <b> Masukkan Nama Harga:</b>
        </label>          
        <input class = "input-2"type="text" name ='harga' placeholder = 'masukan harga' value={this.state.input.harga} onChange={this.handleChange}/>
        <br/>
        <label>
            <b>Masukkan Nama Berat:</b>
        </label>          
        <input class = "input-3" type="text" name ='berat' placeholder = 'masukan berat/gram' value={this.state.input.berat} onChange={this.handleChange}/>
        <br/>
        <button class= "btn-3">submit</button>
        </form>
    </div>
    )
}
}

export default TabelHarga