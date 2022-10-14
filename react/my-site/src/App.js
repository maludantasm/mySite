import './App.css';
import { Header } from './components/header/header';
import WhatIDo from './components/whatIDo'

function App() {
    return (
        <div className='App'>
            <div className='header-container'>
                <Header letter='M' name='Maria Marques'/>
            </div>
            <div className='body-container'>
                <WhatIDo/>
            </div>
            <div className='footer-container'>

            </div>
        </div>
  );
}

export default App;