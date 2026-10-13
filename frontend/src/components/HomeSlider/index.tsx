import "./index.css";
import arrowLeft from "./arrow_left.png";
import arrowRight from "./arrow_right.png";

import { useEffect, useMemo, useRef, useState } from "react";
import Card from "../Card/Review";

export default function HomeSlider() {
  //const { list, loading } = useEffect((state) => state.spotlight);
  //const sliders = list?.data || [];

  const [selected, setSelected] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const touchStartX = useRef(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const isConnected = !!localStorage.getItem("token");

  const get_review = async () => {
    console.log("isConnected :", isConnected);
     if (isConnected) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/reviews/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            method: "GET",
          },
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Echec de récupération des avis");
        }        
        return data;        
      } catch (e) { 
        console.error("Erreur récupération des avis admin :", e);        
        return [];
      }
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/reviews/?status=approved`,
        {
          method: "GET",
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Echec de récupération des avis");
      }
      return data;      
    } catch (e) {       
      console.error("Erreur récupération avis :", e);
      return [];     
    }
  };
  const refreshReviews = async () => {
    const data = await get_review();
    setReviews(data);
  };
  
  useEffect(() => {
  get_review().then((data) => {
    console.log("Avis récupérés :", data);
    setReviews(data);
  });
}, []);

  const sortedSlider = useMemo(() => {
    
    if (!reviews || reviews.length === 0) return [];
    let listClone = structuredClone(reviews);
    if (listClone.length === 2) {
      listClone = listClone.concat(structuredClone(listClone));
    }

    return listClone.map((item, index) => ({
      ...item,
      sliderIndex: index,
    }));
  }, [reviews]);

  const length = sortedSlider.length;
  const previousIndex = (selected - 1 + length) % length;
  const nextIndex = (selected + 1) % length;

  const previousPicture = () => {
    if (cooldown || length <= 1) return;
    setCooldown(true);
    setSelected((prev) => (prev - 1 + length) % length);
    setTimeout(() => setCooldown(false), 1000);
  };

  const nextPicture = () => {
    if (cooldown || length <= 1) return;
    setCooldown(true);
    setSelected((prev) => (prev + 1) % length);
    setTimeout(() => setCooldown(false), 1000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX.current - 50) {
      nextPicture();
    } else if (touchEndX > touchStartX.current + 50) {
      previousPicture();
    }
  };

  const getSlideProps = (index) => {
    if (index === selected) {
      return {
        className: `slMax sl b${index} selected`,
        style: { zIndex: 2, opacity: 1 },
      };
    }
    if (index === previousIndex) {
      return {
        className: `slMax sl b${index} previous`,
        style: { zIndex: 0, opacity: 1 },
      };
    }
    if (index === nextIndex) {
      return {
        className: `slMax sl b${index} next`,
        style: { zIndex: 2, opacity: 1 },
      };
    }

    /* SI 5 OU PLUS FAVORIS PERMETTRE NEXT NEXT ET PREV PREV */
    if (length < 5) {
      return {
        className: `slMax sl b${index}`,
        style: { zIndex: 0, opacity: 0 },
      };
    }

    if ((previousIndex === 0 && index === length) || index < previousIndex) {
      return {
        className: `slMax sl b${index} prevPrev`,
        style: { zIndex: 0, opacity: 0 },
      };
    }
    if ((nextIndex === length - 1 && index === 0) || index > nextIndex) {
      return {
        className: `slMax sl b${index} nextNext`,
        style: { zIndex: 0, opacity: 0 },
      };
    }

    return {
      className: `slMax sl b${index}`,
      style: { zIndex: 0, opacity: 0 },
    };
  };
  // if (loading) return <Loader />;
  // if (length === 0) return null;

  const isOriginallyTwoItems = reviews.length === 2;
  const dotCount = isOriginallyTwoItems ? 2 : length;
  const activeDotIndex = isOriginallyTwoItems ? selected % 2 : selected;

  return (
    <div
      className="sliderField sliderContainer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2>Avis</h2>
      <div className="inner">
        {sortedSlider.map((item) => {
          const { className, style } = getSlideProps(item.sliderIndex);
          return (
            <div key={item.sliderIndex} className={className} style={style}>
              <Card review={item} onReviewUpdated={refreshReviews} />
            </div>
          );
        })}
      </div>

      {length > 1 && (
        <div className="arrowAndCounter">
          <button
            type="button"
            tabIndex={0}
            className={`buttonArrow arrowLeft ${cooldown ? "cooldown" : ""}`}
            onClick={previousPicture}
            aria-label="Diapositive précédente"
          >
            <img
              className="leftArrow"
              src={arrowLeft}
              alt="flèche vers la gauche"
            />
          </button>

          <button
            type="button"
            tabIndex={0}
            className={`buttonArrow arrowRight ${cooldown ? "cooldown" : ""}`}
            onClick={nextPicture}
            aria-label="Diapositive suivante"
          >
            <img
              className="rightArrow"
              src={arrowRight}
              alt="flèche vers la droite"
            />
          </button>

          <div className="counter">
            {Array.from({ length: dotCount }).map((_, dotIndex) => (
              <div
                key={dotIndex}
                className={`dot d${dotIndex} ${
                  dotIndex === activeDotIndex ? "dotSelected" : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
