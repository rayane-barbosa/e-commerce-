import React from "react";
import Navbar from "./navigationBar";


export const Header = () => {
    return (
        <header className="header">
            <div style={{ width: '100%', height: '50px', padding: 10, background: '#02021D', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>5
                <div style={{ color: 'white', fontSize: '20px', fontFamily: 'Rubik', fontWeight: '25px', lineHeight: '5px', wordWrap: 'break-word' }}>Free US shipping on order $80+</div>
            </div>
            <Navbar />
            <hr />
        </header>


    );
};