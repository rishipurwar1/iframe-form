import React from "react";

const Form = () => {
  return (
    <form>
      <h1>Can you please provide your personal details?</h1>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="form-control">
        <label htmlFor="dob">Date of birth</label>
        <input type="date" id="dob" />
      </div>
      <div className="form-control">
        <label htmlFor="contact-number">Contact Number</label>
        <input
          type="number"
          id="contact-number"
          placeholder="Enter your contact number"
        />
      </div>
      <div className="form-control">
        <label htmlFor="country">Country</label>
        <input type="text" id="country" placeholder="Select country" />
      </div>
      <div className="form-control">
        <label htmlFor="state">State</label>
        <input type="text" id="state" placeholder="Select state" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default Form;
