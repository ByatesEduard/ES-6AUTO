import React, { useEffect, useState } from 'react'
import Hero from './Components/Hero/Hero';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section'
import { Invotian } from './Components/Invotian/Invotian';
import { Interior } from './Components/Interior/Interior';
import Catalog from './Components/Catalog/Catalog';
import Loading from './Components/Loading/Loading';

const App = () => {
  let heroData = [
    {text1: "Dive into", text2:"what you love"},
    {text1: "Indulge", text2:"your passions"},
    {text1: "Give in to", text2:"your passions"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(count => count === 2 ? 0 : count + 1);
    }, 3000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Section />
      <Catalog />
      {/* <Interior/> */}
      <Invotian
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  )
}

export default App;
