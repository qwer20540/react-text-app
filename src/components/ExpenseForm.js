import React from 'react'
import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ hadleCharge, charge, amount, hadleAmount, handleSubmit, edit }) => {
    return (
      <form onSubmit = {handleSubmit}>
        <div className='form-center'>
          <div className='form-group'>
            <label htmlFor='charge'>제출 비용</label>
            <input 
              type='text' 
              className='form-control' 
              id='charge' 
              name='charge' 
              value={charge}
              placeholder='예) 렌트비'
              onChange={hadleCharge}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>비용</label>
              <input 
                type='number' 
                className='form-control' 
                id='amount' 
                name='amount' 
                placeholder='예) 199'
                value={amount}
                onChange={hadleAmount}
              />
          </div>
        </div>
        <button type='submit' className='btn'>
          {edit ? "수정" : "제출"}
          <MdSend className='btn-icon' />
        </button>
      </form>
    )
}

export default ExpenseForm
