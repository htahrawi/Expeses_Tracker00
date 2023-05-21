import { useRef } from "react";
import Helpers from "../utils/Helpers";
import Person from "../model/Person";

class ProfilePageController {
    nameRef = useRef();
    emailRef = useRef();
    phoneRef = useRef();
    jobRef = useRef();
    ageRef = useRef();
    salaryRef = useRef();
    passwordRef = useRef();

    checkData = () => {
        if (this.nameRef.current.value !== "" && this.emailRef.current.value !== "" && this.phoneRef.current.value !== "" && this.jobRef.current.value !== "" && this.ageRef.current.value !== "" && this.salaryRef.current.value !== "" && this.passwordRef.current.value !== "") {
            return true;
        }
        Helpers.showMessage("Error", "Enter required Data", "error");
        return false;
    }

    addNewPerson = () => {
        if (this.checkData()) {
            return new Person(Math.random(), this.nameRef.current.value, this.emailRef.current.value, this.phoneRef.current.value, this.jobRef.current.value, this.ageRef.current.value, this.salaryRef.current.value, this.passwordRef.current.value);
        }
    }
}
export default ProfilePageController;