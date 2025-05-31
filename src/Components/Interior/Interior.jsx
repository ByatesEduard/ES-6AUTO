import React, { useEffect, useRef, useState } from 'react';
import './Interior.css';
import NioInter from '../../assets/Captain-Electro-NIO-ET9-3+(1).jpg';

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
    <section className="interier-wrapper" ref={ref}>
      <h2 className="interier-title-top">NIO ES-6</h2>

      <div className="interier-image-container">
        <img className="interier-image" src={NioInter} alt="interior" />
        <div className={`interier-overlay ${visible ? 'visible' : ''}`}>
          ВИНЯТКОВИЙ стиль ЩОДНЯ
        </div>
      </div>

      <div className={`interier-description ${visible ? 'visible' : ''}`}>
        Космополітичний і сучасний. Італійський і позачасовий. З цього творчого процесу виходить абсолютно новий Grecale.
        В його скульптурних лініях поєднуються основні знакові елементи дизайну зі сміливим, футуристичним зовнішнім виглядом.
        Чистота форм, позбавлена химерності. Виняткове ніколи не слідує трендам.
      </div>
    </section>
  );
};
