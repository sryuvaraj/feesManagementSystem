import React, { useEffect, useState } from "react";
import Axios from "axios";

const StudentsList = ({ pendingCount, setPendingCount }) => {
  const StudentsAPI = "http://localhost:3001/students";

  const [students, setStudents] = useState([]);
  useEffect(() => {
    Axios.get(StudentsAPI)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleCLick = () => {
    console.log(students);
  };
  return (
    <>
      <div>
        <div>
          <p onClick={handleCLick}>Register Number</p>
          <table>
            <thead>
              <tr>
                <th className="p-2">Register Number</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Fees</th>
                <th className="p-2">Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td className="p-2">{student.regNumber}</td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.email}</td>
                  <td className="p-2">{student.feesAmount}</td>
                  <td className="p-2">{student.dateOfJoining}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default StudentsList;
