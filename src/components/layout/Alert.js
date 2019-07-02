import React from "react";

const Alert = ({ alert }) => {
  return (
    // If alert is not equal to null then show div
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
