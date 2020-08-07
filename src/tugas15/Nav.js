import React from "react";
import {
    Link
} from "react-router-dom";

const Nav = () => {
    return(
    <>
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tugas12">Timer</Link>
            </li>
            <li>
              <Link to="/tugas13">Tabel Buah</Link>
            </li>
            <li>
              <Link to="/tugas14">Tabel Buah Hooks</Link>
            </li>
            {/* <li>
              <Link to="/tugas15">Tabel Buah context dan router</Link>
            </li> */}
          </ul>
        </nav>
    </>
    )
}

export default Nav