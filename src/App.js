import React  from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/route/Home";


const App=()=>{
  return(
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;
