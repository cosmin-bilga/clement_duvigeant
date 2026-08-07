import "./chauffage.css";

function Chauffage() {
  return (
    <div className="chauffage">
      <h2>Chauffage</h2>
      <div className="content">
        <div className="left">
          <div className="text" data-aos="flip-up" data-aos-duration="2000">
            <h3>Présentation de notre service d’installation de chauffage</h3>
            <p>
              Nous mettons notre expertise à votre service pour vous offrir des
              installations de chauffage performantes et adaptées à vos besoins,
              que ce soit pour le gaz, le fioul, le bois ou les pompes à
              chaleur.
            </p>
            <strong>Nos Services</strong>
            <ul>
              <li>
                Installation de Chauffage au Gaz, Fioul et Bois : Nous prenons
                en charge l’installation complète de votre système de chauffage,
                de l’étude préalable à la mise en service.
              </li>
              <li>
                Installation de Pompes à Chaleur : Nous installons des pompes à
                chaleur performantes et écologiques, adaptées à votre logement
                et à vos besoins énergétiques.
              </li>
              <li>
                Entretien et Réparation : Nous proposons des contrats
                d’entretien pour prolonger la durée de vie de votre équipement
                et des interventions rapides en cas de panne.
              </li>
              <li>
                Conseils Personnalisés : Nos experts sont à votre disposition
                pour vous conseiller et vous aider à choisir la solution la plus
                adaptée à vos besoins.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/worker.png"
              className="worker"
              alt="homme de chantier"
            ></img>
          </div>
        </div>
        <div className="images">
          <div data-aos="fade-left" data-aos-duration="2000">
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage1.jpg"
              className="img1"
              alt="couple devant une cheminée"
            ></img>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage2.jpg"
              className="img2"
              alt="thermostat de radiateur"
            ></img>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage3.jpg"
              className="img3"
              alt="thermostat electrique"
            ></img>
          </div>
        </div>
      </div>
      <div className="logo">
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

export default Chauffage;
