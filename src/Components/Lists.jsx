function List(props) {
   return (
      <div>
         <li>{props.userName}
            <button onClick={() => props.deleteUser(props.id)}>X</button>
         </li>
      </div>
   )
}

export default List;