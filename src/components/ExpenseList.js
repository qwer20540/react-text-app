import React from 'react'
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, handleDelete, handleEdit, claerItems }) => {
    return (
      <>
        <ul className='list'>
          {expenses.map(expnse => {
            return (
              <ExpenseItem 
                expnse={expnse}
                key={expnse.id}
                handleDelete={handleDelete}
                handleEdit={handleEdit} 
               />
            )
          })}
        </ul>
        {expenses.length > 0 && (
          <button className='btn' onClick={claerItems}>
              목록지우기
              <MdDelete className='btn-icon' />
          </button>
        )}
      </>
    )
}

export default ExpenseList
