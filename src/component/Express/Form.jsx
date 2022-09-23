import React from "react";

const Form = ({ charge, amount, handleCharge, handleAmount, handelSubmit,edit }) => {
  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="form_center">
          <div className="form_group">
            <label htmlFor="charge">Charge</label>
            <input
              type="text"
              className="form_control"
              id="charge"
              name="charge"
              placeholder="e.g. rent"
              onChange={handleCharge}
              value={charge}
            />
          </div>
          <div className="form_group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              className="form_control"
              id="amount"
              name="amount"
              placeholder="e.g. 1000"
              onChange={handleAmount}
             value={amount}
            />
          </div>
        </div>
       <div className="btn-center">
       <button type="submit" className="submit-btn btn" >
          {edit== false ? "Submit" :"Edit"} <i class="fa-solid fa-right-to-bracket"></i>
        </button>
       </div>
      </form>
    </>
  );
};

export default Form;
