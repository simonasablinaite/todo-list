import React from 'react'

function Form({ handleSubmit, newUser, handleChangeUser, color, handleChangeColor, addUser }) {
   return (
      <div>
         <form onSubmit={handleSubmit} className='form' id='form'>
            {/* <label htmlFor="text">Enter your name</label> */}
            <input type="text" value={newUser} onChange={handleChangeUser} placeholder='Enter Your Name' />
            {/* <label htmlFor="color">Select color</label> */}
            <input type="color" value={color} onChange={handleChangeColor} />
            <button onClick={addUser} type='submit'>Add</button>
         </form>
      </div>
   )
}

export default Form;
