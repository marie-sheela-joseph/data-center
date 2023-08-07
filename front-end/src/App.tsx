import { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { getRackItems } from 'store/slices/racksSlice';
import { useAppDispatch } from "store/hooks"
import Home from 'pages/home';
import About from 'pages/about';
import RackItem from 'pages/rackItem';

function App() {
  const dispatch=useAppDispatch()
  useEffect(()=>{
    dispatch(getRackItems())    
  },[dispatch])
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='rack/:id' element={<RackItem/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </main>    
  );
}

export default App;
