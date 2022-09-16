import React from 'react';
import './item.css';
export const Item = (props) => {
    const expenseDate = new Date(2022,6,25);
    const expenseTitle = 'Helth Incurance';
    const expenseAmount = 500;
     
    return (
        <div className='expense-item '>
            {/* The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long */}


            {/* <div>{expenseDate.toISOString()}</div> */}
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                {/* <h2>{expenseTitle }</h2> */}
                <h2>{props.title}</h2>
                {/* <div className = 'expense-item__price' >₹      {expenseAmount}</div> */}

                <div className = 'expense-item__price' >₹      {props.amount}</div>
            </div>
        </div>
    );
}
