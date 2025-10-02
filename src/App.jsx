import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Hero from './Components/Hero/Hero';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import Catalog from './Components/Catalog/Catalog';
import Loading from './Components/Loading/Loading';

const App = () => {
  const heroData = [
    { text1: "Dive into", text2:"what you love" },
    { text1: "Indulge", text2:"your passions" },
    { text1: "Give in to", text2:"your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Слайдер героїв
    const interval = setInterval(() => {
      setHeroCount(count => count === heroData.length - 1 ? 0 : count + 1);
    }, 3000);

    // Лоадер
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} setPlayStatus={setPlayStatus} />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero 
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
              <Section />
            </>
          } 
        />

        <Route path="/catalog" element={<Catalog />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
