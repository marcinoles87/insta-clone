
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {

  const [friend , setFriend ] = useState([]);

const baseURL = "https://randomuser.me/api/?results=15";

useEffect( () => {
  axios.get(`${baseURL}`).then( (response) => {
    setFriend(response.data.results);
   
  } )

  console.log(friend[0])
  

}, [])

console.log(friend)

  return (
    <div className="App">
      <Navigation></Navigation>
      <Header friend={friend}></Header>
    </div>
  );
}

export default App;
