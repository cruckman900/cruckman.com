import { React, useState } from "react";
import Card from '../../components/UI/Card/Card';
import classes from './Login.module.css';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotForm from "./ForgotForm";
import LoggedInUser from "./LoggedInUser";

function Login(props) {
    const [headerText, setHeader] = useState("User Login");

    return (
        <Card showToggle={false} expanded={true}
            className={`${classes.Card} ${classes.LeftColumn}`}
            header={headerText}
        >
            <LoginForm />
            {/* <RegisterForm />
            <ForgotForm />
            <LoggedInUser /> */}
        </Card>
);
}

export default Login;