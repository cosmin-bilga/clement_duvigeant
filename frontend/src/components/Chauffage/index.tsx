import ChangeText from "../ChangeText";
import ReplaceImage from "../ReplaceImage";
import "./chauffage.css";
import { useContent } from "../../contexts/ContentContext";

function Chauffage({ addMessage }) {
  const { content, photos, slider } = useContent();

  const token = localStorage.getItem("token");

  const isLoggedIn = !!token;

  return (
    <div className="chauffage">
      <h2>Chauffage</h2>
      <div className="content">
        <div className="left">
          {isLoggedIn ? (
            <ChangeText
              location={"homepage.chauffage"}
              placeholder={content?.["homepage.chauffage"]}
            />
          ) : (
            <div
              className="text"
              data-aos="flip-up"
              data-aos-duration="2000"
              dangerouslySetInnerHTML={{
                __html:
                  content?.["homepage.chauffage"] ||
                  `
        <h3>
          Présentation de notre service d’installation de chauffage
        </h3>
        <p>
          Nous mettons notre expertise à votre service pour vous offrir
          des installations de chauffage performantes et adaptées à vos
          besoins, que ce soit pour le gaz, le fioul, le bois ou les
          pompes à chaleur.
        </p>
        <strong>Nos Services</strong>
        <ul>
          <li>
            Installation de Chauffage au Gaz, Fioul et Bois : Nous
            prenons en charge l’installation complète de votre système
            de chauffage, de l’étude préalable à la mise en service.
          </li>
          <li>
            Installation de Pompes à Chaleur : Nous installons des
            pompes à chaleur performantes et écologiques, adaptées à
            votre logement et à vos besoins énergétiques.
          </li>
          <li>
            Entretien et Réparation : Nous proposons des contrats
            d’entretien pour prolonger la durée de vie de votre
            équipement et des interventions rapides en cas de panne.
          </li>
          <li>
            Conseils Personnalisés : Nos experts sont à votre
            disposition pour vous conseiller et vous aider à choisir la
            solution la plus adaptée à vos besoins.
          </li>
        </ul>
      `,
              }}
            />
          )}
          <div>
            <img
              src={
                photos?.["chauffage.main"]
                  ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["chauffage.main"].name}`
                  : "https://l-araignee.net/ets-clement-duvigeant/assets/worker.png"
              }
              className="worker"
              alt="homme de chantier"
            ></img>
            {isLoggedIn && photos?.["chauffage.main"] && (
              <ReplaceImage id={photos["chauffage.main"].id} />
            )}
          </div>
        </div>
        <div className="images">
          <div data-aos="fade-left" data-aos-duration="2000">
            <img
              src={
                photos?.["chauffage.side1"]
                  ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["chauffage.side1"].name}`
                  : "https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage1.jpg"
              }
              className="img1"
              alt="couple devant une cheminée"
            ></img>
            {isLoggedIn && photos?.["chauffage.side1"] && (
              <ReplaceImage id={photos["chauffage.side1"].id} />
            )}
            {/*  <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage1.jpg"
              className="img1"
              alt="couple devant une cheminée"
            ></img> */}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <img
              src={
                photos?.["chauffage.side2"]
                  ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["chauffage.side2"].name}`
                  : "https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage2.jpg"
              }
              className="img2"
              alt="thermostat de radiateur"
            ></img>
            {isLoggedIn && photos?.["chauffage.side2"] && (
              <ReplaceImage id={photos["chauffage.side2"].id} />
            )}
            {/* <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage2.jpg"
              className="img2"
              alt="thermostat de radiateur"
            ></img> */}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            <img
              src={
                photos?.["chauffage.side3"]
                  ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["chauffage.side3"].name}`
                  : "https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage3.jpg"
              }
              className="img3"
              alt="thermostat electrique"
            ></img>
            {isLoggedIn && photos?.["chauffage.side3"] && (
              <ReplaceImage id={photos["chauffage.side3"].id} />
            )}
            {/* <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/chauffage3.jpg"
              className="img3"
              alt="thermostat electrique"
            ></img> */}
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
            src={
              photos?.["chauffage.logo1"]
                ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["chauffage.logo1"].name}`
                : "https://l-araignee.net/ets-clement-duvigeant/assets/qualipac.png"
            }
            alt="logo rge qualipac"
          ></img>
          {isLoggedIn && photos?.["chauffage.logo1"] && (
            <ReplaceImage id={photos["chauffage.logo1"].id} />
          )}
          {/*  <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/qualipac.png"
            alt="logo rge qualipac"
          ></img> */}
        </a>
        <a
          href="https://www.qualit-enr.org/qualifications/qualisol/"
          target="_blank"
          rel="noopener noreferrer"
          className="logosol"
        >
          <img
            src={
              photos?.["chauffage.logo2"]
                ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["chauffage.logo2"].name}`
                : "https://l-araignee.net/ets-clement-duvigeant/assets/qualisol.png"
            }
            alt="logo rge qualisol"
          ></img>
          {isLoggedIn && photos?.["chauffage.logo2"] && (
            <ReplaceImage id={photos["chauffage.logo2"].id} />
          )}
          {/* <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/qualisol.png"
            alt="logo rge qualisol"
          ></img> */}
        </a>
      </div>
    </div>
  );
}

export default Chauffage;
