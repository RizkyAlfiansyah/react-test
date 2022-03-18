import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import CategoryRatio from './Components/CategoryRatio';
import AvailabilityRatio from './Components/AvailabilityRatio';
import Table from './Components/Table';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState('');
  return (
    <div className="container">
      <div className='title-head'>
        <h1> Carts and Table Visualization </h1>
      </div>
      <div className='main-content'>
        <Form selected={selected} setSelected={setSelected} />
        <CategoryRatio />
        <AvailabilityRatio/>
      </div>
      <div className='bottom-content'>
        <Table />
      </div>
    </div>
  );
}

export default App;
