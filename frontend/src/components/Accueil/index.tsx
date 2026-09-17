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
        alt="fond"
      ></img>
      <div className="onBackground">
        <div className="text">

</div>
        <div className="Caroussel">
          <Slider sliders={sliders}></Slider>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
