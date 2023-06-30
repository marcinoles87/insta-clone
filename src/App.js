
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';




function App() {

  const [friend , setFriend ] = useState([]);
  const [imagesProfil , setImageProfil ] = useState([]);

const baseURL = "https://randomuser.me/api/?results=15";

useEffect( () => {
  axios.get(`${baseURL}`).then( (response) => {
    setFriend(response.data.results);
   
  } )
  
}, [])


useEffect( () => {
  fetch("https://picsum.photos/200/300").then( (response) => {
    setImageProfil(response.url);
   console.log(response)
  } )
  
}, [])

console.log(imagesProfil)

  return (
    <div className="App">
      <Navigation></Navigation>
      <Header friend={friend} imagesprofil={imagesProfil}></Header>
    
     
    </div>
  );
}

export default App;
