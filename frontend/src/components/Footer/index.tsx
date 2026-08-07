import { Link } from "react-router";
import "./footer.css";

function Footer() {
  function cgv() {
    if (
      !document.querySelector(".cgv").className.includes("hidden") ||
      document.querySelector(".cgv") !== null
    ) {
      document.querySelector(".content").classList.add("hidden");
      document.querySelector(".accueilContent").classList.add("hidden");
      document.querySelector(".cgv").classList.remove("hidden");
    } else {
      document.querySelector(".cgv").classList.add("hidden");
      document.querySelector(".content").classList.remove("hidden");
      document.querySelector(".accueilContent").classList.remove("hidden");
    }

    const links = document.querySelectorAll(".active");
    if (links !== null) {
      for (let link of links) {
        link.classList.remove("active");
      }
    }
  }
  return (
    <div className="footer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1480966.5153097906!2d2.197417!3d43.533353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae15152d746de1%3A0x9292b5f1e813a3c!2sCLEMENT%20DUVIGEANT%20ESCOUSSENS!5e0!3m2!1sfr!2sfr!4v1725951802595!5m2!1sfr!2sfr"
        width="600"
        height="450"
        allowFullScreen=""
        title="map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
      <div className="adresse">
        <p>Ets Clément Duvigeant</p>
        <p>11 impasse de la naouco</p>
        <p>81290 Escoussens</p>
        <a href="tel:+33781115430" className="phone">
          <p>tel: 07.81.11.54.30</p>
        </a>
        <a
          href="mailto:c-duvigeant@laposte.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>c-duvigeant@laposte.net</p>
        </a>
      </div>
      <div className="legal">
        <Link to="cgv" smooth="true">
          <p
            className="cgvLink"
            onClick={() => cgv()}
            tabIndex={0}
            onKeyDown={() => cgv()}
          >
            Mentions legales et C.G.V
          </p>
        </Link>

        <a
          href="https://fr.freepik.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Images: Freepic</p>{" "}
        </a>
        <p>Nous ne faisons pas de cookies</p>
        <p>Horaires:</p>
        <p>Lundi au Vendredi de 8h00 à 18h00</p>
      </div>
    </div>
  );
}

export default Footer;
