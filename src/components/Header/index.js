import React from "react";
import './Header.css';
import logo from './logo.svg';

export default function Header() {
    return (
        <section className="header">
            <img src={logo} alt={"Santa Casa de Palmital"}/>
        </section>
    );
}