import { Fragment } from 'react';
import AvatarImage from "../resources/imgs/avatar.png";

const StatisticsPage = () => {
    return <Fragment>
        <h1 className="p-relative">Tickets Statistics</h1>
        <div className="wrapper d-grid gap-20">
            <div className="tickets p-20 bg-white rad-10">
                <h2 className="mt-0 mb-10">Tickets Statistics</h2>
                <p className="mt-0 mb-20 c-grey fs-15">Tickets Statistics For Every Category</p>
                <div className="d-flex txt-c gap-20 f-wrap">
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-solid fa-utensils fa-2x mb-10 c-orange"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">$ 2500</span>
                        Food
                    </div>
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-solid fa-house-chimney fa-2x mb-10 c-blue"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">$ 500</span>
                        Rent
                    </div>
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-solid fa-truck-plane fa-2x mb-10 c-green"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">$ 1900</span>
                        Transportation
                    </div>
                    <div className="box p-20 rad-10 fs-13 c-grey">
                        <i className="fa-solid fa-stethoscope fa-2x mb-10 c-red"></i>
                        <span className="d-block c-black fw-bold fs-25 mb-5">$ 100</span>
                        Treatment
                    </div>
                </div>
            </div>
            <div className="latest-post p-20 bg-white rad-10 p-relative">
                <h2 className="mt-0 mb-25">Reminders</h2>
                <div className="top d-flex align-center">
                    <img className="avatar mr-15" src={AvatarImage} alt="" />
                    <div className="info">
                        <span className="d-block mb-5 fw-bold">Hossam Al-Tahrawi</span>
                    </div>
                </div>
                <div className="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
                    You can fool all of the people some of the time, and some of the people all of the time, but you can't
                    fool all of the people all of the time.
                </div>
                <div className="post-stats between-flex c-grey">
                    <div className="task-row between-flex">
                        <div className="info">
                            <h3 className="mt-0 mb-5 fs-15">Basic Salary</h3>
                            <p className="m-0 c-grey">$ 8000</p>
                        </div>
                    </div>
                    <div className="task-row between-flex">
                        <div className="info">
                            <h3 className="mt-0 mb-5 fs-15">Reminder Salary</h3>
                            <p className="m-0 c-grey">$ 700</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default StatisticsPage;