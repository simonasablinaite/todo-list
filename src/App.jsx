import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [newUser, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  const addUser = () => {
    const person = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      userName: newUser,
    }
    const newList = [...list, person];
    setList(newList);
  };

  const deleteUser = (id) => {
    setList(list.filter((user) => user.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='total-summary'>
          <div>IŠ VISO:</div>
          <div>ESAMI:</div>
          <div>PAŠALINTI:</div>
        </div>
        <div className='form'>

          <label htmlFor="name">Enter Your Name</label>
          <input onChange={handleChange} type="text" />

          <button onClick={addUser}>Add</button>

        </div>
        <div className='list'>
          <ul>
            {list.map((user) => {
              return (
                <div>
                  <li>{user.userName}
                    <button onClick={() => deleteUser(user.id)}>X</button>
                  </li>
                </div>

              )
            })}
          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;
