import React from 'react'
import "./ExpenseItem.css";
import {MdEdit, MdDelete} from 'react-icons/md'

const ExpenseItem = ({ expnse, handleDelete, handleEdit }) => {
    return (
      <li className='ltem'>
        <div className='info'>
          <span className='expense'>{expnse.charge}</span>
          <span className='amount'>{expnse.amount}</span>
        </div>
        <div>
          <button className='edit-btn'
            onClick={() => 
              handleEdit(expnse.id)
            }
          >
            <MdEdit />
          </button>
          <button className='clear-btn' 
            onClick={() =>
                handleDelete(expnse.id) 
              }
            >
            <MdDelete />
          </button>
        </div>
      </li>
    )
}

export default ExpenseItem
