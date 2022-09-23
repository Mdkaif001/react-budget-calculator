import React from 'react';
import Item from './Item';


const LIst = ({expenses,handleClearAll,handleEdit,handleDelete}) => {
  return (
    <div className='main_content'>
    <ul className='list'>
        {
            expenses.map((expenses)=>{
                return   <Item key={expenses.id} expenses={expenses}  handleEdit={handleEdit} handleDelete={handleDelete} />
            })
        }
        {
            expenses.length > 0 && <div className="btn-center"> <button className='btn' onClick={handleClearAll}>Clear All <i class="fa-solid fa-trash"></i></button></div>
        }
    </ul>
   
    </div>
  )
}

export default LIst
