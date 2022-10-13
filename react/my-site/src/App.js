import './App.css';
import { Table } from './components/table/table';
import tbl from './components/table/table.json'
import WhatIDoElement from './components/whatIDoElements';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Table elements={tbl}/>
      </header>
    </div>
  );
}

export default App;