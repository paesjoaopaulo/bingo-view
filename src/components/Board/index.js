import React from "react";
import './Board.css';
import Row from "../Row";

export default function Board() {

    return (
        <div className="board">
            {(() => {
                let letters = ['B', 'I', 'N', 'G', 'O'];
                //let letters = ['A', 'J', 'U', 'D', 'E'];
                let components = [];
                letters.map((letter, index) => {
                    components.push(<Row letter={letter} start={index * 15 + 1} key={index}/>)
                    return true;
                })

                return components;
            })()}
        </div>
    );
}