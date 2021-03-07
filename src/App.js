import React, {useState} from 'react';
import './App.css';
import firebase from './firebase';
import Login from './Login';
import { useStateValue } from "./StateProvider";

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  const [{ user }, dispatch] = useStateValue();
  
  //a23pRPovGohcXN6u9Vd1Pb2jll_Rwaki48NzTCkUO6s
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=a23pRPovGohcXN6u9Vd1Pb2jll_Rwaki48NzTCkUO6s&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results)
    })
  }
  
     return (
    <div className="App">
      {!user ? (
        <Login />
        ) : (
        
      
     <>
     <div className="mydiv">
        <span>Search:</span>
        <input 
          style={{width:'60%'}}
          type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>fetchImages()}>send</button>
      </div>
      <div className="gallery">
        {
        results.map((item)=>{
          return <img className = "item" key = {item.id} src={item.urls.regular} />
        })
      }
      </div>
      </>
      )}
      
    </div>
  );
}

export default App;
