import {useState} from "react";
import './App.css';
import Context from './components/Context';
import Board from './components/Board';
import History from './components/History';

function App() {
    const [history, setHistory] = useState([]);

    return (
        <div className="App">
            <Context.Provider value={[history, setHistory]}>
                <Board/>
                <History/>
                {/*<Alert/>*/}
            </Context.Provider>
        </div>
    );
}

export default App;
