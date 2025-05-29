import React, {useEffect, useRef,} from 'react';
import './Section.css';
import NioImage from '../../assets/nio_es6_2019_4k-HD.jpg';
import NioImage2 from '../../assets/nio_es6_2019_4k_2-HD2.jpg';


const Section = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
    };
  }, []);


  return (
    <section className="nio-section">

      <div className="nio-block" ref={ref1}>
        <div className="nio-text">
          <h2>ВНЕШНИЙ ВИД NIO ES6</h2>
          <p>
            NIO ES6 — это воплощение современной элегантности и технологичности в мире электромобилей.
            Широкие плечи и узкая линия пояса формируют выразительный профиль, подчеркивающий силу и характер этого автомобиля.
          </p>
          <p>
            Длинная колесная база в сочетании с короткими свесами создаёт динамичную и гармоничную платформу.
            Этот дизайн не только подчеркивает спортивный дух NIO ES6, но и обеспечивает идеальные пропорции для улучшения аэродинамики.
          </p>
        </div>

          <div className="nio-img-wrapper">
            <img src={NioImage} alt="Особенности NIO ES6" />
          </div>

      </div>

      <div className="nio-block reverse" ref={ref2}>
        <div className="nio-text" >
          <h2>ОСОБЕННОСТИ NIO ES6</h2>
          <p>
            Технические характеристики NIO ES6 впечатляют своей мощностью и дальностью хода.
            Электродвигатель обеспечивает 360 кВт (490 л.с.), что гарантирует уверенное и плавное движение в любых условиях.
          </p>
          <p>
            Запас хода варьируется в зависимости от ёмкости батареи: 75 кВт⋅ч позволяет проехать до 490 км, а 100 кВт⋅ч — до 625 км.
            Этот электромобиль сочетает в себе спортивность, комфорт и новейшие технологии.
          </p>
        </div>
          <div className="nio-img-wrapper">
            <img src={NioImage2} alt="NIO ES6" />
          </div>

      </div>

    </section>
  );
};

export default Section;
