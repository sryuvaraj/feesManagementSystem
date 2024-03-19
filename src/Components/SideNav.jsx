import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div>
        <ol className="">
          <li
            className=""
            style={{ listStyle: "none", padding: "20px", fontWeight: 700 }}
          >
            <Link style={{ textDecoration: "none", color: "maroon" }} to="/">
              Dashboard
            </Link>
          </li>
          <li
            className=""
            style={{ listStyle: "none", padding: "20px", fontWeight: 700 }}
          >
            <Link
              style={{ textDecoration: "none", color: "maroon" }}
              to="/students"
            >
              Sudents
            </Link>
          </li>
          <li
            className=""
            style={{ listStyle: "none", padding: "20px", fontWeight: 700 }}
          >
            <Link
              style={{ textDecoration: "none", color: "maroon" }}
              to="/fullPaidList"
            >
              Full Paid List
            </Link>
          </li>
          <li
            className=""
            style={{ listStyle: "none", padding: "20px", fontWeight: 700 }}
          >
            <Link
              style={{ textDecoration: "none", color: "maroon" }}
              to="/pendingList"
            >
              Pending List
            </Link>
          </li>
          <li
            className=""
            style={{ listStyle: "none", padding: "20px", fontWeight: 700 }}
          >
            <Link
              style={{ textDecoration: "none", color: "maroon" }}
              to="/registerStudent"
            >
              Register Student
            </Link>
          </li>
          <li
            className=""
            style={{ listStyle: "none", padding: "20px", fontWeight: 700 }}
          >
            <Link
              style={{ textDecoration: "none", color: "maroon" }}
              to="/payingFees"
            >
              Paying fees
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default SideNav;
