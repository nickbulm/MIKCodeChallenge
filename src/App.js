import {useState} from 'react';
import './App.css';
import List from './Containers/List.js';
import Search from './Components/Search.js';
import data from './tracks.json';
import {filtered} from "./Functions"

function App() {
  const [value, setValue] = useState("")
  let list = filtered(data, value)
  return (
    <div className="App">
      <div className="Component">
        <Search val={value} setval={(v) => setValue(v)} />
        <List tracks={list} sVal={value} />
      </div>
    </div>
  );
}

export default App;
