import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import TopNav from "./Components/TopNav";
import Dashboad from "./Components/Dashboad";
import StudentsList from "./Components/StudentsList";
import RegisterStudents from "./Components/RegisterStudents";
import FullPaindList from "./Components/FullPaindList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const StudentsAPI = "http://localhost:3001/students";
  const paymentDetails = "http://localhost:3001/studentPayments";
  const paidList = "http://localhost:3001/completedPayments";

  const [students, setStudents] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [paidCount, setPaidCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);


  useEffect(() => {
    loadData()
  }, []);

  const loadData = async () => {
    await axios.get(StudentsAPI)
    .then((response) => {
      setStudents(response.data);
      setStudentsCount(response.data.length)
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });

    const pen = await axios.get(paymentDetails)
    setPendingCount(pen.data.length)

    const paid = await axios.get(paidList)
    setPaidCount(paid.data.length)
  }

  return (
    <div className="App">
      <TopNav />
      <Main
        pendingCount={pendingCount}
        setPendingCount={setPendingCount}
        paidCount={paidCount}
        setPaidCount={setPaidCount}
        studentsCount={studentsCount}
        setStudentsCount={setStudentsCount}
      />
    </div>
  );
}

export default App;
