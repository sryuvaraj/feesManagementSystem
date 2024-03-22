import React, { useState } from "react";
import axios from "axios"; // Import axios without curly braces

const RegisterStudents = ({pendingCount, setPendingCount,studentsCount,setStudentsCount}) => {
  const StudentsAPI = "http://localhost:3001/students";
  const paymentDetails = "http://localhost:3001/studentPayments"

  const [initVals, setInitVals] = useState({
    regNumber:"",
    name: "",
    email:"",
    feesAmount: "",
    dateOfJoining: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInitVals({ ...initVals, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const regNum =  Math.floor(Math.random() * 10000)
      const response = await axios.post(StudentsAPI, { ...initVals, regNumber: regNum});
      const result = await axios.post(paymentDetails,{...initVals, regNumber: regNum,isFeesPending:"Yes"})
      setPendingCount(pendingCount+1)
      setStudentsCount(studentsCount+1)

      // Optionally reset the form values after successful submission
      setInitVals({
        name: "",
        email:"",
        feesAmount: "",
        dateOfJoining: "",
      });
    } catch (error) {
      console.error("Error registering student:", error);
    }
  };

  return (
    <>
      <div>
        <div>Register Student :</div>
        <div className="d-flex justify-content-center">
          <form onSubmit={handleSubmit} style={{ width: "600px" }}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={initVals.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email :</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={initVals.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Amount :</label>
              <input
                type="number"
                className="form-control"
                placeholder="Fees Amount"
                name="feesAmount"
                value={initVals.feesAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>DOJ :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Date of Joining"
                name="dateOfJoining"
                value={initVals.dateOfJoining}
                onChange={handleChange}
                required
              />
            </div>
            <button className="mt-3 form-control btn btn-success" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterStudents;
