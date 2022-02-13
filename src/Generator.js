import './Generator.css';
import {Link} from "react-router-dom";

export default function Expenses() {
    let gen_text = '';

    return (
        <div className="App">
            <header className="App-header2">
                <h2>Заполни данные</h2>
                <div className="Grid">
                    <div className="column1">
                        <h4>Кому</h4>
                        <p>Имя</p><input type="text" id="name" required/>
                        <br/>
                        <p>Фамилия</p><input type="text" id="firstname" required/>
                        <br/>
                        <p>Класс</p><input type="text" id="class_v" required/>
                    </div>
                    <div>
                        <h4>От кого</h4>
                        <p>Имя</p><input type="text" id="name_send" required/>
                        <br/>
                        <p>Фамилия</p><input type="text" id="firstname_send" required/>
                        <br/>
                        <p>Класс</p><input type="text" id="class_send" required/>
                    </div>
                </div>
                <h2>Сгенерированный текст:</h2>
                <div>
                    <div className="text">Я не готов(а) отпускать твою руку — совсем как свой телефон, когда жду от тебя
                        сообщения
                    </div>
                    <Link to="/code" onClick={() => {
                        let name = document.getElementById('name').value;
                        let firstname = document.getElementById('firstname').value;
                        let class_v = document.getElementById('class_v').value;

                        let name_send = document.getElementById('name_send').value;
                        let firstname_send = document.getElementById('firstname_send').value;
                        let class_send = document.getElementById('class_send').value;

                        let code_send = 'AB-' + Math.ceil(Math.random()*9000);
                        localStorage.setItem('Code', code_send);

                        let text_send = 'Я не готов(а) отпускать твою руку — совсем как свой телефон, когда жду от тебя сообщения';

                        let info = '------ Кому: ------' + '%0A' + 'Имя: ' + name + '%0A' + 'Фамилия: ' + firstname + '%0A' + 'Класс: ' + class_v + '%0A' + '------ От кого: ------' + '%0A' + 'Имя: ' + name_send + '%0A' + 'Фамилия: ' + firstname_send + '%0A' + 'Класс: ' + class_send + '%0A' + '------ Данные: ------' + '%0A' + 'Уникальный номер: ' + code_send + '%0A' + 'Текст: ' + text_send;
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', 'https://api.telegram.org/bot5242772953:AAGmlYkTaCvWiU6Sy47ymlR5LPd_6vqnEsk/sendMessage?chat_id=@radioZgen&text='+ info)
                        xhr.send()
                    }}>
                        <div className="next">➔</div>
                    </Link>
                </div>
            </header>
        </div>
    );
}