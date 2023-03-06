
function List(props) {

   return (
      <div>
         <li key={props.id} style={{ color: props.color }}>
            {props.userName}
         </li>
         <div>
            <button className="btn-red" onClick={() => props.deleteUser(props.id)}>X</button>
         </div>
      </div>
   )
}

export default List;