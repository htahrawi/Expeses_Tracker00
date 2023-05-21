import { Fragment, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Helpers from "../../utils/Helpers";
import ExpensesContext from "../../context/expenses-context";

function RegistrationForm() {
    
    let expensesContext = useContext(ExpensesContext);

    let onSubmitHandler = function (event) {
        event.preventDefault();
        if (!checkData()) {
            Helpers.showMessage("Error Data", 'Enter Required Data', 'error');
        } else {
            register();
            Helpers.showMessage("Succssfuly Account", 'Welcome To Expenses App', 'success');
        }
    }
    let usernameRef = useRef();
    let emailRef = useRef();
    let monthelyIncome = useRef();
    let passwordRef = useRef();


    let navigate = useNavigate ();

    let checkData = function () {
        if (usernameRef.current.value !== '' && emailRef.current.value !== '' && passwordRef.current.value !== '') {
            return true;
        }
        return false;
    }

    let register = function () {
        localStorage.setItem("login", true);
        expensesContext.setLogin(true);
        navigate('/home', {replace : true});
    }


    return <Fragment>
        <form action="#" className="sign-up-form" onSubmit={onSubmitHandler}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" ref={usernameRef}/>
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" ref={emailRef}/>
            </div>
            <div className="input-field">
                <i className="fas fa-plus"></i>
                <input type="number" placeholder="Monthely Income $" min={0} ref={monthelyIncome}/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" ref={passwordRef}/>
            </div>
            <input type="submit" className="button" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
                <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>
    </Fragment>
}
export default RegistrationForm;