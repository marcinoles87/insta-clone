
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MyProfil from '../src/components/pages/Myprofil'




function App() {

  const [friend , setFriend ] = useState([]);
  const [imagesProfil , setImageProfil ] = useState([]);
  const [searchFriend , setSearch] = useState('')

const baseURL = "https://randomuser.me/api/?results=15";

useEffect( () => {
  axios.get(`${baseURL}`).then( (response) => {
    setFriend(response.data.results);
   
  } )
  
}, [])


useEffect( () => {
  fetch("https://picsum.photos/200/300").then( (response) => {
    setImageProfil(response.url);

  } )
  
}, [])



  return (
    <div className="App">
      <Navigation 
            friend={friend.filter( fr => fr.name.first.includes(searchFriend))} 
            // friend={friend}
            setFriend={setFriend} 
            setSearch={setSearch}>

      </Navigation>

      <Header    friend={friend.filter( fr => fr.name.first.includes(searchFriend))} imagesprofil={imagesProfil}></Header>
      <MyProfil friend={friend} images={imagesProfil}></MyProfil>
     
    </div>
  );
}

export default App;
