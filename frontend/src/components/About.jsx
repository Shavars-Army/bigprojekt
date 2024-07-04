import React from 'react';
import './About.css';
import background1 from './media/AboutSectionOne.jpg';
import background2 from './media/AboutSectionTow.jpg';
import background3 from './media/AboutSectionTree.jpg';

const About = () => {
  return (
    <div>
      <div className="section section-one" style={{ backgroundImage: `url(${background1})` }}>
        <h1>Buna ziua. Partenerul tău este GoTo!</h1>
        <p>De la bun început, le-am permis oamenilor și companiilor să lucreze ușor și în siguranță în cel mai bun mod posibil - de oriunde. În zilele noastre, viața profesională și cea personală sunt împletite. La GoTo suntem aici pentru tine. Cu noi, te poți concentra pe ceea ce este cu adevărat important pe tot parcursul zilei: proiectele tale, jobul tău și chiar proiectele private care îți sunt aproape de suflet.</p>
      </div>
      <div className="section section-two">
        <div className="content">
          <img src={background2} alt="background2" className="image-left" />
          <div className="text-right">
            <h1>Nu este vorba despre unde sau când lucrezi. Ceea ce contează este cum faci lucrurile.</h1>
            <p>Întro lume în care flexibilitatea este primordială, performanța bună se poate întâmpla oriunde. Cu această mentalitate, ne îndeplinim promisiunea de a aduce fiabilitate, conectivitate și simplitate pentru milioane de oameni. Așa am devenit una dintre cele mai mari companii SaaS din lume, cu peste 3.500 de angajați la nivel global, venituri anuale de peste 1,3 miliarde USD și milioane de utilizatori.</p>
            <ul>
              <li>Oameni care beneficiază de faptul că pot lucra în siguranță și productiv oriunde.</li>
              <li>Companii care pot continua să lucreze în ciuda adversității și, prin urmare, sunt capabile să reducă costurile și să atingă obiectivele de sustenabilitate mai rapid.</li>
              <li>Și toți ceilalți care stăpânesc munca și viața privată datorită instrumentelor flexibile.</li>
            </ul>
            <button>Vezi toate produsele GoTo</button>
          </div>
        </div>
      </div>
      <div className="section section-three">
        <div className="content">
          <div className="text-left">
            <h1>Noua lume a muncii este aici.</h1>
            <p>În prezent, ne confruntăm cu o dezvoltare în lumea modernă a muncii și revoluția locului de muncă modern. GoTo este în prim-plan și îi sprijină pe toți cei implicați în stăpânirea acestor provocări. Aceasta include următoarele:</p>
            <ul>
              <li>Procese optimizate pentru lucru flexibil, hibrid și mobil</li>
              <li>Oferiți fără probleme asistență și asistență la cerere</li>
              <li>Instrumente puternice de colaborare și produse de securitate cibernetică</li>
            </ul>
          </div>
          <img src={background3} alt="background3" className="image-right" />
        </div>
      </div>
    </div>
  );
};

export default About;