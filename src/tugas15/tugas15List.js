import React, {useContext, useEffect} from "react"
import tugas15Context from "./tugas15Context"


const tugas15List = () =>{

    const [dataHargaBuah] = useContext(tugas15Context)

    useEffect( () => {
    if (dataHargaBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
    .then(res => {
        setDataHargaBuah(res.data.map(el=>{ return {id: el.id, nama: el.name, harga: el.price, berat: el.weight}} ))
    })
    }
}, [dataHargaBuah])

    return(
        <ul>
            {dataHargaBuah.map(el =>{
                return <li>nama: {el.name} berat: {el.weight} harga: {el.price}</li>
            })}
        </ul>
    )

}

export default tugas15List