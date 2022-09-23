import React from 'react'

const Item = ({expenses,handleEdit,handleDelete}) => {
    const {id,charge,amount} =expenses;
  return (
    <li className='item'>
        <div className="info">
            <span className="expenses">{charge}</span>
        </div>
        <div className="info">
            <span className="amount">₹{amount}</span>
            </div>
        <div className='btn-center'>
        <button className="edit-btn" aria-label='Edit button' onClick={()=>{handleEdit(id)}}>
        <i class="fa-solid fa-pen-to-square icon-edit"></i>
        </button>
        <button className="edit-btn" aria-label='Delete button' onClick={()=>{handleDelete(id)}}>
        <i class="fa-sharp fa-solid fa-trash icon-delete"></i>
        </button>
        </div>
    </li>
  )
}

export default Item
