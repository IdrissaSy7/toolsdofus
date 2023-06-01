import React, { useState, useEffect } from "react";
import Alma from "../JSON/almanax.json";

const OfferingsCalendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [animateCalendar, setAnimateCalendar] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    setAnimateCalendar(true);
    const timer = setTimeout(() => {
      setAnimateCalendar(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [selectedMonth]);

  useEffect(() => {
    let nextSevenDays = getNextSevenDays();
    let nextSevenData = nextSevenDays.map((day) => {
      let dayString = `${day.getDate()} ${getMonthName(day.getMonth())}`;
      let dayData = Alma.filter((item) => item.date === dayString);
      return dayData.length > 0
        ? {
            date: dayString,
            dateObject: day,
            titre: dayData[0].titre,
            bonus: dayData[0].bonus,
            offrande: dayData[0].offrande,
            image: dayData[0].imageOffrande,
          }
        : null;
    });
    setCalendar(nextSevenData);
  }, []);

  function getNextSevenDays() {
    let result = [];
    for (let i = 0; i < 7; i++) {
      let futureDay = new Date();
      futureDay.setDate(futureDay.getDate() + i);
      result.push(futureDay);
    }
    return result;
  }

  function getMonthName(monthNumber) {
    const monthNames = [
      "Javian",
      "Flovor",
      "Martalo",
      "Aperirel",
      "Maisial",
      "Juinssidor",
      "Joullier",
      "Fraouctor",
      "Septange",
      "Octolliard",
      "Novamaire",
      "Descendre",
    ];
    return monthNames[monthNumber];
  }

  function goBack() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
  }

  function goForward() {
    setCurrentIndex((prevIndex) => (prevIndex + 1 > 6 ? 6 : prevIndex + 1));
  }

  const monthImages = [
    {
      name: "Javian",
      realName: "Janvier",
      img: "./img/almanax/janvier/janvier.png",
    },
    {
      name: "Flovor",
      realName: "Février",
      img: "./img/almanax/fevrier/fevrier.png",
    },
    {
      name: "Martalo",
      realName: "Mars",
      img: "./img/almanax/mars/mars.png",
    },
    {
      name: "Aperirel",
      realName: "Avril",
      img: "./img/almanax/avril/avril.png",
    },
    { name: "Maisial", realName: "Mai", img: "./img/almanax/mai/mai.png" },
    {
      name: "Juinssidor",
      realName: "Juin",
      img: "./img/almanax/juin/juin.png",
    },
    {
      name: "Joullier",
      realName: "Juillet",
      img: "./img/almanax/juillet/juillet.png",
    },
    {
      name: "Fraouctor",
      realName: "Août",
      img: "./img/almanax/aout/aout.png",
    },
    {
      name: "Septange",
      realName: "Septembre",
      img: "./img/almanax/septembre/septembre.png",
    },
    {
      name: "Octolliard",
      realName: "Octobre",
      img: "./img/almanax/octobre/octobre.png",
    },
    {
      name: "Novamaire",
      realName: "Novembre",
      img: "./img/almanax/novembre/novembre.png",
    },
    {
      name: "Descendre",
      realName: "Décembre",
      img: "./img/almanax/decembre/decembre.png",
    },
  ];

  let currentMonth = getMonthName(
    calendar[currentIndex]?.dateObject.getMonth()
  );

  let monthImage = monthImages.find(
    (month) => month.name === currentMonth
  )?.img;

  const fullCalendar = Alma.reduce((acc, curr) => {
    let [_, monthName] = curr.date.split(" ");
    if (!acc[monthName]) {
      acc[monthName] = [];
    }
    acc[monthName].push(curr);
    return acc;
  }, {});

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div>
      <div className="alma">
        {calendar[currentIndex] ? (
          <div className={`almanax ${animate ? "animate" : ""}`}>
            <h2>{calendar[currentIndex].date}</h2>

            <div className="almanaxContent">
              <div className="almanaxContentImg">
                <img src={monthImage} alt={currentMonth} />
              </div>

              <div className="almanaxContentText">
                <p>Bonus : {calendar[currentIndex].titre}</p>
                <p>{calendar[currentIndex].bonus}</p>
              </div>
            </div>
            <div className="almanaxContentOffrande">
              <h3>Offrande </h3>
              <div className="almanaxImgOffrande">
                <img
                  src={calendar[currentIndex].image}
                  alt={calendar[currentIndex].offrande}
                />
                <p>{calendar[currentIndex].offrande}</p>
              </div>
            </div>
          </div>
        ) : null}
        <button
          className={`button ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={goBack}
          id="buttonLeft"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className={`button ${currentIndex === 6 ? "disabled" : ""}`}
          onClick={goForward}
          id="buttonRight"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="almaFull">
        <h4 className="center">Calendrier complet</h4>
        <div className="months">
          {monthImages.map((month) => (
            <div
              key={month.name}
              onClick={() => handleMonthClick(month.name)}
              className={`month ${
                month.name === selectedMonth ? "selected" : ""
              }`}
            >
              <img src={month.img} alt={month.name} />
              <p>{month.name}</p>
              <p>({month.realName})</p>
            </div>
          ))}
        </div>

        {selectedMonth && (
          <div className="fullCalendar">
            <div className="fullCalendarTitle">
              <p>Date</p>
              <p>Bonus</p>
              <p>Description</p>
              <p>Offrande</p>
            </div>
            {fullCalendar[selectedMonth].map((item, index) => (
              <div
                key={index}
                className={`fullCalendarList ${
                  animateCalendar ? "animate" : ""
                }`}
              >
                <p>{item.date}</p>
                <p>{item.titre}</p>
                <p>{item.bonus}</p>
                <p>
                  <img src={item.imageOffrande} alt={item.offrande} />
                  {item.offrande}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferingsCalendar;
