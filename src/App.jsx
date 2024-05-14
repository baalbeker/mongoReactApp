import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([]);

const submitHandler = e => {
  e.preventDefault()

  axios.post('http://localhost:8080/users', { username, password })
  .then((data) => {
    console.log(data);
    setUsername('')
    setPassword('')
  })
  .catch((error) => {
    console.error('Error', error);
  })
}

const fetchUsers = () => {
  axios.get('http://localhost:8080/users')
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.error('There was an error fetching the users!', error);
    });
};

const cancel = () => {
    setUsername('')
    setPassword('')
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + mongoDB testing app</h1>

      <div className="card">
        <form onSubmit={submitHandler}>
          <h3>Testing database functionality with mongoDB database</h3>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <button type="cancel" onClick={() => cancel()}>Cancel</button>
            <button type="submit">Submit</button>
          </div>

          <h2>Samuil Yoshkov</h2>

        </form>

        <button onClick={fetchUsers}>Fetch Users</button>
        
        <h3>Users List:</h3>
        <ol>
          {users.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ol>
</div>


    </>
  );
}

export default App;
