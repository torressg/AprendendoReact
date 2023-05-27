import Form from './components/Form';
import Infos from './components/Infos';
import { useState } from 'react'

import './App.css';

function App() {
  const [name, setName] = useState()
  return (
    <div className="App">
      <Form  setName={setName}/>
      <Infos name={name}/>
    </div>
  );
}

export default App;
