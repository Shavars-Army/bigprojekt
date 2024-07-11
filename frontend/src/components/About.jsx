import React from 'react';
import './About.css';

import background2 from './media/AboutSectionTow.jpg';
import background3 from './media/AboutSectionTree.jpg';
import background4 from './media/AboutSectionFour.png';
import background5 from './media/AboutSectionFive.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="section section-one">
        <h1>Hallo. Ihr Partner ist das Talks Meet!</h1>
        <p>Von Anfang an haben wir es Menschen und Unternehmen ermöglicht, einfach und sicher auf die bestmögliche Weise zu arbeiten – von überall aus. Heutzutage sind Berufs- und Privatleben eng miteinander verflochten. (SITE NAME) ist für Sie da. Bei uns können Sie sich den ganzen Tag über auf das konzentrieren, was wirklich wichtig ist: Ihre Projekte, Ihren Job und sogar die privaten Projekte, die Ihnen am Herzen liegen.</p>
      </div>
      <div className="section section-two">
        <div className="content">
          <img src={background2} alt="background2" className="image-left" />
          <div className="text-right">
            <h1> Es ist wichtig, wie Sie Dinge tun</h1>
            <p>In einer Welt, in der Flexibilität an erster Stelle steht, kann gute Leistung überall erzielt werden. Mit dieser Einstellung erfüllen wir unser Versprechen, Millionen von Menschen Zuverlässigkeit, Konnektivität und Einfachheit zu bieten.</p>
            <ul>
              <li>Menschen, die davon profitieren, überall sicher und produktiv arbeiten zu können.</li>
              <li>Unternehmen, die trotz Widrigkeiten weiterarbeiten können und dadurch in der Lage sind, Kosten zu senken und Nachhaltigkeitsziele schneller zu erreichen.</li>
              <li>Und alle anderen, die dank flexibler Tools Beruf und Privatleben meistern.</li>
            </ul>
            <a href="URL1" className="custom-button">Siehe Pakete</a>
          </div>
        </div>
      </div>
      <div className="section section-three">
        <div className="content">
          <div className="text-left">
            <h1>Die neue Arbeitswelt ist da.</h1>
            <p>Es kommt nicht darauf an, wo oder wann Sie arbeiten. Was zählt, ist, wie Sie Dinge tun.</p>
            <p>Wir erleben derzeit eine Entwicklung in der modernen Arbeitswelt und die Revolution des modernen Arbeitsplatzes. (SITE NAME ) steht im Vordergrund und unterstützt alle Beteiligten bei der Bewältigung dieser Herausforderungen. Dazu gehört Folgendes:</p>
            <ul>
              <li>Optimierte Prozesse für flexibles, hybrides und mobiles Arbeiten</li>
              <li>Bieten Sie nahtlos Support und Unterstützung auf Abruf</li>
              <li>Leistungsstarke Tools für Zusammenarbeit und Sicherheit</li>
            </ul>
            <a href="URL3" className="custom-button">- - Hilfe - -</a>
          </div>
          <img src={background3} alt="background3" className="image-right" />
        </div>
      </div>
      <div className="section section-four">  
        <div className="content">
          <img src={background4} alt="background4" className="image-left" /> 
          <div className="text-right">
            <h1>Neuer Abschnitt Titel</h1>
            <p>Dies ist der neue Abschnitt, den Sie hinzugefügt haben. Hier können Sie Informationen zu einem neuen Thema bereitstellen.</p>
            <a href="URL4" className="custom-button">Neuer Button Text</a>
          </div>
        </div>
      </div>
      <div className="section section-five">
        <h1>Pentru noi, flexibilitatea este, de asemenea, prioritatea noastră principală.</h1>
        <p>Ne bazăm pe așa-numitul „dogfooding”: asta înseamnă că folosim și instrumentele pe care le-am creat singuri. Permitem milioanelor de oameni să aibă un loc de muncă independent de locație. Folosim propriile noastre inovații pentru a ne conecta. Acesta este modul în care lucrăm în mod flexibil, facem viața mai interesantă și dezvoltăm idei bine gândite și influente pentru lumea modernă a muncii.</p>
        <a href="URL5" className="custom-button">Descoperiți locuri de muncă</a>
        <div className="images-container">
          <img src={background5} alt="background5" />
        
        </div>
      </div>
    </div>
  );
};

export default About;



