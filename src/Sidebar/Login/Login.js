import { React, useState } from "react";
import Card from '../../components/UI/Card/Card';
import classes from './Login.module.css';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotForm from "./ForgotForm";
import LoggedInUser from "./LoggedInUser";

function Login() {
    const [headerText, setHeader] = useState("User Login");
    const [activeModule, setActiveModule] = useState('Login');

    const myForms = {
        Login: "User Login",
        Register: "Register User",
        Forgot: "Forgot Username/Password",
        LoggedIn: "User Logged In"
    }

    function handleChildClick(activeComponent) {
        setHeader(myForms[activeComponent]);
        setActiveModule(activeComponent);
    }

    return (
        <Card showToggle={false} expanded={true}
            className={`${classes.Card} ${classes.LeftColumn}`}
            header={headerText}
        >
            {
                activeModule === 'Login' && <LoginForm changeActive={handleChildClick} />
            }
            {
                activeModule === 'Register' && <RegisterForm changeActive={handleChildClick} />
            }
            {
                activeModule === 'Forgot' && <ForgotForm changeActive={handleChildClick} />
            }
            {
                activeModule === 'LoggedIn' && <LoggedInUser changeActive={handleChildClick} />
            }
        </Card>
);
}

export default Login;