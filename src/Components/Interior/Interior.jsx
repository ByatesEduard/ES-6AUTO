import React, { useEffect, useRef, useState } from 'react';
import './Interior.css';
import NioInter from '../../assets/nio-et9-interior.jpeg';

export const Interior = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="interier-block" ref={ref}>
      <img className="interier-img" src={NioInter} alt="inter" />
      <div className={`interier-text ${visible ? 'visible' : ''}`}>
        <p className="interier-title">Салон</p>
      </div>
    </div>
  );
};
