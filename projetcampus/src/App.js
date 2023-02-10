import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

function App() {

    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="App-nav">
                <Link to={`/suppliers`}>Liste</Link>
                    <Link to={`/map`}> Map </Link>
                </div>
                <Outlet/>
            </header>
        </div>
    );
}
export default App;