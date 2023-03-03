import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [newUser, setNewUser] = useState("");

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };

  const addUser = () => {
    const newList = [...list, newUser];
    setList(newList);
  };

  const deleteUser = (userName) => {
    const newList = list.filter((user) => {
      return user !== userName;
    });
    setList(newList);
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
                  <li>{user}
                    <button onClick={() => deleteUser(user)}>X</button>
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
