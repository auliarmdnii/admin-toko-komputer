import React from "react";
import Navbar from "../component/Navbar";

export default class Customer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Navbar />
                <h1>Ini Halaman Customer</h1>
            </div>
        )
    }
}