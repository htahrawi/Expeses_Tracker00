import { Fragment, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Helpers from "../../utils/Helpers";
import ExpensesContext from "../../context/expenses-context";

function LoginForm() {
    let usernameRef = useRef();
    let passwordRef = useRef();
    let navigate = useNavigate();
    let expensesContext = useContext(ExpensesContext);
    let onSubmitHandler = function (event) {
        event.preventDefault();
        if (!checkData()) {
            Helpers.showMessage("Error Credentials", 'Enter Required Data', 'error');
        }else {
            login();
            Helpers.showMessage('Succssfuly Credentials', 'Welcom To Expensess App', 'success');
        }
        
    }
    let checkData = function () {
        if (usernameRef.current.value !== '' && passwordRef.current.value !== '') {
            return true;
        }
        return false;
    }
    let login = function () {
        localStorage.setItem("login", true);
        expensesContext.setLogin(true);
        navigate('/home', {replace: true});
    }
    return <Fragment>
        <form className="sign-in-form" onSubmit={onSubmitHandler}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" ref={usernameRef}/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" ref={passwordRef}/>
            </div>
            <input type="submit" value="Login" className="button solid" />

            <p className="social-text">Or Sign in with social platforms</p>
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
export default LoginForm;