import { Fragment } from "react"
import ImageAvatar from "../../resources/imgs/avatar.png";

const HeaderContent = function () {
    return <Fragment>
        <div className="head bg-white p-15 between-flex">
            <div className="search p-relative">
                <input className="p-10" type="search" placeholder="Type A Keyword" />
            </div>
            <div className="icons d-flex align-center">
                <span className="notification p-relative">
                    <i className="fa-regular fa-bell fa-lg"></i>
                </span>
                <img src={ImageAvatar} alt="Image Avatar" />
            </div>
        </div>
    </Fragment>
}

export default HeaderContent;