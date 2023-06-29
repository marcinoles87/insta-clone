
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';


function App() {

  const [friend , setFriend ] = useState([]);
  const [imagesProfil , setImageProfil ] = useState();

const baseURL = "https://randomuser.me/api/?results=15";

const secondURL = "https://picsum.photos/200/300"

useEffect( () => {
  axios.get(`${baseURL}`).then( (response) => {
    setFriend(response.data.results);
   
  } )

  console.log(friend[0])
  

}, [])


useEffect( () => {
  axios.get(`${secondURL}`).then( (response) => {
    setImageProfil(response.data);
   
  } )

  console.log(imagesProfil)
  

}, [])

console.log(imagesProfil)

  return (
    <div className="App">
      <Navigation></Navigation>
      <Header friend={friend}></Header>
      
    </div>
  );
}

export default App;
