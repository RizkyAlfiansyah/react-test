import './App.css';
import Form from './Components/Form';
import CategoryRatio from './Components/CategoryRatio';
import AvailabilityRatio from './Components/AvailabilityRatio';
import Table from './Components/Table';
import { Offline, Online } from "react-detect-offline";

function App() {
  return (
    <div className="container">
      <div className='title-head'>
        <h1> Carts and Table Visualization </h1>
      </div>
      <div className='main-content'>
        <Form />
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
