import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { addStudentAPI } from "../Services/allAPIs";
function RegisterPage() {
    const [registerData,SetRegisterData]=useState({
        firstName:"",lastName:"",address:"",email:"",gender:"",mobile:"",password:"",dateofBirth:"",course:""
    })
    const [selectedOption, setSelectedOption] = useState();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  useEffect(()=>{
    SetRegisterData({...registerData,gender:selectedOption})
  },[selectedOption])
    console.log(registerData);
    const handleRegister=async()=>{
        const {firstName,lastName,address,email,gender,mobile,password,dateofBirth,course}=registerData
        if(!firstName||!lastName|| !address||!email||!gender||!mobile||!password||!dateofBirth||!course){
            alert("please fill the form Completely!!!")
        }else{
            try{
                const result =await addStudentAPI(registerData)
            if(result.status==200){
                console.log(result.data)
            }else{
                console.log(result.response.data)
            }
            }catch(err){
             console.log(err);
            }
        }
    }
  return (
    <>
      <div style={{ height: "100vh" }} className="row">
        <div
          style={{ height: "100%" }}
          className="col-4 bg-info d-flex flex-column justify-content-center align-content-center "
        >
          <h2 className="text-center mb-3 fw-bolder">Welcome</h2>
          <h5 className="text-center fw-bold mb-3 text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolore quibusdam soluta perspiciatis mollitia totam debitis cumque
            nihil dolorum.
          </h5>
          <Link to={'/'} className="d-flex justify-content-center text-decoration-none ">
            <button className="btn btn-danger ">Go Back</button>
          </Link>
        </div>
        <div className="col-8 py-5 ">
          <h1 className="text-center ">Apply as a Student</h1>
          <div className="row">
            <div className="col-6 px-5 ">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={e=>SetRegisterData({...registerData,firstName:e.target.value})} type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={e=>SetRegisterData({...registerData,lastName:e.target.value})} type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={e=>SetRegisterData({...registerData,address:e.target.value})} as="textarea" rows={3} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={e=>SetRegisterData({...registerData,email:e.target.value})} type="email" />
              </Form.Group>
              <div className="container">
              <p>Gender</p>
      <div className="form-check">
        
        <input
          className="form-check-input"
          type="radio"
          name="options"
          value="Male"
          checked={selectedOption === 'Male'}
          onChange={handleOptionChange}
        />
        <label className="form-check-label">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="options"
          value="Female"
          checked={selectedOption === 'Female'}
          onChange={handleOptionChange}
        />
          <label className="form-check-label">
          Female
        </label>
            </div>
            </div>
            </div>
            <div className="col-6 px-5 ">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={e=>SetRegisterData({...registerData,mobile:e.target.value})} type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e=>SetRegisterData({...registerData,password:e.target.value})} type="password" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control onChange={e=>SetRegisterData({...registerData,dateofBirth:e.target.value})} type="date" />
              </Form.Group>
              <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Select onChange={e=>SetRegisterData({...registerData,course:e.target.value})} aria-label="Default select example">
                <option defaultValue={"Course"}>Course</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </Form.Select>
              </Form.Group>
              <button onClick={handleRegister} className=" btn btn-success w-50 mt-5">Register</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default RegisterPage;
