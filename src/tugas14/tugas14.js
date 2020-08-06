import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tugas14.css';

const TabelHargaFruit = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga ] = useState("")
    const [inputBerat, setInputBerat] = useState("")
    const [ID_FRUIT, setSelectedID_FRUIT] = useState(0)
    const [statusForm, setStatusForm] = useState("create")

    

useEffect( () => {
    if (dataHargaBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDataHargaBuah(res.data.map(el=>{ return {id: el.id, nama: el.name, harga: el.price, berat: el.weight}} ))
      })
    }
  }, [dataHargaBuah])


    const handleChangeNama = (event) => {
        setInputNama(event.target.value);
    }
    const handleChangeBerat = (event) => {
        setInputBerat(event.target.value);
    }
    const handleChangeHarga = (event) => {
        setInputHarga(event.target.value);
    }


const handleSubmit = (event)=> {
        event.preventDefault()

        let name = inputNama
        let weight = inputBerat
        let price = inputHarga
        if (name.replace(/\s/g, '') !== "" && price.toString().replace(/\s/g, '') !== "" && weight.toString().replace(/\s/g, '') !== "") {

            if(statusForm === 'create'){
                axios.post(` http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
                .then(res => {
                    setDataHargaBuah([...dataHargaBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
                })
            }else if(statusForm === "edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`, {name, price, weight})
                .then(res => {
                    let dataBuah = dataHargaBuah.find(el => el.id === ID_FRUIT)
                    dataBuah.nama = name
                    dataBuah.harga = price
                    dataBuah.berat = weight
                    setDataHargaBuah([...dataHargaBuah])
                })
            }
            setStatusForm("create")
            setSelectedID_FRUIT(0)
            setInputNama("")
            setInputHarga("")
            setInputBerat("")
        }
    }

const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value)
    let buah = dataHargaBuah.find(x => x.id === idBuah)
    setInputNama(buah.nama)
    setInputHarga(buah.harga)
    setInputBerat(buah.berat)
    setSelectedID_FRUIT(idBuah)
    setStatusForm("edit")
}

const handleDelete = (event)=>{
    let idDataBuah = parseInt(event.target.value)

    let newDataBuah = dataHargaBuah.filter(el => el.id !== idDataBuah)

    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/
    ${idDataBuah}`)
    .then(res => {
        console.log(res)
    })
    setDataHargaBuah([...newDataBuah])
}


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
        {
        dataHargaBuah !== null && dataHargaBuah.map((el, index) => {
        return (
            <tr key ={index}>
                <td style={{textAlign: 'center', fontWeight: 'bold'}}>{index+1}</td>
                <td>{el.nama}</td >
                <td>{el.harga}</td>
                <td>{`${el.berat/1000}kg`}</td>
                <td  style = {{textAlign: 'center'}}>
                    <button class = "btn-1" onClick={handleEdit} value = {el.id}>Edit</button>
                    &nbsp;
                    <button class = "btn-2" onClick={handleDelete} value = {el.id}>Delete</button>
                </td>
            </tr>
        )
        })}
        </tbody>
        </table>
        <br/><br/>
        <form onSubmit={handleSubmit}>
            <h1>Formulir Tabel Harga Buah</h1>
        <label>
            <b>Masukkan Nama Buah:</b>
        </label>          
        <input class = "input-1" type="text" name ='nama' placeholder = 'masukan nama' value={inputNama} onChange={handleChangeNama}/>
        <br/>
        <label>
           <b> Masukkan Nama Harga:</b>
        </label>          
        <input class = "input-2"type="text" name ='harga' placeholder = 'masukan harga' value={inputHarga} onChange={handleChangeHarga} />
        <br/>
        <label>
            <b>Masukkan Nama Berat:</b>
        </label>          
        <input class = "input-3" type="text" name ='berat' placeholder = 'masukan berat/gram' value={inputBerat} onChange={handleChangeBerat} />
        <br/>
        <button class= "btn-3">submit</button>
        </form>
    </div>
    )
}

export default TabelHargaFruit