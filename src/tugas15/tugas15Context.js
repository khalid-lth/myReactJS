import React, {useState, createContext} from "react";

export const tugas15Context = createContext();

export const tugas15provider = props =>{
    const [dataHargaBuah, setDataHargaBuah] = useState(null);
    const [inputNama, setInputNama] = useState("");
    const [inputHarga, setInputHarga] = useState("");
    const [inputBerat, setInputBerat] = useState("");
    const [ID_FRUIT, setSelectedID_FRUIT] = useState(0);
    const [statusForm, setStatusForm] = useState("create");

    
    
    return(
        <tugas15provider.Provider value = {
            [dataHargaBuah, setDataHargaBuah],
            [inputNama, setInputNama],
            [inputHarga, setInputHarga],
            [inputBerat, setInputBerat],
            [ID_FRUIT, setSelectedID_FRUIT],
            [statusForm, setStatusForm]}>

                {props.children}

        </tugas15provider.Provider>
    );

};

export default tugas15provider