import { useState } from "react";
import { useSelector } from "react-redux";
import validation from './validation';
import styles from './Landing.module.css';
import Loading from '../../Components/Loading/Loading';
import Buttons from '../../Components/Buttons/Buttons';


const Landing = ({ login }) => {

    const characters = useSelector((state) => state.characters)

    const [form, setForm] = useState({
        email: "alondra@gmail.com",
        password: "YURI2021op",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });


    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setForm({ ...form, [property]: value });
        validation({ ...form, [property]: value }, setErrors, errors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(form)
    }



    return (
        <>
            <iframe src="https://www.youtube.com/embed/Jgbp9A7onSc?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>

            <div className={styles.content} >
                {characters.length !== 0 ?
                    <>
                        <div className={styles.loginbox}>
                            <img src='logo.webp' className={styles.logo} />
                            <br />
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div className={styles.userbox}>
                                    <label htmlFor='email'>{errors.email ? errors.email : "Email"}</label>
                                    <input
                                        name='email'
                                        type="email"
                                        id='email'
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.userbox}>
                                    <label htmlFor="password">{errors.password ? errors.password : "Password"}</label>
                                    <input
                                        name='password'
                                        type="password"
                                        id='password'
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Buttons
                                    infoboton={"LOGIN"}
                                    type="submit"
                                />

                            </form>

                        </div>
                    </>

                    : <Loading />}
            </div>
        </>
    )

}

export default Landing; 