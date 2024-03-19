import React from "react";

const Dashboad = ({
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
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-center py-3">Total No of Students</h5>
              <h3 className="text-primary text-center">{studentsCount}</h3>
            </div>
            <div className="col-md-4">
              <h5 className="text-center py-3">
                Total No of Fees Pending Students
              </h5>
              <h3 className="text-danger text-center">{pendingCount}</h3>
            </div>
            <div className="col-md-4">
              <h5 className="text-center py-3">Total No of Paid Students</h5>
              <h3 className="text-success text-center">{paidCount}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboad;
