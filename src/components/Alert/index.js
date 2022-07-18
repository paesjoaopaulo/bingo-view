import React, {useContext, useEffect, useState} from "react";
import Context from "../Context";
import classNames from 'classnames';
import './Alert.css';
import Header from "../Header";

export default function Alert() {
    const [history] = useContext(Context)
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (history.length > 0) {
            let last = history[history.length - 1];
            let lastNumber = last.number;
            setMessage(lastNumber)

            if (last.event !== 'Selecionado') {
                setVisible(false)
            } else {
                setVisible(true)
                setTimeout(function () {
                    setVisible(false);
                }, 2500)
            }
        }
    }, [history])

    let classes = classNames({
        alert: true,
        fadeIn: visible,
        fadeOut: !visible
    })

    return (
        <div className={classes}>
            <div className="backdrop">
                <div className="container">
                    <Header/>
                    <div className="ball">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}