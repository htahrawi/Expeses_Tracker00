import { Fragment } from "react";
import CategoryImage from "../components/dashboard/CategoryImage";

const CategoriesTotal = function () {
    return <Fragment>
        <h1 className="p-relative">Total For Categories</h1>
        <div className="courses-page d-grid m-20 gap-20">
            <CategoryImage title="Food" cover="cover1" amount="10"/>
            <CategoryImage title="Rent" cover="cover2" amount="5"/>
            <CategoryImage title="Transportation" cover="cover3" amount="15"/>
            <CategoryImage title="Treatment" cover="cover4" amount="7"/>
        </div>
    </Fragment>
}
export default CategoriesTotal;