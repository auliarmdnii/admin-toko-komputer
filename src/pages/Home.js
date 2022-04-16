import React from "react";
import Navbar from "../component/Navbar";

export default class Home extends React.Component{
    constructor(){
        super()
    }
    renter(){
        return(
            <div>
                <Navbar />
                <h1>Ini Halaman Home</h1>
            </div>
        )
    }
}