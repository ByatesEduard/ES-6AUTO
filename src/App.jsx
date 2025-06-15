import React, { useEffect, useState } from 'react'
import Hero from './Components/Hero/Hero';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section'
import { Invotian } from './Components/Invotian/Invotian';
import { Interior } from './Components/Interior/Interior';
import Catalog from './Components/Catalog/Catalog';

const App = () => {
  let heroData = [
    {text1: "Dive into", text2:"what you love"},
    {text1: "Indulge", text2:"your passions"},
    {text1: "Give in to", text2:"your passions"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  
  useEffect(() => {
    setInterval(() => {
     setHeroCount((count) => {return count === 2?0:count+1})
    }, 3000)
  }, [])

  return (
    <div>
      <Background playStatus = {playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
       setPlayStatus={setPlayStatus}
       heroData={heroData[heroCount]}
       heroCount={heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}
      />
      <Section />
      <Interior/>
      <Invotian
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      />
      <Catalog />
    </div>
  )
}

export default App