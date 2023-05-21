import { Fragment } from "react";
import AvatarImage from "../../resources/imgs/avatar.png";

const CategoryImage = (props) => {
    return <Fragment>
        <div className="course bg-white rad-6 p-relative">
                <div className={props.cover}></div>
                <img className="instructor" src={AvatarImage} alt="" />
                <div className="p-20">
                    <h4 className="m-0">{props.title}</h4>
                    <p className="description c-grey mt-15 fs-14">
                        Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture
                    </p>
                </div>
                <div className="info p-15 p-relative between-flex">
                    <span className="title bg-blue c-white btn-shape">{props.amount}</span>
                </div>
            </div>
    </Fragment>
}
export default CategoryImage;