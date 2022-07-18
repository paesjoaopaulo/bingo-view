import React from "react";
import './Board.css';
import Row from "../Row";

export default function Board() {

    return (
        <section className="board">
            {(() => {
                let letters = process.env.REACT_APP_HEADER.split('');
                let components = [];
                letters.map((letter, index) => {
                    components.push(<Row letter={letter} start={index * 15 + 1} key={index}/>)
                    return true;
                })

                return components;
            })()}
        </section>
    );
}