import React, { useState } from "react";
import "./error.css";

const Error = (props) => {
//   const [errorMsg, setErrorMsg] = useState(true);
  const errors = props.validationErrors;
  console.log(errors);

  const obj = Object.values(errors);
  console.log(obj.length);

//   if (!obj.length > 0) {
//     setErrorMsg(false);
//   }

  return (
    <div>
      {/* {errorMsg && ( */}
        <div className="errors ">
          {/* Error Showing Section */}
          {errors.name && (
            <span className="text-danger">{errors.name}</span>
          )}{" "}
          {errors.dept && <span className="text-danger">{errors.dept}</span>}{" "}
          {errors.age && <span className="text-danger">{errors.age}</span>}{" "}
          {errors.city && <span className="text-danger">{errors.city}</span>}{" "}
          {errors.country && (
            <span className="text-danger">{errors.country}</span>
          )}
          {errors.gender && (
            <span className="text-danger">{errors.gender}</span>
          )}{" "}
          {errors.email && <span className="text-danger">{errors.email}</span>}{" "}
        </div>
      {/* )} */}
    </div>
  );
};

export default Error;
