import { Fragment, useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegistrationForm from "../components/Auth/RegistrationForm";
import LoginImage from "../resources/imgs/log.svg";
import RegisterImage from "../resources/imgs/register.svg";
// import "../resources/css/auth.style.css";


function AuthenticationPage() {
    let [formLogin, setFormLogin] = useState(true);
    return <Fragment>
        <div className={`auth ${!formLogin ? "sign-up-mode" : ""}`} >
            <div className="forms-auth">
                <div className="signin-signup">
                    <LoginForm />
                    <RegistrationForm />
                </div>
            </div>
            <div className="panels-auth">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="button transparent" id="sign-up-button" onClick={() => setFormLogin(false)}>
                            Sign up
                        </button>
                    </div>
                    <img src={LoginImage} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="button transparent" id="sign-in-button" onClick={() => setFormLogin(true)}>
                            Sign in
                        </button>
                    </div>
                    <img src={RegisterImage} className="image" alt="" />
                </div>
            </div>
        </div>
    </Fragment>
}
export default AuthenticationPage;