import React from 'react'
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Detail from "./pages/Detail.jsx";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
      <button onClick={()=>toast.success('Working!')} className="btn btn-primary">Click me</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/note/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App