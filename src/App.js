import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Express/Form";
import LIst from "./component/Express/LIst";
import Alert from "./component/Express/Alert";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

// const initialExpenses = [
//   { id: uuidv4(), charge: "rent", amount: 1600 },
//   { id: uuidv4(), charge: "car payment", amount: 1400 },
//   { id: uuidv4(), charge: "credit", amount: 2600 },
// ];
// console.log(initialExpenses);

const initialExpenses= localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) :[];



function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);
// useEffects =
useEffect(()=>{
  localStorage.setItem("expenses",JSON.stringify(expenses))  
},[expenses])

  // functions
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpense = expenses.map((item) => {
          return item.id == editId ? {...item, charge, amount } : item ;
        });
        console.log(tempExpense);
        setExpenses(tempExpense);
        setEdit(false);
        handleAlert({ type: "success", text: "Item Edited" });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        // const singleExpense= {id:uuidv4(),charge:charge,amount:amount}
        setExpenses((preVal) => {
          return [...preVal, singleExpense];
        });
        handleAlert({ type: "success", text: "item added" });
      }
      setAmount("");
      setCharge("");
    } else {
      handleAlert({
        type: "danger",
        text: "charge can't be empty value and amount value has to be bigger than zero ",
      });
    }
  };

  const handleClearAll = () => {
    setExpenses([]);
    handleAlert({
      type: "danger",
      text: "All item deleted",
    });
  };
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({
      type: "danger",
      text: "Item deleted",
    });
  };
  const handleEdit = (id) => {
    setEdit(true);
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEditId(id)
  };

  return (
    <>
  
    <div className="container">
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>Budget Calculator</h1>
      <main className="app">
        <Form
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handelSubmit={handleSubmit}
          edit={edit}
        />
        <LIst
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleClearAll={handleClearAll}
        />
      </main>
      <h1>
        Total spending :
        <span className="total">
        {" "}  ₹ 
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
      </div>
    
    </>
  );
}

export default App;
