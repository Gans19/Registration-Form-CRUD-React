import React, { useEffect, useRef, useState } from "react";
import Error from "./Error";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  // State Manager
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    dept: "",
    age: "",
    city: "",
    country: "",
    gender: "",
    email: "",
  });

  //Clear the state

  const clearState = () => {
    setInputs({
      name: "",
      dept: "",
      age: "",
      city: "",
      country: "",
      gender: "",
      email: "",
    });
  };

  // Handle the state change

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setFocused(true);
  };

  // useEffect(() => {
  //   if (error) {
  //     inputRef1.current.focus();
  //   }
  //   if (error) {
  //     inputRef2.current.focus();
  //   }
  //   if (error) {
  //     inputRef3.current.focus();
  //   }
  //   if (error) {
  //     inputRef4.current.focus();
  //   }
  //   if (error) {
  //     inputRef5.current.focus();
  //   }
  //   if (error) {
  //     inputRef6.current.focus();
  //   }
  //   if (error) {
  //     inputRef7.current.focus();
  //   }
  // }, [error]);

  // Handle Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);

    const validationErrors = {};
    if (!inputs.name.trim()) {
      validationErrors.name = "Name is required";
      console.log(validationErrors.name);
    }
    if (!inputs.age.trim()) {
      validationErrors.age = "Age is required";
      console.log(validationErrors.age);
    }
    if (!inputs.dept.trim()) {
      validationErrors.dept = "Dept is required";
      console.log(validationErrors.dept);
    }
    if (!inputs.city.trim()) {
      validationErrors.city = "city is required";
      console.log(validationErrors.city);
    }
    if (!inputs.country.trim()) {
      validationErrors.country = "country is required";
      console.log(validationErrors.country);
    }
    if (!inputs.gender.trim()) {
      validationErrors.gender = "gender is required";
      console.log(validationErrors.gender);
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!inputs.email.trim()) {
      validationErrors.email = "email is required";
      console.log(validationErrors.email);
    } else if (!emailRegex.test(inputs.email)) {
      validationErrors.email = "Invalid email";
      console.log(validationErrors.email);
    }
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Success!");
    }

    console.log(JSON.stringify(inputs));

    if (Object.keys(validationErrors).length === 0) {
      if (editClick) {
        const tempTableData = tableData;
        Object.assign(tempTableData[editIndex], inputs);
        setTableData([...tempTableData]);
        setEditClick(false);
        setInputs({
          name: "",
          dept: "",
          age: "",
          city: "",
          country: "",
          gender: "",
          email: "",
        });
      } else {
        setTableData([...tableData, inputs]);
        setInputs({
          name: "",
          dept: "",
          age: "",
          city: "",
          country: "",
          gender: "",
          email: "",
        });
      }
    }
  };

  // Handle events Delete

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };

  // Handle Edit Click

  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({
      name: tempData.name,
      dept: tempData.dept,
      age: tempData.age,
      city: tempData.city,
      country: tempData.country,
      gender: tempData.gender,
      email: tempData.email,
    });
    setEditClick(true);
    setEditIndex(index);
    setError(false)

  };

  // input Focus section

  const handleFocus = (e) => {
    if (inputs.name.trim() === "") {
      setFocused(true);
    }
    if (inputs.dept.trim() === "") {
      setFocused(true);
    }
    if (inputs.age.trim() === "") {
      setFocused(true);
    }
    if (inputs.city.trim() === "") {
      setFocused(true);
    }
    if (inputs.country.trim() === "") {
      setFocused(true);
    }
    if (inputs.gender.trim() === "") {
      setFocused(true);
    }
    if (inputs.email.trim() === "") {
      setFocused(true);
    }
  };


  // useEffect(() => {
  //   // Focus the input element when the component mounts
  //   if (inputRef1.current) {
  //     inputRef1.current.focus();
  //   }
  //   if (inputRef2.current) {
  //     inputRef2.current.focus();
  //   }
  //   if (inputRef3.current) {
  //     inputRef3.current.focus();
  //   }
  //   if (inputRef4.current) {
  //     inputRef4.current.focus();
  //   }
  //   if (inputRef5.current) {
  //     inputRef5.current.focus();
  //   }
  //   if (inputRef6.current) {
  //     inputRef6.current.focus();
  //   }
  //   if (inputRef7.current) {
  //     inputRef7.current.focus();
  //   }
  // }, []);
  // // Rendering Output

  return (
    // Form container

    <div className="form">
      <div className="container d-flex">
        {/* <div className="errors"> */}
        {/* Error Showing Section*/}
        {/* {error.name && <span className="text-danger">{error.name}</span>}{" "}
          {error.dept && <span className="text-danger">{error.dept}</span>}{" "}
          {error.age && <span className="text-danger">{error.age}</span>}{" "}
          {error.city && <span className="text-danger">{error.city}</span>}{" "}
          {error.country && (
            <span className="text-danger">{error.country}</span>
          )}
          {error.gender && <span className="text-danger">{error.gender}</span>}{" "}
          {error.email && <span className="text-danger">{error.email}</span>}{" "}
         </div> 
 */}

        <h1>Registration Form</h1>
        <Error data={{ handleSubmit }} validationErrors={error} />

        {/* Input Section */}

        <div className="inputs">
          <input
            type="text"
            // ref={inputRef1}
            value={inputs.name}
            name="name"
            className="name form-control mt-2"
            placeholder="Name"
            onChange={handleChange}
            onFocus={() => {
              if (inputs.name === " ") {
                setFocused(false);
              }
            }}
            // onFocus={()=>inputs.name==="" && setFocused(true)}
            onBlur={handleFocus}
            focused={focused.toString()}
            autoComplete="off"
            required
          />

          <input
            type="text"
            ref={inputRef2}
            value={inputs.dept}
            name="dept"
            className="dept form-control mt-2"
            placeholder="Department"
            onChange={handleChange}
            autoComplete="off"
          
            // onFocus={() => {
            //   if (inputs.dept === " ") {
            //     setFocused(false);
            //   }
            // }}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />

          <input
            type="text"
            ref={inputRef3}
            value={inputs.age}
            name="age"
            maxLength={2}
            className="age form-control mt-2"
            placeholder="Age"
            onChange={handleChange}
            autoComplete="off"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            // onFocus={() => {
            //   if (inputs.dept === " ") {
            //     setFocused(false);
            //   }
            // }}
            // onFocus={()=>inputs.dept===" " && setFocused(false)}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />

          <input
            type="text"
            ref={inputRef4}
            value={inputs.city}
            name="city"
            className="city form-control mt-2"
            placeholder="City"
            onChange={handleChange}
            autoComplete="off"
            // onFocus={()=>inputs.dept===" " && setFocused(false)}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />

          <input
            type="text"
            ref={inputRef5}
            value={inputs.country}
            name="country"
            className="country form-control mt-2"
            placeholder="Country"
            onChange={handleChange}
            autoComplete="off"
            // onFocus={()=>inputs.dept===" " && setFocused(false)}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />

          <input
            type="text"
            ref={inputRef6}
            value={inputs.gender}
            name="gender"
            className="gender form-control mt-2"
            placeholder="Gender"
            onChange={handleChange}
            autoComplete="off"
            // onFocus={()=>inputs.dept===" " && setFocused(false)}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />

          <input
            type="email"
            // ref={inputRef}
            value={inputs.email}
            name="email"
            className="email form-control mt-2"
            placeholder="email"
            onChange={handleChange}
            autoComplete="off"
            // onFocus={()=>inputs.dept===" " && setFocused(false)}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />
        </div>

        {/* Button Section */}

        <div className="buttons">
          <button onClick={handleSubmit} >
            {editClick ? "update" : "save"}
          </button>
          <button onClick={clearState}>Clear</button>
        </div>

        {/* Table Showing Section */}

        <div className="tables ">
          <table className="w-full text-center table table-striped" >
            {/* Table Headings Section */}

            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Dept</th>
                <th>Age</th>
                <th>City</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Email</th>
              </tr>
            </thead>

            {/* Table Body Section */}

            <tbody>
              {tableData.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.dept}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>

                  <td>
                    {/* Table Butoon Section */}

                    {/* Edit Button */}
                    <button onClick={() => handleEdit(i)} className="btn">
                      Edit
                    </button>
                    {/* Delete Button */}
                    <button onClick={() => handleDelete(i)} className="btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Register;
