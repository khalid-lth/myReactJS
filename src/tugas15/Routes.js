import React from "react";
import TabelHarga from "./TabelHargaBuah";
import Tugas12 from "./waktu";
import Tugas13 from "./TambahElemen";
import Tugas14 from "./tugas14";
// import Tugas15 from "./tugas15";
import { Switch, Route } from "react-router";
import Nav from "./Nav";

const Routes = () =>{

    return(
        <>
        <nav>
            <Nav/>
        </nav>
        <Switch>
            <Route exact path="/tugas12">
                <Tugas12 start={1000}/>
            </Route>
            <Route exact path="/tugas13">
                <Tugas13/>
            </Route>
            <Route exact path="/tugas14">
                <Tugas14/>
            </Route>
            {/* <Route exact path="/tugas15">
                <Tugas15/>
            </Route> */}
            <Route exact path="/">
                <TabelHarga/>
            </Route>
        </Switch>
        </>
    );
};

export default Routes;