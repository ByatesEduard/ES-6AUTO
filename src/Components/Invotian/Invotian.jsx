import React, { useRef } from 'react';
import './Invotian.css';

import one from '../../assets/nextev_nio_es8_electric_suv-HD.jpg';
import two from '../../assets/2017_nanoflowcell_quant_48volt_concept-HD.jpg';
import three from '../../assets/2018_aiways_rg_nathalie_3-HD.jpg';
import four from '../../assets/nio_es6_razer_edition_2019-HD.jpg';

import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

import soundOne from '../../assets/one.mp3';
import soundTwo from '../../assets/two.mp3';
import soundThree from '../../assets/three.mp3';
import soundFour from '../../assets/four.mp3';

const cars = [
  {
    image: one,
    text: "NIO ES8 — електричний SUV із витонченим дизайном та високими технологіями.",
    sound: soundOne,
  },
  {
    image: two,
    text: "NanoFlowcell Quant 48Volt — концепт із революційним джерелом енергії.",
    sound: soundTwo,
  },
  {
    image: three,
    text: "NIO EP9 — електричний суперкар із рекордною швидкістю на треку Nürburgring.",
    sound: soundThree,
  },
  {
    image: four,
    text: "Aznom Serpas — унікальний спорткар, який поєднує італійський стиль та потужність.",
    sound: soundFour,
  }
];

export const Invotian = ({ setPlayStatus, playStatus }) => {
  const audioRefs = useRef(cars.map(car => new Audio(car.sound)));

  const handlePlay = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const currentAudio = audioRefs.current[index];

    if (currentAudio.paused) {
      currentAudio.play();
      setPlayStatus(true);
    } else {
      currentAudio.pause();
      setPlayStatus(false);
    }
  };

  return (
    <section className="invotian-wrapper">
      {cars.map((car, index) => (
        <div
          key={index}
          className="invotian-slide"
           style={{ backgroundImage: `url(${car.image})` }}
        >
          <div className="invotian-text">
            <p>{car.text}</p>
            <div className="invotian-hero-play" onClick={() => handlePlay(index)}>
              <img src={playStatus ? pause_icon : play_icon} alt="play-pause" />
              <p>Listen the sound</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
