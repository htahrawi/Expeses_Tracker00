import { Fragment } from "react"
import ProfilePageController from "../controller/ProfilePageController";

const Profile = function () {

  let controller = new ProfilePageController();

  let onSubmitHandler = function (event) {
    event.preventDefault();
    let person = controller.addNewPerson();
    console.log (person);
  }

  return <Fragment>
    <h1 className="p-relative">Profile</h1>
    <div className="profile-page m-20">
      <div className="overview bg-white rad-10 align-center p-20">
        <div className="quick-draft p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">General Information</h2>
          <p className="mt-0 mb-20 c-grey fs-15">General Information About Your Account</p>
          <form onSubmit={onSubmitHandler}>
            <label className="fs-14 c-grey d-block mb-10" for="first">First Name</label>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="text" placeholder="Full Name" ref={controller.nameRef}/>
            <label className="fs-14 c-grey d-block mb-10" for="first">Email Address</label>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="email" placeholder="email" ref={controller.emailRef}/>
            <label className="fs-14 c-grey d-block mb-10" for="first">Phone Number</label>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="number" placeholder="Phone Number" ref={controller.phoneRef}/>
            <label className="fs-14 c-grey d-block mb-10" for="first">Job Title</label>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="text" placeholder="Job" ref={controller.jobRef}/>
            <label className="fs-14 c-grey d-block mb-10" for="first">Age</label>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="number" placeholder="Age" ref={controller.ageRef}/>
            <label className="fs-14 c-grey d-block mb-10" for="first">Basic Salary</label>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="number" placeholder="Salary" ref={controller.salaryRef}/>
            <label className="fs-14 c-grey d-block mb-10" for="first">Password **</label>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="password" placeholder="Reset Password" ref={controller.passwordRef}/>

            <input className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape" type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  </Fragment>
}

export default Profile;