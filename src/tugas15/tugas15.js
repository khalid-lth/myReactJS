import React from 'react';
import {tugas15provider} from "./tugas15Context";
import tugas15List from "./tugas15List";
import tugas15Form from "./tugas15Form";


const tugas15 = () =>{
  return(
    <tugas15provider>
        <tugas15List></tugas15List>
        <tugas15Form></tugas15Form>
    </tugas15provider>
  )
}


export default tugas15