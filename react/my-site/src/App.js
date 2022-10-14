import './App.css';
import { Table } from './components/table/table';
import tbl from './components/table/table.json'

function App() {
    return (
        <div className='App'>
            <Table elements={tbl}/>
        </div>
  );
}

export default App;