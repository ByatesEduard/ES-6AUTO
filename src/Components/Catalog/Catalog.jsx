import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import "./Catalog.css";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.webp'

import imgbg1 from '../../assets/imgbg1.png'
import imgbg2 from '../../assets/imgbg2.jpg'
import imgbg3 from '../../assets/imgbg3.webp'
import imgbg4 from '../../assets/imgbg4.jpg'

const models = [
  {
    name: "ES-6",
    slug: "grancabrio",
    heroBg: imgbg1,
    carImg: img1,
  },
  {
    name: "ES-SPORT-SE",
    slug: "granturismo",
    heroBg: imgbg2,
    carImg: img2,
  },
  {
    name: "ES-Q",
    slug: "grecale",
    heroBg: imgbg3,
    carImg: img3,
  },
  {
    name: "ES-1 AUTO",
    slug: "mc20",
    heroBg: imgbg4,
    carImg:img4,
  },
];

export default function MaseratiHero() {
  const [index, setIndex] = useState(0);
  const current = models[index];

  const next = () => setIndex((i) => (i + 1) % models.length);
  const selectModel = (i) => setIndex(i);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${current.heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-subtitle">Gamma Maserati</p>
        <h1 className="hero-title">An extraordinary <br /> model range</h1>
        <nav className="hero-nav">
          {models.map((m, i) => (
            <button
              key={m.slug}
              onClick={() => selectModel(i)}
              className={`hero-nav-item ${i === index ? "active" : ""}`}
            >
              {m.name}
            </button>
          ))}
        </nav>
        <div className="car-image-wrapper">
          <AnimatePresence mode="wait">
  <motion.img
    key={current.carImg}
    src={current.carImg}
    alt={current.name}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.6 }}
    className="car-image"
  />
</AnimatePresence>
          <button onClick={next} className="next-btn" aria-label="Next model">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
