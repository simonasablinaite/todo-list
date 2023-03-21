import { useEffect, useState } from 'react';
import './App.css';
import List from './Components/Lists';
import './style/list.css';
import './style/form.css';
import './style/totalSummary.css';

function App() {
  const [list, setList] = useState([]);
  const [newUser, setNewUser] = useState({ user: "" });
  const [color, setColor] = useState('#000000');
  const [allCount, setAllCount] = useState(0);
  const [delCount, setDelCount] = useState(0);

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
    setAllCount((count) => count + 1);
  };

  const deleteUser = (id) => {
    setList(list.filter((user) => user.id !== id));
    setDelCount((count) => count + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewUser("");
    setColor("#000000")
  };

  // LocalStorage:
  useEffect(() => {
    localStorage.setItem('user-name_key', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const data = localStorage.getItem('user-name_key');
    if (data === null) {
      setList({ userName: '', color: '#000000' });
    } else {
      setList(JSON.parse(data))
    }
    setNewUser('');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='total-summary'>
            <div>
              <div>IŠ VISO: {allCount}</div>
              <div>ESAMI: {allCount - delCount}</div>
              <div>PAŠALINTI: {delCount}</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='form' id='form'>
            {/* <label htmlFor="text">Enter your name</label> */}
            <input type="text" value={newUser} onChange={handleChangeUser} placeholder='Enter Your Name' />
            {/* <label htmlFor="color">Select color</label> */}
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
