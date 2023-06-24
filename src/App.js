
import { useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {

  const [friend , setFriend ] = useState([]);

const baseURL = "https://randomuser.me/api/";


  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
    </div>
  );
}

export default App;
