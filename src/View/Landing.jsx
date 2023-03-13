import styles from './Landing.module.css';
import Loading from '../Components/Loading/Loading';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getApi } from "../Redux/Actions";
import { useSelector } from 'react-redux';
import Buttons from '../Components/Buttons/Buttons';
import { Link, useNavigate } from 'react-router-dom';


const Landing = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [sucess, setSucess] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApi('https://rickandmortyapi.com/api/character'));
    }, []);

    const characters = useSelector((state) => state.characters)

    const iniciarSesion = (e) => {
        e.preventDefault();

        email || password ? setSucess("Sucessfully login in!")
            : setError("Please enter your email and password")
        return;


    }


    return (
        <>
            <iframe src="https://www.youtube.com/embed/Jgbp9A7onSc?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>

            <div className={styles.content} >
                {characters.length !== 0 ?
                    <>
                        <div className={styles.loginbox}>
                            <img src='logo.png' className={styles.logo} />
                            <br />
                            <br />
                            <form onSubmit={iniciarSesion}>
                                <div className={styles.userbox}>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type="email"
                                        id='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className={styles.userbox}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <Buttons
                                    infoboton={"LOGIN"}
                                    type="submit"
                                />

                            </form>
                            {error && <p className={styles.error}>Please enter your email and password</p>}
                            {sucess && navigate('/home')}

                        </div>
                    </>

                    : <Loading />}
            </div>
        </>
    )

}

export default Landing; 