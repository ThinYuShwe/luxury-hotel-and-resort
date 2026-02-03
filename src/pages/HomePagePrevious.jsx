import { Header } from "../components/Header";
import "./HomePage.css";
import "../index.css";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { MomentSection } from "../components/MomentSection";
import { useState } from "react";

// import mainBg from "../assets/homePage/mainHomePage.jpg";
import mainBg2 from "../assets/homePage/main2.avif";
import guestRoom3 from "../assets/homePage/guest-room3.jpg";
import wellness from "../assets/homePage/wellness.jpg";
import remove from "../assets/homePage/remove.png";
import experience1 from "../assets/homePage/experience1.jpg";
import experience2 from "../assets/homePage/experience2.jpg";
import adventure1 from "../assets/homePage/adventure1.jpg";
import adventure2 from "../assets/homePage/adventure2.jpg";
import food1 from "../assets/homePage/food1.jpg";
import food2 from "../assets/homePage/food2.jpg";
import meetings1 from "../assets/homePage/meetings1.avif";
import meetings2 from "../assets/homePage/meetings2.avif";
import discover from "../assets/homePage/discover.avif";
import room1 from "../assets/homePage/room1.jpg";

import golf1 from "../assets/homePage/golf1.avif";
import view1 from "../assets/homePage/view1.webp";
import swimmingPool from "../assets/homePage/swimmingPool.webp";
import heat from "../assets/homePage/heat.jpg";
import care from "../assets/homePage/care.avif";
import bathroom from "../assets/homePage/bathroom.png";
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
          {/* <p className="about-description">
            A breathtaking eco-hotel and premier event destination for
            adventurers, artists, and digital nomads seeking inspiration and
            personal transformation.
          </p> */}
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
            <h2 className="stay-title">Stay With Us</h2>
            <p className="stay-description">
              Experience sophistication in our elegantly designed rooms and
              suites, where contemporary style meets timeless charm. Enjoy
              spacious interiors, modern furnishings, and breathtaking natural
              views — your serene escape.
            </p>
          </div>
          <section className="image-section">
            <article className="image-card slide-up">
              <figure className="image-card-media">
                <img
                  src={guestRoom3}
                  alt="Guest room interior"
                  className="guest-room3"
                />
                <figcaption className="image-card-caption">
                  <h3 className="image-card-title">Rooms</h3>
                  <button
                    type="button"
                    className="image-card-button"
                    onClick={() => navigate("/roomsAvailable")}
                  >
                    View Rooms
                  </button>
                </figcaption>
              </figure>
            </article>

            <article className="image-card slide-up">
              <figure className="image-card-media">
                <img
                  src={wellness}
                  alt="A girl sitting in a bathtub"
                  className="wellness"
                />
                <figcaption className="image-card-caption">
                  <h3 className="image-card-title">Wellness</h3>
                  <button className="image-card-button">View Packages</button>
                </figcaption>
              </figure>
            </article>
          </section>
        </section>

        <section className="offerings-section">
          <article className="offerings-card experience-card">
            <div className="card-header">
              <h2 className="card-title">Experiences</h2>
              <div className="icons">
                {/* <img
                  src={openCards.experience ? remove : plus}
                  alt=""
                  className="card-openClose-icon"
                  onClick={() =>
                    setOpenCards((prev) => ({
                      ...prev,
                      experience: !prev.experience,
                    }))
                  }
                /> */}
                <button
                  type="button"
                  className="icon-button"
                  aria-expanded={openCards.experience}
                  aria-controls="experience-content"
                  onClick={() =>
                    setOpenCards((prev) => ({
                      ...prev,
                      experience: !prev.experience,
                    }))
                  }
                >
                  <img
                    src={openCards.experience ? remove : plus}
                    alt={
                      openCards.experience
                        ? "Collapse content"
                        : "Expand content"
                    }
                  />
                </button>
              </div>
            </div>
            {openCards.experience && (
              <div id="experience-content">
                <p className="card-description">
                  Every experience is crafted to elevate your stay beyond the
                  ordinary. From curated cultural journeys to immersive wellness
                  rituals and adventure-filled excursions, each moment is
                  designed to help you unwind.
                </p>
                <figure className="card-gallery">
                  <img
                    src={experience1}
                    alt="Fancy outdoor restaurant"
                    className="card-image"
                  />
                  <img src={experience2} alt="Kitchen" className="card-image" />
                </figure>
              </div>
            )}
          </article>

          <article className="offerings-card adventures-card">
            <div className="card-header">
              <h2 className="card-title">Adventure Activities</h2>
              <div className="icons">
                <button
                  type="button"
                  className="icon-button"
                  aria-expanded={openCards.adventure}
                  aria-controls="adventure-content"
                  onClick={() =>
                    setOpenCards((prev) => ({
                      ...prev,
                      adventure: !prev.adventure,
                    }))
                  }
                >
                  <img
                    src={openCards.adventure ? remove : plus}
                    alt={
                      openCards.adventure
                        ? "Collapse adventure section"
                        : "Expened adventure section"
                    }
                  />
                </button>
              </div>
            </div>
            {openCards.adventure && (
              <div id="adventure-content">
                <p className="card-description">
                  Enjoy outdoor adventures that blend excitement with
                  breathtaking scenery. From scenic treks to water activities,
                  each experience energizes your stay and creates lasting
                  memories.
                </p>
                <figure className="card-gallery">
                  <img
                    src={adventure1}
                    alt="A couple climbing mountains"
                    className="card-image"
                  />
                  <img
                    src={adventure2}
                    alt="Outdoor Camping"
                    className="card-image"
                  />
                </figure>
              </div>
            )}
          </article>

          <article className="offerings-card food-card">
            <div className="card-header">
              <h2 className="card-title">Foods & Drinks</h2>
              <div className="icons">
                {/* <img
                  src={openCards.food ? remove : plus}
                  alt=""
                  className="card-openClose-icon"
                  onClick={() =>
                    setOpenCards((prev) => ({
                      ...prev,
                      food: !prev.food,
                    }))
                  }
                /> */}
                <button
                  type="button"
                  className="icon-button"
                  aria-expanded={openCards.food}
                  aria-controls="food-content"
                  onClick={() =>
                    setOpenCards((prev) => ({
                      ...prev,
                      food: !prev.food,
                    }))
                  }
                >
                  <img
                    src={openCards.food ? remove : plus}
                    alt={openCards.food ? "Collapse content" : "Expand content"}
                  />
                </button>
              </div>
            </div>
            {openCards.food && (
              <div className="food-content">
                <p className="card-description">
                  Savor dishes and drinks crafted with fresh, local ingredients
                  and global flair. From gourmet meals to casual bites and
                  signature cocktails, every flavor enhances your stay.
                </p>
                <figure className="card-gallery">
                  <img src={food1} alt="Food" className="card-image" />
                  <img
                    src={food2}
                    alt="Two women holding glass of wine"
                    className="card-image"
                  />
                </figure>
              </div>
            )}
          </article>

          <article className="offerings-card meeting-card">
            <div className="card-header">
              <h2 className="card-title">Meetings & Events</h2>
              <div className="icons">
                <button
                  type="button"
                  className="icon-button"
                  aria-expanded={openCards.meeting}
                  aria-controls="food-content"
                  onClick={() =>
                    setOpenCards((prev) => ({
                      ...prev,
                      meeting: !prev.meeting,
                    }))
                  }
                >
                  <img
                    src={openCards.meeting ? remove : plus}
                    alt={
                      openCards.meeting ? "Collapse content" : "Expand content"
                    }
                  />
                </button>
              </div>
            </div>
            {openCards.meeting && (
              <div className="food-content">
                <p className="card-description">
                  Elevate your gathering with stylish venues, modern amenities,
                  and attentive service. Perfect for meetings, retreats, and
                  celebrations, we make every event seamless and memorable.
                </p>
                <figure className="card-gallery">
                  <img src={meetings1} alt="A room" className="card-image" />
                  <img
                    src={meetings2}
                    alt="A group of people enjoying party"
                    className="card-image"
                  />
                </figure>
              </div>
            )}
          </article>
        </section>

        <section className="discover-section">
          <figure className="discover-figure">
            <img src={discover} alt="" className="discover-image zoom-in" />
            <figcaption className="discover-caption">
              <p className="discover-text">Unwind or discover your</p>
              <p className="discover-text2">Personal Playground</p>
            </figcaption>
          </figure>
        </section>

        <section className="room-highlight-section">
          <figure className="room-highlight-figure">
            <img
              src={room1}
              alt="A clean room"
              className="room-highlight-image"
            />
            <img
              src={bathroom}
              alt="A bathroom"
              className="room-highlight-image-bathroom"
            />
            <figcaption className="room-highlight-caption">
              <p className="room-highlight-text">
                We are the best five-star holiday hotel in Switzerland!
              </p>
            </figcaption>
          </figure>
        </section>

        <MomentSection />
        <section className="golf-section">
          <figure className="golf-figure">
            <figcaption className="golf-caption">
              <p className="golf-overlay-subtitle">Swing Into Luxury</p>
              <p className="golf-overlay-title">Golf Retreat</p>
            </figcaption>
            <img
              src={golf1}
              alt="A girl is wearing sports clothes and playing golf outside."
              className="golf-image"
            />
          </figure>
        </section>

        <section className="rooms-view-section">
          <figure className="rooms-view-figure">
            <img
              src={view1}
              alt="A room with new view"
              className="rooms-view-image"
            />

            <figcaption className="rooms-view-caption">
              <div className="rooms-view-main">
                <h2 className="rooms-view-title">Rooms & View</h2>
                <p className="rooms-view-description">
                  At Nivara, experience newly renovated rooms designed in
                  soothing neutral tones with clean, minimalist lines—crafted to
                  offer pure relaxation. Floor-to-ceiling panoramic windows let
                  you savor the breathtaking beauty of South Tyrol as sunlight
                  dances across the landscape throughout the day.
                </p>
              </div>

              <div className="rooms-view-cta">
                <p className="rooms-view-cta-text">View Rooms</p>
              </div>
            </figcaption>
          </figure>
        </section>

        <section className="wellness-section">
          <div className="wellness-header">
            <h2 className="wellness-title">Ultimate Wellness Escape</h2>
            <p className="wellness-intro">
              At Nivara, where every detail is designed for pure relaxation.
              Surrounded by warm, calming tones, let the soothing waters and
              gentle warmth melt your stress away. Recharge, and experience
              wellness like never before.
            </p>
          </div>

          <div className="wellness-cards">
            <article className="wellness-card">
              <img
                src={swimmingPool}
                alt="Indoor swimming pool"
                className="wellness-image"
              />
              <p className="wellness-card-subtitle">Swimming Pool</p>
              <h3 className="wellness-card-title">Water</h3>
              <p className="wellness-card-description">
                Immerse yourself in the warm embrace of the pool, where every
                gentle ripple. Step in slowly, and let the serene beauty around
                you captivate your senses.
              </p>
            </article>

            <article className="wellness-card">
              <img
                src={heat}
                alt="Steam and sauna area"
                className="wellness-image"
              />
              <p className="wellness-card-subtitle">Steam & Sauna</p>
              <h3 className="wellness-card-title">Heat</h3>
              <p className="wellness-card-description">
                Relax in our panoramic sauna, let the gentle warmth embrace you,
                and enjoy the breathtaking views of the Dolomites.
              </p>
            </article>

            <article className="wellness-card">
              <img
                src={care}
                alt="A girl taking beauty treatment"
                className="wellness-image"
              />
              <p className="wellness-card-subtitle">Care</p>
              <h3 className="wellness-card-title">Beauty Care</h3>
              <p className="wellness-card-description">
                A wellness experience awaits at our beauty center, where
                soothing treatments and rejuvenating massages merge with the
                serene atmosphere to create something unforgettable.
              </p>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
