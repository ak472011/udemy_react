import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

function ExpenseItem(props) {  //passing values as props
  // const expenseDate = new Date(2023,3,16); //normal javascript 
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.57;
  const[title,setTitle] =  useState(props.title);  //must be called inside the function not on nested fucntion or outside the function
  const onclick =  () => {
    setTitle('Updated!');  //calling of SetTitle is done to change the title into a new one
    console.log(title);
  };
    
  return (
    <Card className="expense-item">
      {/* {//!classname in react is same as class in html//} */}
        {/* //invoking ExpenseDate from ExpenseDate.js file */}
      <ExpenseDate date={props.date}></ExpenseDate>  
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onclick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
