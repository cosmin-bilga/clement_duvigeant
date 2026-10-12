import Accueil from "../../components/Accueil";
import Climatisation from "../../components/Climatisation";
import Chauffage from "../../components/Chauffage";
import Vmc from "../../components/Vmc";
import Eau from "../../components/Eau";
import Cgv from "../../components/Cgv";
//import { useContent } from "../../contexts/ContentContext";
import "./home.css";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeSlider from "../../components/HomeSlider";

function Home() {
  const [message, setMessage] = useState([]);

  const addMessage = (text) => {
    const id = crypto.randomUUID();

    setMessage((prev) => [...prev, { id, text }]);

    setTimeout(() => {
      setMessage((prev) => prev.filter((m) => m.id !== id));
    }, 3000);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const climatisation = useRef(null);
  const chauffage = useRef(null);
  const vmc = useRef(null);
  const eau = useRef(null);
  const accueil = useRef(null);
  /* const { content, photos } = useContent() ?? {}; */

  useEffect(() => {
    const observerClim = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const links = document.querySelectorAll(".active");
        if (links !== null) {
          for (let link of links) {
            link.classList.remove("active");
          }
        }
        document.querySelectorAll(".button")[2].classList.add("active");
      }
    });

    observerClim.observe(document.querySelector(".climatisation"));

    const observerChauffage = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const links = document.querySelectorAll(".active");
        if (links !== null) {
          for (let link of links) {
            link.classList.remove("active");
          }
        }
        document.querySelectorAll(".button")[3].classList.add("active");
      }
    });

    observerChauffage.observe(chauffage.current);

    const observerVmc = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const links = document.querySelectorAll(".active");
        if (links !== null) {
          for (let link of links) {
            link.classList.remove("active");
          }
        }
        document.querySelectorAll(".button")[0].classList.add("active");
      }
    });
    observerVmc.observe(vmc.current);

    const observerEau = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const links = document.querySelectorAll(".active");
        if (links !== null) {
          for (let link of links) {
            link.classList.remove("active");
          }
        }
        document.querySelectorAll(".button")[1].classList.add("active");
      }
    });
    observerEau.observe(eau.current);

    const observerAccueil = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const links = document.querySelectorAll(".active");
        if (links !== null) {
          for (let link of links) {
            link.classList.remove("active");
          }
        }
      }
    });

    observerAccueil.observe(accueil.current);
  }, []);

  return (
    <main>
      {/* messages */}
      {message && (
        <div className="info-message">
          {message.map((m) => {
            return <p key={m.id}>{m.text}</p>;
          })}
        </div>
      )}
      <div className="ancre">
        <span id="acceuil" className="id"></span>
        <span className="observer" ref={accueil}></span>
      </div>
      <div className="accueilContent">
        <Accueil addMessage={addMessage}></Accueil>
      </div>
      <div className="home">
        <div className="content">
          <div className="ancre">
            <span id="chauffage" className="id"></span>
            <span className="observer" ref={chauffage}></span>
          </div>
          <div className="section">
            <Chauffage addMessage={addMessage}></Chauffage>
          </div>
          <div className="test">
            <HomeSlider />
          </div>
          <div className="ancre">
            <span id="climatisation" className="id"></span>
            <span className="observer climatisation" ref={climatisation}></span>
          </div>

          <div className="section">
            <Climatisation></Climatisation>
          </div>

          <div className="ancre">
            <span id="eau" className="id"></span>
            <span className="observer" ref={eau}></span>
          </div>
          <div className="section">
            <Eau></Eau>
          </div>

          <div className="ancre">
            <span id="vmc" className="id"></span>
            <div className="observer">
              <span ref={vmc}></span>
            </div>
          </div>
          <div className="section">
            <Vmc></Vmc>
          </div>
        </div>

        <div className="cgv hidden">
          <div className="ancre">
            <span id="cgv" className="id"></span>
          </div>
          <Cgv></Cgv>
        </div>
      </div>
    </main>
  );
}

export default Home;
