
function List(props) {

   return (
      <div>
         <li key={props.id} style={{ color: props.color }}>
            {props.userName}
            <div>
               <button className="btn-red" onClick={() => props.deleteUser(props.id)}>X</button>
            </div>
         </li>
      </div>
   )
}

export default List;