import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import db from "./utils/giftdb"
import './App.css';
import ProductList from './pages/ProductList';
import axios from 'axios';
import 'bootstrap/dist/css/boostrap.css';

function App() {

  const [gifts, setGifts] = useState(db.gifts)

  useEffect(()=>{
    // fetch("https://api.chucknorris.io/jokes/random")
    //   .then(data=>data.json())
    //   .then(cleanData=>{
    //     console.log('-----------')
    //     console.log(cleanData)
    //     console.log('-----------')
    //   })

      axios.get("https://api.chucknorris.io/jokes/random")
      .then(data=>{
        console.log(data)
        console.log(data.data.value)
      })
  },[])
$

  return (
        <div>
          <ProductList productList={gifts}/>
        </div>
  );
}

export default App;
