import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Submits from './Submits';
function Form() {
  const [user, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState(0);
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([{ name: user, dept: department, rate: rating, id: uuidv1()},
        ...data]);
        setUser('');
        setDepartment('');
        setRating(0);
  };
  return (
    <React.Fragment>
      <div className="feedback__ctn">
        <h1>Feedback Form</h1>
        <form action="" onSubmit={submitHandler}>
          <div className="input__container">
            <label htmlFor="">Name:- </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            required/>
          </div>
          <div className="input__container">
            <label htmlFor="">Department:-</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            required/>
          </div>
          <div className="input__container">
            <label htmlFor="">Rating:-</label>
            <input
              type="number"
              value={rating}
              max={10}
              min={0}
              step={0.5}
              onChange={(e) => setRating(e.target.value)}
            required/>
          </div>
          <input type="submit" className="btn_ctn" />
        </form>
      </div>
      <Submits submitData={data}/>
    </React.Fragment>
  );
}

export default Form;