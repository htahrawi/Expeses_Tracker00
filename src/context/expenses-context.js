import React, { useState } from "react";

let ExpensesContext = React.createContext({
    expenses : [],
    addNewExpense : (newExpense) => {},
    isLogin: false,
    setLogin: (status) => {},
});

export const ExpensesContextProvider = (props) => {
    
    let [expenses, setExpenses] = useState([]);
    
    let [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")));
    
    let newExpenseHandler = (newExpense) => {
        setExpenses((prevExpense) => {
            return [newExpense, ...prevExpense];
        });
        console.log(expenses);
    }

    return <ExpensesContext.Provider value={{
        expenses : expenses,
        addNewExpense : newExpenseHandler,
        isLogin: login,
        setLogin: setLogin,
    }}>
        {props.children}
    </ExpensesContext.Provider>
}

export default ExpensesContext;