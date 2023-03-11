import styles from "../Loading/Loading.module.css"

const Loading = () =>  {



    return (
        <>

            <div className={styles.loader}>

                <div className={styles.face}>
                    <div className={styles.circle}></div>
                </div>


                <div className={styles.face}>
                    <div className={styles.circle}></div>
                </div>
                <h1 className={styles.cargando}>Loading...</h1>


            </div>
        </>
    )
}

export default Loading;