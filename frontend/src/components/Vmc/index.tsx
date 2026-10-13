import "./vmc.css";
import { useContent } from "../../contexts/ContentContext";
import ChangeText from "../ChangeText";
import ReplaceImage from "../ReplaceImage";

function Vmc({ addMessage }) {
  const { content, photos } = useContent();

  const token = localStorage.getItem("token");

  const isLoggedIn = !!token;

  return (
    <div className="vmc">
      <h2>Ventilation Mécanique Contrôlée</h2>
      <div className="content">
        <div className="left">
          {isLoggedIn ? (
            <ChangeText
              location={"homepage.vmc"}
              placeholder={content?.["homepage.vmc"]}
              addMessage={addMessage}
            />
          ) : (
            <div
              className="text"
              data-aos="fade-right"
              data-aos-duration="2000"
              dangerouslySetInnerHTML={{
                __html:
                  content?.["homepage.vmc"] ||
                  `
            <h3>Nos Services</h3>
            <p>
              Améliorez la qualité de l’air et le confort de votre habitation.
            </p>
            <ul>
              <li>
                Installation de VMC Simple Flux : Nous installons des systèmes
                de VMC simple flux pour assurer un renouvellement constant de
                l’air dans votre maison.
              </li>
              <li>
                Installation de VMC Hygroréglable : Nous proposons des VMC
                hygroréglables qui ajustent le débit d’air en fonction du taux
                d’humidité, pour un confort optimal.
              </li>
              <li>
                Installation de VMC Double Flux : Nous installons des VMC double
                flux qui récupèrent la chaleur de l’air extrait pour chauffer
                l’air entrant, offrant ainsi des économies d’énergie
                significatives.
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
          `,
              }}
            />
          )}
          <div className="logo" data-aos="fade-up" data-aos-duration="2000">
            <a
              href="https://www.qualit-enr.org/qualifications/ventilation-plus/"
              target="_blank"
              rel="noopener noreferrer"
              className="logoVentilationLink image-container"
            >
              <img
                src={
                  photos?.["vmc.logo"]
                    ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["vmc.logo"].name}`
                    : "https://l-araignee.net/ets-clement-duvigeant/assets/ventilation.png"
                }
                alt="logo rge ventilation"
                className="logoVentilation"
              ></img>
              {isLoggedIn && photos?.["vmc.logo"] && (
                <ReplaceImage
                  id={photos["vmc.logo"].id}
                  addMessage={addMessage}
                  menuStyle="menu-hover-top-right"
                />
              )}
              {/*   <img
                src="https://l-araignee.net/ets-clement-duvigeant/assets/ventilation.png"
                alt="logo rge ventilation"
                className="logoVentilation"
              ></img> */}
            </a>
          </div>
        </div>
        <div className="image" data-aos="fade-left" data-aos-duration="2000">
          <div className="sdb image-container">
            <img
              src={
                photos?.["vmc.main"]
                  ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["vmc.main"].name}`
                  : "https://l-araignee.net/ets-clement-duvigeant/assets/photos/sdb.jpg"
              }
              alt="salle de bain"
              className="img"
            ></img>
            {isLoggedIn && photos?.["vmc.main"] && (
              <ReplaceImage
                id={photos["vmc.main"].id}
                addMessage={addMessage}
                menuStyle="menu-hover-top-right"
              />
            )}
            {/*  <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/sdb.jpg"
              alt="salle de bain"
              className="img"
            ></img> */}
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
      </div>
    </div>
  );
}

export default Vmc;
