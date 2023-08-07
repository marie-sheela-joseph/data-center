import { useEffect } from 'react';
import './App.css';
import logo from './assets/images/logo.png'
function App() {
  useEffect(()=>{
    fetch('https://data-center-sheela.onrender.com/racks')
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
  },[])
  return (
    <div className="App">
      <div>
        <img src={logo} alt='data center'/>
      </div>
      <h1>data center</h1>     

    </div>
  );
}

export default App;
