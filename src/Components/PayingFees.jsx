import React, { useState } from "react";
import axios from "axios";

const PayingFees = ({
  pendingCount,
  setPendingCount,
  paidCount,
  setPaidCount,
}) => {
  const StudentsAPI = "http://localhost:3001/students";
  const paymentDetails = "http://localhost:3001/studentPayments";
  const paidList = "http://localhost:3001/completedPayments";

  const [initVals, setInitVals] = useState({
    name: "",
    email: "",
    feesAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitVals({ ...initVals, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Delete payment details from paymentDetails
      const responses = await axios.get(
        `${paymentDetails}?email=${initVals.email}`
      );
      setPendingCount(responses.data.length)
      const userToDelete = responses.data[0]; // Assuming email is unique
      const regiNum = userToDelete.regNumber;
      const amount = userToDelete.feesAmount;
      const name = userToDelete.name

      if (initVals.feesAmount == amount) {
        if(initVals.name === name ){
          const deleteResponse = await axios.delete(
            `${paymentDetails}/${userToDelete.id}`
          );
          setPendingCount(pendingCount - 1);
          setPaidCount(paidCount + 1);
          // Post data to paidList to mark as paid
          const response = await axios.post(paidList, {
            ...initVals,
            isFeesPending: "NO",
            regNumber: regiNum,
          });
  
          // Optionally reset the form values after successful submission
          setInitVals({
            regNumber: "",
            name: "",
            email: "",
            feesAmount:""
          });
  
          // Show a success message to the user
          alert("Payment Successful and Details Removed!");
        }
        else alert("Name does not exist with the mail ID")
        
      }
      else {
        alert("Please Enter Correct Amount")
        alert("Fees Amount for This User is - "+ amount)
      } 
    } catch (error) {
      // Handle errors
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else {
        console.error("Error during request:", error.message);
      }

      // Show an error message to the user
      alert("Error during payment. Please try again later.");
    }
  };

  return (
    <>
      <div>
        <div>Fees Pay form:</div>
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
              <label>Email</label>
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
              <label>Amount</label>
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
            <button className="mt-3 form-control btn btn-success" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PayingFees;
