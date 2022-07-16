import React, {useContext} from "react";
import './Alert.css';
import Context from "../Context";
import Zoom from 'react-reveal/Zoom';

export default function Alert() {

    const [history] = useContext(Context)

    return (
        <div className="alert">
            {
                (() => {
                    if (history.length > 0) {
                        let lastNumber = history[history.length - 1].number;
                        return (<Zoom>{lastNumber}</Zoom>)
                    }
                })()
            }
        </div>
    );
}