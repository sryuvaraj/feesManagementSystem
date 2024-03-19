import axios from "axios";
import React, { useEffect, useState } from "react";

const PendingList = ({ pendingCount, setPendingCount }) => {
  const paymentDetails = "http://localhost:3001/studentPayments";

  const [pendingStudents, setPendingStudents] = useState([]);

  useEffect(() => {
    axios
      .get(paymentDetails)
      .then((response) => {
        setPendingStudents(response.data);
        setPendingCount(response.data.length);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  return (
    <>
      <div>
        <h3 className="text-danger">
          Total No of Stundents Pending Fees : {pendingCount}
        </h3>
        <div>
          <table>
            <thead>
              <tr>
                <th className="p-2">Register Number</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Is Pending</th>
              </tr>
            </thead>
            <tbody>
              {pendingStudents.map((student, index) => (
                <tr key={index}>
                  <td className="p-2">{student.regNumber}</td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.email}</td>
                  <td className="p-2">{student.isFeesPending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PendingList;
