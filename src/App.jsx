import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState('');
  const [color, setColor] = useState('#000000');

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const addUser = () => {
    setList([...list, `${user} ${color}`]);
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
          <input onChange={handleChangeUser} type="text" />

          <label htmlFor="color">Choose a Color</label>
          <input onChange={handleChangeColor} type="color" />

          <button onClick={addUser}>Add</button>

        </div>
        <div className='list'>
          <ul>
            {list.map((u) => (
              <li key={u.i} style={{ color: u.color }}>{u}</li>
            ))}
          </ul>


        </div>

      </header>
    </div>
  );
}

export default App;
