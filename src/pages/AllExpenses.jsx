import { Fragment, useContext } from "react";
import ExpensesContext from "../context/expenses-context";
import TabelRow from "../components/dashboard/TabelRow";
const AllExpenses = () => {

    let expensesContext = useContext(ExpensesContext);

    return <Fragment>
            <div className="page d-flex">
                <div className="content" >
                    <div className="projects p-20 bg-white rad-10 m-20">
                        <h2 className="mt-0 mb-20">List Of Expenses</h2>
                        <div className="responsive-table">
                            <table className="fs-15 w-full">
                                <thead>
                                    <tr>
                                        <th>Value</th>
                                        <th>Category</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expensesContext.expenses.map((element) => 
                                        <TabelRow 
                                            key={element.id}
                                            id = {element.id}
                                            value={element.value}
                                            category={element.category}
                                        />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
}

export default AllExpenses;