import "./eau.css";
import { useContent } from "../../contexts/ContentContext";
import ChangeText from "../ChangeText";
import ReplaceImage from "../ReplaceImage";

function Eau({ addMessage }) {
  const { content, photos } = useContent();

  const token = localStorage.getItem("token");

  const isLoggedIn = !!token;

  return (
    <div className="eau">
      <h2>Eau chaude</h2>
      {isLoggedIn ? (
        <ChangeText
          location={"homepage.eau"}
          placeholder={content?.["homepage.eau"]}
          addMessage={addMessage}
        />
      ) : (
        <div
          className="text"
          data-aos="fade-left"
          data-aos-duration="2000"
          dangerouslySetInnerHTML={{
            __html:
              content?.["homepage.eau"] ||
              `
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
      `,
          }}
        />
      )}
      <div className="images">
        <div className="img1" data-aos="fade-right" data-aos-duration="2000">
          <img
            src={
              photos?.["eau.main1"]
                ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["eau.main1"].name}`
                : "https://l-araignee.net/ets-clement-duvigeant/assets/slider/2.png"
            }
            alt="ballon d'eau chaude"
          ></img>

          {/* <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/slider/2.png"
            alt="ballon d'eau chaude"
          ></img> */}
        </div>
        {isLoggedIn && photos?.["eau.main1"] && (
          <ReplaceImage id={photos["eau.main1"].id} addMessage={addMessage} />
        )}
        <div
          className="img2"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <img
            src={
              photos?.["eau.main2"]
                ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["eau.main2"].name}`
                : "https://l-araignee.net/ets-clement-duvigeant/assets/photos/bain.jpg"
            }
            alt="baignoire"
          ></img>

          {/*  <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/bain.jpg"
            alt="baignoire"
          ></img> */}
        </div>
        {isLoggedIn && photos?.["eau.main2"] && (
          <ReplaceImage id={photos["eau.main2"].id} addMessage={addMessage} />
        )}
        <div
          className="img3"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <img
            src={
              photos?.["eau.main3"]
                ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["eau.main3"].name}`
                : "https://l-araignee.net/ets-clement-duvigeant/assets/slider/7.png"
            }
            alt="panneau solaire"
          ></img>

          {/*  <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/slider/7.png"
            alt="panneau solaire"
          ></img> */}
        </div>
        {isLoggedIn && photos?.["eau.main3"] && (
          <ReplaceImage id={photos["eau.main3"].id} addMessage={addMessage} />
        )}
      </div>
      <div className="logo" data-aos="fade-left" data-aos-duration="2000">
        <a
          href="https://www.qualit-enr.org/qualifications/qualipac/"
          target="_blank"
          rel="noopener noreferrer"
          className="logopac"
        >
          <img
            src={
              photos?.["eau.logo1"]
                ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["eau.logo1"].name}`
                : "https://l-araignee.net/ets-clement-duvigeant/assets/qualipac.png"
            }
            alt="logo rge qualipac"
          ></img>
          {/* <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/qualipac.png"
            alt="logo rge qualipac"
          ></img> */}
        </a>
        {isLoggedIn && photos?.["eau.logo1"] && (
          <ReplaceImage id={photos["eau.logo1"].id} addMessage={addMessage} />
        )}
        <a
          href="https://www.qualit-enr.org/qualifications/qualisol/"
          target="_blank"
          rel="noopener noreferrer"
          className="logosol"
        >
          <img
            src={
              photos?.["eau.logo2"]
                ? `${import.meta.env.VITE_API_URL}/uploads/photos/${photos["eau.logo2"].name}`
                : "https://l-araignee.net/ets-clement-duvigeant/assets/qualipac.png"
            }
            alt="logo rge qualisol"
          ></img>
          {/*  <img
            src="https://l-araignee.net/ets-clement-duvigeant/assets/qualisol.png"
            alt="logo rge qualisol"
          ></img> */}
        </a>
        {isLoggedIn && photos?.["eau.logo2"] && (
          <ReplaceImage id={photos["eau.logo2"].id} addMessage={addMessage} />
        )}
      </div>
    </div>
  );
}

export default Eau;
