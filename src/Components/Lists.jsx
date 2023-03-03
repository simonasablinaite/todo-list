function List(props) {
   return (
      <div>
         <li>{props.userName}
            <div>
               <button className="btn-red" onClick={() => props.deleteUser(props.id)}>X</button>
            </div>
         </li>
      </div>
   )
}

export default List;