import {Link} from "react-router-dom";
import './Code.css'

export default function Expenses() {
    setTimeout(()=> {window.location = '/'}, 5000);
    return (
        <div className="App">
            <header className="App-header">
                <h2 className="code_text">Уникальный номер валентинки:</h2>
                <div className="code"><p>{localStorage.getItem('Code')}</p></div>
                <p className="subtext">Запомни уникальный номер валентинки и получи ее на следующей перемене тут же. <br/> С любовью, команда "Радио Z"</p>
            </header>
        </div>
    );
}