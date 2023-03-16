const validation = (form, setErrors, errors) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    //Email validation
    if (!form.email)
        setErrors({ ...errors, email: "Set your E-mail" })

    else if (form.email.length > 35)
        setErrors({ ...errors, email: "Your E-mail must be under 35 characters!" })

    else if (emailRegex.test(form.email)) {
        setErrors({ ...errors, email: "" })
    } else { setErrors({ ...errors, email: "Your E-mail is invalid" }) }


    //Password validation
    if (!form.password)
        setErrors({ ...errors, password: "Set your Password!" })

    else if (form.password.length < 8)
        setErrors({ ...errors, password: "Password should have at least 8 characters" })

    else if (passwordRegex.test(form.password)) {
        setErrors({ ...errors, password: "" })
    } else { setErrors({ ...errors, password: "Your password should have at least one lowercase letter, one uppercase letter, one digit" }) }
}

export default validation;