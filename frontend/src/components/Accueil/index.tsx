import PhotoSlider from "../PhotoSlider";
import "./accueil.css";
import { useContent } from "../../contexts/ContentContext";

function Accueil() {
  const { slider } = useContent() ?? {};

  const sliders = slider?.map((photo) => ({
    ...photo,
    url: `${import.meta.env.VITE_API_URL}/uploads/photos/${photo.name}`,
  })) ?? [
    {
      id: 1,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/1.png",
      location: "slider",
    },
    {
      id: 2,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/2.png",
      location: "slider",
    },
    {
      id: 3,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/3.png",
      location: "slider",
    },
    {
      id: 4,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/4.png",
      location: "slider",
    },
    {
      id: 5,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/5.png",
      location: "slider",
    },
    {
      id: 6,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/6.png",
      location: "slider",
    },
    {
      id: 7,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/7.png",
      location: "slider",
    },
    {
      id: 8,
      url: "https://l-araignee.net/ets-clement-duvigeant/assets/slider/8.png",
      location: "slider",
    },
  ];

  return (
    <div className="accueil">
      {/*  <img
        src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/pompe.jpg"
        className="full"
        alt="fond"
      ></img> */}
      <div className="onBackground">
        <div className="text"></div>
        <div className="Caroussel">
          <PhotoSlider sliders={sliders}></PhotoSlider>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
