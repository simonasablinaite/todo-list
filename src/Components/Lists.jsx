
import React from 'react'

function Lists({ userName, id, deleteUser, color }) {
   return (
      <div>
         <li key={id} style={{ color: color }}>
            {userName}
         </li>
         <div>
            <button className="btn-red" onClick={() => deleteUser(id)}>X</button>
         </div>
      </div>
   )
}

export default Lists;
