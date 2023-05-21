import { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import AuthenticationPage from "../pages/AuthenticationPage";
import Profile from "../pages/Profile";
import AllExpenses from "../pages/AllExpenses";
import StatisticsPage from "../pages/StatisticsPage";
import { Navigate } from "react-router-dom/dist";
import AddNewExpense from "../pages/AddNewExpense";
import AvaragePage from "../pages/AvaragePage";
import CategoriesTotal from "../pages/CategoriesTotal";
import ExpensesContext from "../context/expenses-context";

const AppRoutes = function () {
    let expensesContext = useContext(ExpensesContext);
    return <Fragment>
        <Routes>
            <Route path="/*" element={ expensesContext.isLogin !== true ? <Navigate to="/auth" /> : <Navigate to="/home" />} />
            <Route path="/auth" element={ expensesContext.isLogin !== true ? <AuthenticationPage /> : <Navigate to="/home" /> } />

            <Route path="/home" element={ expensesContext.isLogin === true ? <Dashboard /> : <Navigate to="/auth" />}>
                <Route path="/home/add-expenses" element={ <AddNewExpense /> }/>
                <Route path="/home/all-expenses" element={<AllExpenses />} />
                <Route path="/home/statistics" element={<StatisticsPage />} />
                <Route path="/home/profile" element={<Profile />}/>
                <Route path="/home/avarage" element={<AvaragePage />}/>
                <Route path="/home/categorys-total" element={<CategoriesTotal />} />
            </Route>

        </Routes>
    </Fragment>
}
export default AppRoutes;