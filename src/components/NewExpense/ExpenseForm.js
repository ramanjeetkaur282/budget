import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");
  const [switchState, setSwitchState] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onClickHandler = () => {
    setSwitchState(1);
  };
  const onCancelHandler = () => {
    setSwitchState(0);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount(" ");
    setEnteredDate(" ");
    setEnteredTitle(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      {switchState === 1 ? (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredtitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={onCancelHandler}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className=".new-expense-new-expense__actions">
          <button type="button" onClick={onClickHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
