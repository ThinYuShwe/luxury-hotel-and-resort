import { Header } from "../components/Header";
import "./HomePage.css";
import "../index.css";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { MomentSection } from "../components/MomentSection";
import { useState } from "react";
import { homePageData } from "./HomePageData";
// import mainBg from "../assets/homePage/mainHomePage.jpg";
import mainBg2 from "../assets/homePage/main2.avif";
import remove from "../assets/homePage/remove.png";

import plus from "../assets/homePage/plus.png";

export function HomePage() {
  const navigate = useNavigate();
  const [openCards, setOpenCards] = useState({
    experience: false,
    adventure: false,
    food: false,
    meeting: false,
  });
  return (
    <main className="home-page">
      <Header />
      <div className="hero">
        <img src={mainBg2} alt="" className="mainBg" />
        <div className="intro">
          <p className="intro-text">Stay. Relax. Repeat</p>
          <h1 className="intro-heading">Experience True Hospitality.</h1>
        </div>
      </div>
      <div className="sectionCollection">
        <section className="about">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            <span className="line">
              A breathtaking eco-hotel and premier event destination
            </span>
            <span className="line">
              for adventurers, artists, and digital nomads seeking
            </span>
            <span className="line">
              inspiration and personal transformation.
            </span>
          </p>
        </section>

        <section className="stay">
          <div className="stay-main">
            <h2 className="stay-title">{homePageData.stay.main.title}</h2>
            <p className="stay-description">
              {homePageData.stay.main.description}
            </p>
          </div>

          <section className="image-section">
            {homePageData.stay.cards.map((card, index) => (
              <article key={index} className="image-card slide-up">
                <figure className="image-card-media">
                  <img
                    src={card.imgSrc}
                    alt={card.imgAlt}
                    className={index === 0 ? "guest-room3" : "wellness"}
                  />
                  <figcaption className="image-card-caption">
                    <h3 className="image-card-title">{card.title}</h3>
                    <button
                      className="image-card-button"
                      onClick={
                        card.title === "Rooms"
                          ? () => navigate("/roomsAvailable")
                          : undefined
                      }
                    >
                      {card.buttonText}
                    </button>
                  </figcaption>
                </figure>
              </article>
            ))}
          </section>
        </section>

        <section className="offerings-section">
          {homePageData.offerings.map((item, index) => (
            <article key={index} className="offerings-card">
              <div className="card-header">
                <h2 className="card-title">{item.title}</h2>
                <button
                  className="icon-button"
                  onClick={() =>
                    setOpenCards((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                >
                  <img src={openCards[index] ? remove : plus} alt="toggle" />
                </button>
              </div>

              {openCards[index] && (
                <>
                  <p className="card-description">{item.content}</p>

                  <figure className="card-gallery">
                    {item.images.map((img, i) => (
                      <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className="card-image"
                      />
                    ))}
                  </figure>
                </>
              )}
            </article>
          ))}
        </section>

        <section className="discover-section">
          <figure className="discover-figure">
            <img
              src={homePageData.discover.imgSrc}
              alt={homePageData.discover.imgAlt}
              className="discover-image zoom-in"
            />
            <figcaption className="discover-caption">
              <p className="discover-text">{homePageData.discover.text1}</p>
              <p className="discover-text2">{homePageData.discover.text2}</p>
            </figcaption>
          </figure>
        </section>

        <section className="room-highlight-section">
          <figure className="room-highlight-figure">
            {homePageData.roomHightLight.images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={
                  index === 0
                    ? "room-highlight-image"
                    : "room-highlight-image-bathroom"
                }
              />
            ))}

            <figcaption className="room-highlight-caption">
              <p className="room-highlight-text">
                {homePageData.roomHightLight.text}
              </p>
            </figcaption>
          </figure>
        </section>

        <MomentSection />
        <section className="golf-section">
          <figure className="golf-figure">
            <figcaption className="golf-caption">
              <p className="golf-overlay-subtitle">
                {homePageData.golf.subtitle}
              </p>
              <p className="golf-overlay-title">{homePageData.golf.title}</p>
            </figcaption>
            <img
              src={homePageData.golf.imgSrc}
              alt={homePageData.golf.imgAlt}
              className="golf-image"
            />
          </figure>
        </section>

        <section className="rooms-view-section">
          <figure className="rooms-view-figure">
            <img
              src={homePageData.roomsView.imgSrc}
              alt={homePageData.roomsView.imgAlt}
              className="rooms-view-image"
            />

            <figcaption className="rooms-view-caption">
              <div className="rooms-view-main">
                <h2 className="rooms-view-title">
                  {homePageData.roomsView.title}
                </h2>
                <p className="rooms-view-description">
                  {homePageData.roomsView.description}
                </p>
              </div>

              <div className="rooms-view-cta">
                <p
                  className="rooms-view-cta-text"
                  onClick={() => navigate("/roomsAvailable")}
                >
                  {homePageData.roomsView.ctaText}
                </p>
              </div>
            </figcaption>
          </figure>
        </section>

        <section className="wellness-section">
          <div className="wellness-header">
            <h2 className="wellness-title">{homePageData.wellness.title}</h2>
            <p className="wellness-intro">
              {homePageData.wellness.description}
            </p>
          </div>

          <div className="wellness-cards">
            {homePageData.wellness.cards.map((card, index) => (
              <article key={index} className="wellness-card">
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  className="wellness-image"
                />
                <p className="wellness-card-subtitle">{card.subtitle}</p>
                <h3 className="wellness-card-title">{card.title}</h3>
                <p className="wellness-card-description">{card.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
