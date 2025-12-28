import React from 'react'
import { useState } from "react";
import Navbar from '../components/Navbar.jsx'
import RateLimitUI from '../components/RateLimitUI.jsx'

const Home = () => {
  const [isRateLimited, setRateLimit]= useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitUI />}
    </div>
  )
}

export default Home