import React, {useContext, useState} from "react";
import './Number.css';
import classNames from "classnames";
import Context from "../Context";
import moment from "moment";

export default function Number(props) {
    const [selected, setSelected] = useState(false);
    const [history, setHistory] = useContext(Context)

    let classes = classNames({
        number: true,
        cell: true,
        selected: selected
    });

    function select() {
        let event = 'Removido';
        if (selected) {
            setSelected(false)
        } else {
            event = 'Selecionado'
            setSelected(true)
        }

        setHistory(
            [
                ...history,
                {
                    number: props.number,
                    event,
                    date: moment().format("HH:mm:ss")
                }
            ]
        )
    }

    return (
        <div className={classes} onClick={select.bind(this)}>
            {props.number}
        </div>
    );
}