import React from "react";
import SideNav from "./SideNav";
import Content from "./Content";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboad from "./Dashboad";
import StudentsList from "./StudentsList";
import FullPaindList from "./FullPaindList";
import RegisterStudents from "./RegisterStudents";
import PayingFees from "./PayingFees";
import PendingList from "./PendingList";

const Main = ({
  pendingCount,
  setPendingCount,
  paidCount,
  setPaidCount,
  studentsCount,
  setStudentsCount,
}) => {
  return (
    <>
      <div>
        <div className="row bg-light p-4">
          <div className="col-md-3 col-xs-12 my-1 container">
            <div className="bg-white p-3 rounded">
              <SideNav />
            </div>
          </div>
          <div className="col-md-9 col-xs-12 my-1 container">
            <div className="bg-white p-3 rounded">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Dashboad
                      pendingCount={pendingCount}
                      setPendingCount={setPendingCount}
                      paidCount={paidCount}
                      setPaidCount={setPaidCount}
                      studentsCount={studentsCount}
                      setStudentsCount={setStudentsCount}
                    />
                  }
                ></Route>
                <Route
                  path="/students"
                  element={
                    <StudentsList
                      pendingCount={pendingCount}
                      setPendingCount={setPendingCount}
                    />
                  }
                ></Route>
                <Route
                  path="/fullPaidList"
                  element={
                    <FullPaindList
                      pendingCount={pendingCount}
                      setPendingCount={setPendingCount}
                      paidCount={paidCount}
                      setPaidCount={setPaidCount}
                    />
                  }
                ></Route>
                <Route
                  path="/pendingList"
                  element={
                    <PendingList
                      pendingCount={pendingCount}
                      setPendingCount={setPendingCount}
                    />
                  }
                ></Route>
                <Route
                  path="/registerStudent"
                  element={
                    <RegisterStudents
                      pendingCount={pendingCount}
                      setPendingCount={setPendingCount}
                      studentsCount={studentsCount}
                      setStudentsCount={setStudentsCount}
                    />
                  }
                ></Route>
                <Route
                  path="/payingFees"
                  element={
                    <PayingFees
                      pendingCount={pendingCount}
                      setPendingCount={setPendingCount}
                      paidCount={paidCount}
                      setPaidCount={setPaidCount}
                    />
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
