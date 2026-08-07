import Accueil from "../../components/Accueil";
import Climatisation from "../../components/Climatisation";
import Chauffage from "../../components/Chauffage";
import Vmc from "../../components/Vmc";
import Eau from "../../components/Eau";
import Cgv from "../../components/Cgv";
import "./home.css";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const climatisation = useRef();
  const chauffage = useRef();
  const vmc = useRef();
  const eau = useRef();
  const accueil = useRef();

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
      <div className="ancre">
        <span id="acceuil" className="id"></span>
        <span className="observer" ref={accueil}></span>
      </div>
      <div className="accueilContent">
        <Accueil></Accueil>
      </div>
      <div className="home">
        <div className="content">
          <div className="ancre">
            <span id="chauffage" className="id"></span>
            <span className="observer" ref={chauffage}></span>
          </div>
          <div className="section">
            <Chauffage></Chauffage>
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
