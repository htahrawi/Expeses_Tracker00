import { Fragment } from "react";
import "../resources/css/select.css";
import NewExpenseController from "../controller/NewExpenseController";

const AddNewExpense = function () {

    let controller = new NewExpenseController();
    return (
        <Fragment>
            <h1 className="p-relative">Expenses</h1>
            <div className="wrapper gap-20">
                <div className="quick-draft p-20 bg-white rad-10">
                    <h2 className="mt-0 mb-10">New Expense</h2>
                    <p className="mt-0 mb-20 c-grey fs-15">Add New Expense</p>
                    <form onSubmit={controller.onSubmitHandler}>
                        <input
                            style={{ width: "400px" }}
                            className="d-block mb-20 p-10 b-none bg-eee rad-6"
                            type="number"
                            placeholder="Expense Value"
                            ref={controller.expenseValue}
                        />
                        <select name="category" id="category" className="select" ref={controller.expenseCategory}>
                            <option value="-1">Selet Category</option>
                            <option value="transportation">Transportation</option>
                            <option value="food">Food</option>
                            <option value="treatment">Treatment</option>
                            <option value="rent">Rent</option>
                        </select>
                        <input
                            className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape"
                            type="submit"
                            value="Add"
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    );
};
export default AddNewExpense;
