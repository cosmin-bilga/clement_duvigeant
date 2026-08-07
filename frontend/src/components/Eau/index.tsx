import "./eau.css";

function Eau() {
  return (
    <div className="eau">
      <h2>Eau chaude</h2>
      <div className="text" data-aos="fade-up" data-aos-duration="2000">
        <h3>Nos Services</h3>
        <p>
          Nos systèmes de chauffage de l’eau sont à la pointe de la technologie,
          offrant confort et économies d’énergie.
        </p>
        <ul>
          <li>
            Installation de Chauffe-Eau Solaires : Nous installons des systèmes
            de chauffe-eau solaires qui utilisent l’énergie renouvelable du
            soleil pour chauffer votre eau, réduisant ainsi vos factures
            d’énergie et votre empreinte carbone.
          </li>
          <li>
            Installation de Chauffe-Eau Électriques : Nous proposons des
            chauffe-eau électriques modernes et efficaces, adaptés à vos besoins
            en eau chaude.
          </li>
          <li>
            Installation de Chauffe-Eau à Gaz ou Fioul : Nous installons des
            systèmes de chauffe-eau à gaz ou fioul pour une solution de
            chauffage de l’eau fiable et performante.
          </li>
        </ul>
      </div>
      <div className="images">
        <div className="img1" data-aos="fade-right" data-aos-duration="2000">
          <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/slider/2.png"
            alt="ballon d'eau chaude"
          ></img>
        </div>
        <div
          className="img2"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/bain.jpg"
            alt="baignoire"
          ></img>
        </div>
        <div
          className="img3"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/slider/7.png"
            alt="panneau solaire"
          ></img>
        </div>
      </div>
      <div className="logo" data-aos="fade-left" data-aos-duration="2000">
        <a
          href="https://www.qualit-enr.org/qualifications/qualipac/"
          target="_blank"
          rel="noopener noreferrer"
          className="logopac"
        >
          <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/qualipac.png"
            alt="logo rge qualipac"
          ></img>
        </a>
        <a
          href="https://www.qualit-enr.org/qualifications/qualisol/"
          target="_blank"
          rel="noopener noreferrer"
          className="logosol"
        >
          <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/qualisol.png"
            alt="logo rge qualisol"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Eau;
