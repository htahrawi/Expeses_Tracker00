import { Fragment, useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom/dist";
import ExpensesContext from "../../context/expenses-context";

const SideBar = function () {
    
    let navigate = useNavigate();
    let expensesContext = useContext(ExpensesContext);
    
    let signOutHandler = function () {
        localStorage.setItem("login", false);
        expensesContext.setLogin(false);
        navigate('/', {replace: true});
    }
    return <Fragment>
        <div className="sidebar bg-white p-20 p-relative">
            <h3 className="p-relative txt-c mt-0">Expenses App</h3>
            <ul>
                <li>
                    <NavLink className={`${(navData) => navData.isActive ? 'active' : '' } d-flex align-center fs-14 c-black rad-6 p-10`} to="/home/add-expenses">
                        <i className="fa-regular fa-plus fa-fw"></i>
                        <span>Add Expense</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${(navData) => navData.isActive ? 'active' : '' } d-flex align-center fs-14 c-black rad-6 p-10`} to="/home/all-expenses">
                        <i className="fa-regular fa-list-alt fa-fw"></i>
                        <span>All Expenses</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${(navData) => navData.isActive ? 'active' : '' } d-flex align-center fs-14 c-black rad-6 p-10`} to="/home/avarage">
                        <i class="fa-solid fa-gauge fa-fw"></i>
                        <span>Average</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${(navData) => navData.isActive ? 'active' : '' } d-flex align-center fs-14 c-black rad-6 p-10`} to="/home/categorys-total">
                        <i className="fa-regular fa-list-alt fa-fw"></i>
                        <span>Total for Categories</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${(navData) => navData.isActive ? 'active' : '' } d-flex align-center fs-14 c-black rad-6 p-10`} to="/home/statistics">
                        <i className="fa-regular fa-bar-chart fa-fw"></i>
                        <span>Statistics</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={`${(navData) => navData.isActive ? 'active' : '' } d-flex align-center fs-14 c-black rad-6 p-10`} to="/home/profile">
                        <i class="fa-regular fa-id-card fa-fw"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="d-flex align-center fs-14 c-black rad-6 p-10" onClick={signOutHandler} to="/auth">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Sign Out</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </Fragment>
}
export default SideBar;