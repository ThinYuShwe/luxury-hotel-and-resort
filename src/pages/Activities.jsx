import { Header } from "../components/Header";
import "./Activities.css";
import "../index.css";
import { Footer } from "../components/Footer";

import mainHorse from "../assets/activitesPage/horseMain.jpg";
import one from "../assets/activitesPage/one.avif";
import two from "../assets/activitesPage/two.avif";
import three from "../assets/activitesPage/three.avif";
import four from "../assets/activitesPage/four.avif";
import five from "../assets/activitesPage/five.avif";
import adventure1 from "../assets/activitesPage/adventure1.jpg";
import adventure2 from "../assets/activitesPage/adventure2.jpg";
import adventure3 from "../assets/activitesPage/adventure3.jpg";
import adventure4 from "../assets/activitesPage/adventure4.jpg";
import adventure5 from "../assets/activitesPage/adventure5.jpg";
import adventure6 from "../assets/activitesPage/adventure6.jpg";
import diving from "../assets/activitesPage/diving.jpg";

export function ActivitiesPage() {
  return (
    <main>
      <Header />
      <div className="activities-hero">
        <img
          src={mainHorse}
          alt="Horseback riding experience in a scenic outdoor landscape"
          className="activities-hero-image"
        />
        <div className="activities-hero-text">
          <p className="activities-hero-subtitle">Activities & Adventures</p>
          <p className="activities-hero-title">
            Experience the Wild & Wonderful Outdoors
          </p>
        </div>
      </div>

      <div className="activities-section-collection">
        <section className="adventures-intro">
          <h1 className="adventures-intro-title">
            Endless adventures await at Nivara
          </h1>
          <p className="adventures-intro-description">
            At Nivara, adventure takes many forms — from scenic hikes and
            tranquil swims to moments of pure relaxation surrounded by
            breathtaking views. Every experience is crafted to help you
            rediscover balance, joy, and the beauty of the Swiss outdoors.
          </p>
        </section>

        <section className="experiences-section">
          <div className="experiences-gallery">
            <img
              src={one}
              alt="Two people riding horses"
              className="experiences-image"
            />
            <img
              src={two}
              alt="Girl swimming in a pool"
              className="experiences-image"
            />
            <img
              src={three}
              alt="Man standing on a mountain peak"
              className="experiences-image"
            />
            <img
              src={four}
              alt="Woman enjoying a water sport"
              className="experiences-image"
            />
            <img
              src={five}
              alt="Girl standing on a mountain viewpoint"
              className="experiences-image"
            />
          </div>

          <div className="experiences-content">
            <p className="experiences-description">
              Discover the joy in life’s little moments. At Nivara, we invite
              you to create unforgettable memories through personalized
              experiences that let you feel the magic of each destination—its
              culture, history, gastronomy, and people. Every experience is
              thoughtfully crafted to enrich your stay, making it even more
              unique. Whether you’re seeking a romantic escape, a family
              adventure, a business trip, or a spiritual retreat, we have the
              perfect journey for you. Embrace a getaway filled with surprises,
              emotions, and moments you’ll treasure forever.
            </p>
          </div>
        </section>

        <section className="adventures-section">
          <div className="adventures-intro2">
            <h2 className="adventures-title">Adventures await at Nivara</h2>
            <p className="adventures-description">
              Endless adventures await at Nivara — where every day invites you
              to explore, unwind, and reconnect with nature. From peaceful
              mountain walks to thrilling outdoor experiences, every moment here
              is designed to awaken your spirit of adventure.
            </p>
          </div>

          {/* Adventures grid */}
          <div className="adventures-grid">
            <article className="adventure-card">
              <img
                src={adventure1}
                alt="Guided island tour through scenic landscapes"
                className="adventure-image"
              />
              <p className="adventure-tag">Guided tours</p>
              <h3 className="adventure-title">Guided Island Tours</h3>
              <p className="adventure-description">
                Explore the hidden gems of the islands with our Guided Island
                Tours. Led by knowledgeable local guides, each tour takes you
                through breathtaking landscapes, vibrant culture, and historic
                landmarks, offering an unforgettable experience.
              </p>
            </article>

            <article className="adventure-card">
              <img
                src={adventure2}
                alt="Water sports and ocean activities"
                className="adventure-image"
              />
              <p className="adventure-tag">Water adventures</p>
              <h3 className="adventure-title">Ocean Adventures</h3>
              <p className="adventure-description">
                Dive into excitement with our Ocean Adventures. From surfing and
                sailing to snorkeling and exploring hidden coves, every activity
                brings you closer to the thrill and beauty of the sea. Embrace
                the waves, feel the freedom, and create unforgettable memories.
              </p>
            </article>

            <article className="adventure-card">
              <img
                src={adventure3}
                alt="Man surfing ocean waves"
                className="adventure-image"
              />
              <p className="adventure-tag">Surfing</p>
              <h3 className="adventure-title">Sea Surf Adventure</h3>
              <p className="adventure-description">
                Feel the thrill of the ocean with our Sea Surf Adventure.
                Whether you’re a beginner or an experienced surfer, ride the
                waves, embrace the sea breeze, and make unforgettable memories
                on the water.
              </p>
            </article>

            <article className="adventure-card">
              <img
                src={adventure4}
                alt="Personalized day tour through scenic Swiss landscapes"
                className="adventure-image"
              />
              <p className="adventure-tag">Personal tours</p>
              <h3 className="adventure-title">Personalised Day Tours</h3>
              <p className="adventure-description">
                Experience Switzerland your way with our Personalised Day Tours.
                Each journey is tailored to your interests, revealing stunning
                landscapes, rich culture, and hidden gems — all with exceptional
                comfort and care.
              </p>
            </article>

            <article className="adventure-card">
              <img
                src={adventure5}
                alt="Ceramic pottery workshop experience"
                className="adventure-image"
              />
              <p className="adventure-tag">Creative</p>
              <h3 className="adventure-title">Ceramic Creation</h3>
              <p className="adventure-description">
                Try your hand at Ceramic Creation, a fun and relaxing activity
                where you can shape and paint your own pottery. Guided by our
                skilled artisans, you’ll create a beautiful keepsake to remember
                your stay.
              </p>
            </article>

            <article className="adventure-card">
              <img
                src={adventure6}
                alt="Cliff diving into clear blue water"
                className="adventure-image"
              />
              <p className="adventure-tag">Adventure</p>
              <h3 className="adventure-title">Cliff Diving</h3>
              <p className="adventure-description">
                Experience the ultimate adrenaline rush with Cliff Diving. Leap
                from breathtaking cliffs into crystal-clear waters, surrounded
                by stunning natural beauty. It’s an adventure that blends
                courage, excitement, and unforgettable memories.
              </p>
            </article>
          </div>
        </section>

        <section className="underwater-section">
          <figure className="underwater-figure">
            <img
              src={diving}
              alt="Person diving underwater in clear blue sea"
              className="underwater-image"
            />
            <figcaption className="underwater-caption">
              <p className="underwater-caption-subtitle">
                Dive in & discover the
              </p>
              <p className="underwater-caption-title">Underwater World.</p>
            </figcaption>
          </figure>
        </section>
      </div>
      <Footer />
    </main>
  );
}
