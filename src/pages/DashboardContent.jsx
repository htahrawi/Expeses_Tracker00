import { Fragment } from "react";
import WelcomeImage from "../resources/imgs/welcome.png";
import AvatarImage from "../resources/imgs/avatar.png";

const DashboardContent = function () {
    return <Fragment>
        <h1 className="p-relative">Dashboard</h1>
        <div className="wrapper d-grid gap-20">
            <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
                <div className="intro p-20 d-flex space-between bg-eee">
                    <div>
                        <h2 className="m-0">Welcome</h2>
                        <p className="c-grey mt-5">Husam</p>
                    </div>
                    <img className="hide-mobile" src={WelcomeImage} alt="" />
                </div>
                <img src={AvatarImage} alt="" className="avatar" />
                <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                    <div>Osama Elzero <span className="d-block c-grey fs-14 mt-10">Developer</span></div>
                    <div>80 <span className="d-block c-grey fs-14 mt-10">Projects</span></div>
                    <div>$8500 <span className="d-block c-grey fs-14 mt-10">Earned</span></div>
                </div>
                <a href="profile.html" className="visit d-block fs-14 bg-blue c-white w-fit btn-shape">Profile</a>
            </div>
            <div className="quick-draft p-20 bg-white rad-10">
                <h2 className="mt-0 mb-10">Quick Draft</h2>
                <p className="mt-0 mb-20 c-grey fs-15">Write A Draft For Your Ideas</p>
                <form>
                    <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="text" placeholder="Title" />
                    <textarea className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" placeholder="Your Thought"></textarea>
                    <input className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape" type="submit" value="Save" />
                </form>
            </div>
            <div className="tickets p-20 bg-white rad-10">
                <h2 className="mt-0 mb-10">Tickets Statistics</h2>
                <p className="mt-0 mb-20 c-grey fs-15">Everything About Support Tickets</p>
                <div className="d-flex txt-c gap-20 f-wrap">
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">2500</span>
                        Total
                    </div>
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">500</span>
                        Pending
                    </div>
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">1900</span>
                        Closed
                    </div>
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">100</span>
                        Deleted
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}
export default DashboardContent;