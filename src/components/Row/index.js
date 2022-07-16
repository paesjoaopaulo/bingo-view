import React from "react";
import './Row.css';
import Number from "../Number";

class Board extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="cell letter">{this.props.letter}</div>
                {(() => {
                    let start = this.props.start;
                    let components = [];

                    for (let current = start; current <= start + 15 - 1; current++) {
                        components.push(<Number number={current} key={current}/>)
                    }

                    return components;
                })()}
            </div>
        );
    }
}

export default Board;