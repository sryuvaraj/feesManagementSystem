import axios from "axios";
import React, { useEffect, useState } from "react";

const FullPaindList = ({
  pendingCount,
  setPendingCount,
  paidCount,
  setPaidCount,
}) => {
  const paidList = "http://localhost:3001/completedPayments";

  const [paidStudents, setPaidStudents] = useState([]);
  useEffect(() => {
    axios
      .get(paidList)
      .then((response) => {
        setPaidStudents(response.data);
        console.log(response.data);
        setPaidCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  return (
    <>
      <div>
        <div>
          <h3 className="text-success">
            Total Paid Students Count : {paidCount}
          </h3>
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
              {paidStudents.map((student, index) => (
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

export default FullPaindList;
