import React, {useContext} from "react";
import './History.css';
import Context from '../Context';

export default function Board() {
    const [history] = useContext(Context);

    return (
        <section className="history">
            <h2>Histórico</h2>
            {(() => {
                let arraySize = history.length;

                let historiesComponents = history.slice(arraySize > 5 ? arraySize - 5 : 0).map((his, key) => {
                    return (<p key={key}>{his.date} - {his.event} <strong>#{his.number}</strong></p>)
                })

                return historiesComponents;
            })()}
        </section>
    );
}