import { useEffect, useRef } from "react";
import "./slider.css";

function Slider({ sliders }) {
  //au cas ou il n'y ai que deux items dans le slider
  //(pour que le slider puisse tourner de maniere fluide dans les 2 sens)

  let sortedSlider = structuredClone(sliders);
  if (sortedSlider.length === 2) {
    let sortedSliderClone = structuredClone(sortedSlider);
    sortedSlider = sortedSlider.concat(sortedSliderClone);
  }
  let sortedSliderClone = structuredClone(sortedSlider);
  for (let i = 0; i < sortedSliderClone.length; i++) {
    sortedSliderClone[i].index = i;
  }
  sortedSlider = sortedSliderClone;

  // declaration des variables

  let selected = 0;
  let previous = sortedSlider.length - 1;
  let previousPrevious = sortedSlider.length - 2;
  let next = 1;
  let nextNext = 2;
  let cooldown = false;

  //swipe tactile//

  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    if (touchendX < touchstartX - 50)
      document.querySelector(".arrowRight").click();
    if (touchendX > touchstartX + 50)
      document.querySelector(".arrowLeft").click();
  }
  setTimeout(() => {
    document
      .querySelector(".sliderField")
      .addEventListener("touchstart", (e) => {
        touchstartX = e.changedTouches[0].screenX;
      });

    document.querySelector(".sliderField").addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
  }, 500);

  // fonction useintervall adapté pour react

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // clique automatique sur next picture toute les 6 secondes

  /*useInterval(() => {
    nextPicture();
  }, 6000);*/

  //changement d'index//

  const previousPicture = () => {
    if (cooldown === false) {
      cooldown = true;

      document.querySelector(".arrowLeft").classList.add("cooldown");

      selected--;
      previous--;
      previousPrevious--;
      next--;
      nextNext++;
      if (selected < 0) {
        selected = sortedSlider.length - 1;
      }
      if (previous < 0) {
        previous = sortedSlider.length - 1;
      }
      if (next < 0) {
        next = sortedSlider.length - 1;
      }
      if (nextNext < 0) {
        nextNext = sortedSlider.length - 1;
      }
      if (previousPrevious < 0) {
        previousPrevious = sortedSlider.length - 1;
      }
      document.querySelector(".dotSelected").classList.remove("dotSelected");
      if (sortedSlider.length === 2) {
        if (selected < 2) {
          document.querySelector(".d" + selected).classList.add("dotSelected");
        }
        if (selected === 2) {
          document.querySelector(".d0").classList.add("dotSelected");
        }
        if (selected === 3) {
          document.querySelector(".d1").classList.add("dotSelected");
        }
      } else {
        document.querySelector(".d" + selected).classList.add("dotSelected");
      }

      for (let i = 0; i < sortedSlider.length; i++) {
        document.querySelector(".b" + i).style.zIndex = "0";
        document.querySelector(".b" + i).style.opacity = "0";
        document.querySelector(".b" + i).classList.remove("selected");
        document.querySelector(".b" + i).classList.remove("next");
        document.querySelector(".b" + i).classList.remove("previous");
        document.querySelector(".b" + i).classList.remove("start");
        document.querySelector(".b" + i).classList.remove("beforStart");
      }
      document.querySelector(".b" + next).classList.add("next");
      document.querySelector(".b" + next).style.opacity = "1";
      document.querySelector(".b" + next).style.zIndex = "2";

      /*document.querySelector(".b" + nextNext).classList.add("nextNext");
      document.querySelector(".b" + nextNext).style.opacity = "1";
      document.querySelector(".b" + nextNext).style.zIndex = "2";*/

      document.querySelector(".b" + previous).classList.add("previous");
      document.querySelector(".b" + previous).style.opacity = "1";
      document.querySelector(".b" + previous).style.zIndex = "0";

      /*document
        .querySelector(".b" + previousPrevious)
        .classList.add("previousPrevious");
      document.querySelector(".b" + previousPrevious).style.opacity = "1";
      document.querySelector(".b" + previousPrevious).style.zIndex = "0";*/

      document.querySelector(".b" + selected).classList.add("selected");
      document.querySelector(".b" + selected).style.zIndex = "2";
      document.querySelector(".b" + selected).style.opacity = "1";
      setTimeout(() => {
        cooldown = false;
        document.querySelector(".arrowLeft").classList.remove("cooldown");
      }, 1000);
    }
  };

  const nextPicture = () => {
    if (cooldown === false) {
      cooldown = true;
      if (document.querySelector(".arrowRight") !== null) {
        document.querySelector(".arrowRight").classList.add("cooldown");
      }
      selected++;
      previous++;
      previousPrevious++;
      next++;
      nextNext++;
      if (selected > sortedSlider.length - 1) {
        selected = 0;
      }
      if (previous > sortedSlider.length - 1) {
        previous = 0;
      }
      if (next > sortedSlider.length - 1) {
        next = 0;
      }
      if (previousPrevious > sortedSlider.length - 1) {
        previousPrevious = 0;
      }
      if (nextNext > sortedSlider.length - 1) {
        nextNext = 0;
      }
      if (document.querySelector(".dotSelected") !== null) {
        document.querySelector(".dotSelected").classList.remove("dotSelected");
        if (sortedSlider.length === 2) {
          if (selected < 2) {
            document
              .querySelector(".d" + selected)
              .classList.add("dotSelected");
          }
          if (selected === 2) {
            document.querySelector(".d0").classList.add("dotSelected");
          }
          if (selected === 3) {
            document.querySelector(".d1").classList.add("dotSelected");
          }
        } else {
          document.querySelector(".d" + selected).classList.add("dotSelected");
        }
      }

      for (let i = 0; i < sortedSlider.length; i++) {
        document.querySelector(".b" + i).style.zIndex = "0";
        document.querySelector(".b" + i).style.opacity = "0";
        document.querySelector(".b" + i).classList.remove("selected");
        document.querySelector(".b" + i).classList.remove("next");
        document.querySelector(".b" + i).classList.remove("previous");
        document.querySelector(".b" + i).classList.remove("start");
        document.querySelector(".b" + i).classList.remove("beforStart");
      }

      document.querySelector(".b" + previous).classList.add("previous");
      document.querySelector(".b" + previous).style.opacity = "1";
      document.querySelector(".b" + previous).style.zIndex = "2";

      /*document
        .querySelector(".b" + previousPrevious)
        .classList.add("previousPrevious");
      document.querySelector(".b" + previousPrevious).style.opacity = "1";
      document.querySelector(".b" + previousPrevious).style.zIndex = "2";*/

      document.querySelector(".b" + next).classList.add("next");
      document.querySelector(".b" + next).style.opacity = "1";
      document.querySelector(".b" + next).style.zIndex = "0";

      /*document.querySelector(".b" + nextNext).classList.add("nextNext");
      document.querySelector(".b" + nextNext).style.opacity = "1";
      document.querySelector(".b" + nextNext).style.zIndex = "0";*/

      document.querySelector(".b" + selected).classList.add("selected");
      document.querySelector(".b" + selected).style.zIndex = "2";
      document.querySelector(".b" + selected).style.opacity = "1";
      setTimeout(() => {
        cooldown = false;
        if (document.querySelector(".arrowRight") !== null) {
          document.querySelector(".arrowRight").classList.remove("cooldown");
        }
      }, 1000);
    }
  };
  return (
    <div className="sliderField sliderContainer">
      <div className="inner">
        {sortedSlider.map((slide) => {
          return (
            <div
              className={
                slide.index === 0
                  ? "slMax sl b" + slide.index
                  : slide.index === sortedSlider.length - 1
                  ? "slMax beforStart sl b" + slide.index
                  : slide.index === 1
                  ? "slMax start sl b" + slide.index
                  : "slMax afterStart sl b" + slide.index
              }
              key={slide.index}
            >
              <img
                className="carousel-img"
                src={slide.picture}
                alt="slider"
                style={{
                  zIndex: 2,
                }}
              />
            </div>
          );
        })}
      </div>
      {sortedSlider.length > 1 ? (
        <div className="arrowAndCounter">
          <button
            tabIndex={0}
            className="buttonArrow arrowLeft"
            onClick={previousPicture}
          >
            <img
              className="leftArrow"
              src="https://l-araignee.net/ets-clement-duvigeant/assets/arrow_left.png"
              alt="fleche vers la gauche"
            ></img>
          </button>
          <button
            tabIndex={0}
            className="buttonArrow arrowRight"
            onClick={nextPicture}
          >
            <img
              className="rightArrow"
              src="https://l-araignee.net/ets-clement-duvigeant/assets/arrow_right.png"
              alt="fleche vers la droite"
            ></img>
          </button>
          {sortedSlider.length === 2 ? (
            <div className="counter">
              <div className="dot dotSelected d0"></div>
              <div className="dot d1"></div>
            </div>
          ) : (
            <div className="counter">
              {sortedSlider.map((dot) => {
                return (
                  <div
                    key={dot.index}
                    className={
                      dot.index === 0
                        ? "dot dotSelected d" + dot.index
                        : "dot d" + dot.index
                    }
                  ></div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Slider;
