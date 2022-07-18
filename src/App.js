import {useState} from "react";
import './App.css';
import Context from './components/Context';
import Header from "./components/Header";
import Board from './components/Board';
import History from './components/History';
import Alert from "./components/Alert";

function App() {
    const [history, setHistory] = useState([]);

    return (
        <div className="App">
            <Context.Provider value={[history, setHistory]}>
                <Header/>
                <Board/>
                <History/>
                <Alert/>
            </Context.Provider>
        </div>
    );
}

export default App;
