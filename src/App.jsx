import { useState } from 'react';
import './App.css';
import List from './Components/Lists';
import './style/list.css';
import './style/form.css';
import './style/totalSummary.css';

function App() {
  const [list, setList] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [color, setColor] = useState('#000000');

  const handleChangeUser = (event) => {
    setNewUser(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const addUser = () => {
    const person = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      userName: newUser,
      userColor: color,
    }
    const newList = [...list, person];
    setList(newList);
  };

  const deleteUser = (id) => {
    setList(list.filter((user) => user.id !== id));
  }

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='total-summary'>
            <div>
              <div>IŠ VISO:</div>
              <div>ESAMI:</div>
              <div>PAŠALINTI:</div>
            </div>
          </div>

          <form onSubmit={submitHandler} className='form'>
            <input type="text" value={newUser} onChange={handleChangeUser} placeholder='Enter Your Name' />
            <input type="color" value={color} onChange={handleChangeColor} />

            <button onClick={addUser} type='submit'>Add</button>
          </form>

          <div className='list'>
            <ul>
              {list.map((user) => {
                return (
                  <List
                    userName={user.userName}
                    id={user.id}
                    deleteUser={deleteUser}
                    color={user.userColor}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;
