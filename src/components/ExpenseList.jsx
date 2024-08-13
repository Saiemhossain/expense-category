/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'


export default function ExpenseList({ data,onDelete }) {
  
  return (
    <>
      <div className="overflow-x-auto mx-w-[900px] mx-auto">
       
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl text-primary">
              <th>ID</th>
              <th>Category</th>
              <th>Description</th>
              <th> amount</th>
            </tr>
          </thead>
          <tbody>
            {/* show expense */}
            {data.length === 0 ? (
              <p>no data found</p>
            ) : (
              data.map(expense => (
                <tr key={expense.id}>
                  <th>{expense.id}</th>
                  <td> {expense.category} </td>
                  <td> {expense.description} </td>
                  <td>{expense.amount}</td>
                  <td>
                    <button
                      className="btn btn-primary "
                      onClick={() => onDelete(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td className="text-primary text-2xl">Total</td>
            <td className="text-primary text-2xl">
              {' '}
              ${data.reduce(
                (total, currValue) => total + currValue.amount,
                0
              )}{' '}
            </td>
          </tfoot>
        </table>
      </div>
    </>
  );
}

