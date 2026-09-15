import Slider from "../Slider";
import "./accueil.css";

function Accueil() {
  const sliders = [
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/1.png",
      french_content: "",
    },
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/2.png",
      french_content: "",
    },
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/3.png",
      french_content: "",
    },
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/4.png",
      french_content: "",
    },
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/5.png",
      french_content: "",
    },
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/6.png",
      french_content: "",
    },
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/7.png",
      french_content: "",
    },
    {
      picture:
        "https://l-araignee.net/ets-clement-duvigeant/assets/slider/8.png",
      french_content: "",
    },
  ];

  return (
    <div className="accueil">
      <img
        src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/pompe.jpg"
        className="full"
        alt="Installation de pompe à chaleur par Clément Duvigeant à Escoussens"
      />

      <div className="text">
        <h1>
          Clément Duvigeant – Plomberie, Chauffage et Climatisation à Escoussens
        </h1>

        <p>
          Professionnel agréé intervenant à Escoussens et dans la région de
          Castres, avec 15 années d'expérience.
        </p>
      </div>

      <div className="Caroussel">
        <Slider sliders={sliders}></Slider>
      </div>
    </div>
  );
}

export default Accueil;