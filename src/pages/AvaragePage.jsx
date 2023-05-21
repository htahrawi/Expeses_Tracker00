import { Fragment } from "react";
import WelcomeImage from "../resources/imgs/welcome.png";
import AvatarImage from "../resources/imgs/avatar.png";
import { Link } from "react-router-dom";

const AvaragePage = function () {
    return <Fragment>
        <h1 className="p-relative">Average daily expense</h1>
        <div className="wrapper gap-20">
            <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
                <div className="intro p-20 d-flex space-between bg-eee">
                    <div>
                        <h2 className="m-0">Welcome</h2>
                        <p className="c-grey mt-5">Hossam Al-Tahrawi</p>
                    </div>
                    <img className="hide-mobile" src={WelcomeImage} alt="" />
                </div>
                <img src={AvatarImage} alt="" className="avatar" />
                <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                    <div>Hossam Al-Tahrawi <span className="d-block c-grey fs-14 mt-10">Developer</span></div>
                    <div>7 <span className="d-block c-grey fs-14 mt-10">Expense Daily</span></div>
                    <div>$100 <span className="d-block c-grey fs-14 mt-10">Total Expense Daily</span></div>
                </div>
                <Link to="/home/all-expenses" className="visit d-block fs-14 bg-blue c-white w-fit btn-shape">Show Expenses</Link>
            </div>
        </div>
    </Fragment>
}
export default AvaragePage;