import { Fragment } from "react";

const TabelRow = function (props) {
    return <Fragment>
        <tr>
            <td>{props.value}</td>
            <td>{props.category}</td>
            <td>
                <a href="">
                    <i className="fa-regular fa-pen-to-square"></i>
                </a>
            </td>
            <td>
                <a href="">
                    <i className="fa-solid fa-trash"></i>
                </a>
            </td>
        </tr>
    </Fragment>
}
export default TabelRow;