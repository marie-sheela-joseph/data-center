import { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  useEffect(()=>{
    fetch('https://data-center-sheela.onrender.com/racks')
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
  },[])
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<h1>home</h1>}/>
            <Route path='rack/:id' element={<h1>rack id</h1>}/>
            <Route path='about' element={<h1>about</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </main>    
  );
}

export default App;
