import React from "react";
import "./newdash.css";
import Sidebar from "./Sidebar";
import DashNav from "./DashNav";



const NewDashboard = () => {
  return (
    <>
      <div className="main_wrapper">
        <Sidebar />

        <div className="main_content">
          <DashNav />
          <div>
            <h2 className="text-center py-4 mt-4">Welcome to Dashboard </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDashboard;

