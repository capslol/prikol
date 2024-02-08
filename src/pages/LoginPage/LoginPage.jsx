import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useHeart} from "../../contexts/HeartProvider";
import './LoginPage.css';
const LoginPage = () => {

    const [imageUrl, setImageUrl] = useState('/images/filled_heart.png');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()
    const {updateHeartCounter} = useHeart()

    const handleLogin = () => {
        if (password === 'нагетс'){
            console.log(1)
            alert('в слове Наггетс - 2 "г"');
        }
        // Проверка правильности логина и пароля
        if (password === 'наггетс') {
            console.log(2)
            setLoggedIn(true);
            updateHeartCounter(1)
            navigate('/quiz')

        } else {
            console.log(3)
            updateHeartCounter(-1)
            alert('ПОЧТИ) попробуй еще');
        }

    };

    const onTik = () => {
        setImageUrl('/images/nug.png')
    }

    return (
        <div>
                <div>
                    <h2>Ариша, чтобы пройти дальше тебе нужно угадать пароль :)</h2>
                    <div className={'nuggets'}>
                        <h1> Ты - мой</h1>
                        <div onClick={() => onTik()} className={'tik'}>
                            <img className={'nuggets-image'} src={imageUrl} alt=""/>
                        </div>
                    </div>


                    <input
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Войти</button>
                </div>

        </div>
    );
};


export default LoginPage;