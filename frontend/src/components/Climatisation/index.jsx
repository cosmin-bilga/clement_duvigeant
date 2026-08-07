import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./climatisation.css";

function Climatisation() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="climatisation">
      <h2>Climatisation</h2>
      <div className="contentDesktop">
        <div className="mobile" data-aos="fade-right" data-aos-duration="2000">
          <div className="photoClim">
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/clim.jpg"
              alt="climatisation"
            ></img>
          </div>
          <a
            tabIndex={-1}
            href="https://www.qualit-enr.org/qualifications/ventilation-plus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/ventilation.png"
              alt="logo rge ventilation"
              className="logoVentilationMini"
            ></img>
          </a>
        </div>

        <div className="column">
          <div className="text" data-aos="fade-left" data-aos-duration="2000">
            <h3>
              Présentation de notre service d’installation de climatisations
            </h3>
            <p>
              Bienvenue chez ets Clément Duvigeant, votre expert en solutions de
              climatisation à Esscouens. Forts de notre expérience et de notre
              savoir-faire, nous nous engageons à vous offrir des installations
              de climatisation de haute qualité, adaptées à vos besoins
              spécifiques.
            </p>
            <strong>Pourquoi choisir ets Clément Duvigeant ?</strong>
            <ul>
              <li>
                Expertise et Professionnalisme : Nos techniciens qualifiés
                possèdent une vaste expérience dans l’installation de systèmes
                de climatisation. Nous assurons un service rapide, efficace et
                respectueux des normes de sécurité.
              </li>
              <li>
                Solutions Personnalisées : Chaque espace est unique. C’est
                pourquoi nous proposons des solutions sur mesure, adaptées à vos
                exigences et à votre budget. Que ce soit pour une maison, un
                bureau ou un commerce, nous avons la solution idéale pour vous.
              </li>
              <li>
                Produits de Qualité : Nous travaillons avec les meilleures
                marques du marché pour garantir des performances optimales et
                une durabilité accrue. Nos systèmes de climatisation sont à la
                pointe de la technologie, offrant confort et économies
                d’énergie.
              </li>
              <li>
                Service Après-Vente : Votre satisfaction est notre priorité.
                Nous offrons un service après-vente réactif et des contrats
                d’entretien pour assurer le bon fonctionnement de votre
                climatisation tout au long de l’année. Nos Services
              </li>
              <li>
                Installation de Climatisations : Nous prenons en charge
                l’installation complète de votre système de climatisation, de
                l’étude préalable à la mise en service.
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
            <strong className="center">Contactez-nous dès aujourd’hui !</strong>
          </div>
          <div className="logoMax">
            <a
              href="https://www.qualit-enr.org/qualifications/qualisol/"
              target="_blank"
              rel="noopener noreferrer"
              className="logoVentilationLink"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="https://l-araignee.net/ets-clement-duvigeant/assets/qualipac.png"
                alt="logo rge ventilation"
                className="logoVentilation"
              ></img>
            </a>
            <a
              href="https://www.socotec.fr//"
              target="_blank"
              rel="noopener noreferrer"
              className="logoVentilationLink"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="https://l-araignee.net/ets-clement-duvigeant/assets/socotec.png"
                alt="logo socotec"
                className="socotec"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="contentMobile">
        <div className="column">
          <div className="text" data-aos="fade-right" data-aos-duration="2000">
            <h3>
              Présentation de notre service d’installation de climatisations
            </h3>
            <p>
              Bienvenue chez ets Clément Duvigeant, votre expert en solutions de
              climatisation à Esscouens. Forts de notre expérience et de notre
              savoir-faire, nous nous engageons à vous offrir des installations
              de climatisation de haute qualité, adaptées à vos besoins
              spécifiques.
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <a
              href="https://www.qualit-enr.org/qualifications/ventilation-plus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://l-araignee.net/ets-clement-duvigeant/assets/ventilation.png"
                alt="logo rge ventilation"
                className="logoVentilationMini"
              ></img>
            </a>
            <a
              href="https://www.socotec.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://l-araignee.net/ets-clement-duvigeant/assets/socotec.png"
                alt="logo socotec"
                className="socotecMini"
              ></img>
            </a>
          </div>

          <a
            href="https://www.qualit-enr.org/qualifications/ventilation-plus/"
            target="_blank"
            rel="noopener noreferrer"
            className="logoVentilationLink"
          >
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/ventilation.png"
              alt="logo rge ventilation"
              className="logoVentilation"
            ></img>
          </a>
        </div>
        <div className="mobile">
          <div
            className="photoClim"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/clim.jpg"
              alt="climatisation"
            ></img>
          </div>
        </div>
      </div>
      <div
        className="text newBlocMobile"
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        <strong>Pourquoi choisir ets Clément Duvigeant ?</strong>
        <ul>
          <li>
            Expertise et Professionnalisme : Nos techniciens qualifiés possèdent
            une vaste expérience dans l’installation de systèmes de
            climatisation. Nous assurons un service rapide, efficace et
            respectueux des normes de sécurité.
          </li>
          <li>
            Solutions Personnalisées : Chaque espace est unique. C’est pourquoi
            nous proposons des solutions sur mesure, adaptées à vos exigences et
            à votre budget. Que ce soit pour une maison, un bureau ou un
            commerce, nous avons la solution idéale pour vous.
          </li>
          <li>
            Produits de Qualité : Nous travaillons avec les meilleures marques
            du marché pour garantir des performances optimales et une durabilité
            accrue. Nos systèmes de climatisation sont à la pointe de la
            technologie, offrant confort et économies d’énergie.
          </li>
          <li>
            Service Après-Vente : Votre satisfaction est notre priorité. Nous
            offrons un service après-vente réactif et des contrats d’entretien
            pour assurer le bon fonctionnement de votre climatisation tout au
            long de l’année. Nos Services
          </li>
          <li>
            Installation de Climatisations : Nous prenons en charge
            l’installation complète de votre système de climatisation, de
            l’étude préalable à la mise en service.
          </li>
          <li>
            Entretien et Réparation : Nous proposons des contrats d’entretien
            pour prolonger la durée de vie de votre équipement et des
            interventions rapides en cas de panne.
          </li>
          <li>
            Conseils Personnalisés : Nos experts sont à votre disposition pour
            vous conseiller et vous aider à choisir la solution la plus adaptée
            à vos besoins.
          </li>
        </ul>
        <strong className="center">Contactez-nous dès aujourd’hui !</strong>
      </div>
    </div>
  );
}

export default Climatisation;
