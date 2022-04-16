import React from "react";
import Navbar from "../component/Navbar";

export default class Transaction extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Navbar />
                <h1>Ini Halaman Transaction</h1>
            </div>
        )
    }
}