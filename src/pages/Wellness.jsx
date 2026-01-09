import { Header } from "../components/Header.jsx";
import "./Wellness.css";
import "../index.css";
import { Footer } from "../components/Footer.jsx";
import mainBg from "../assets/wellness/mainBg.jpg";
import pool from "../assets/wellness/pool.avif";
import outdoorPool1 from "../assets/wellness/outdoorPool1.jpg";
import outdoorPool2 from "../assets/wellness/outdoorPool2.jpg";
import bathTub from "../assets/wellness/bathtub.jpg";
import massage from "../assets/wellness/massage.jpg";
import bathTub2 from "../assets/wellness/bathtub2.jpg";
import heat from "../assets/wellness/heat.jpg";
import view1 from "../assets/wellness/view1.jpg";
import smallHeat from "../assets/wellness/smallHeat.png";

export function Wellness() {
  return (
    <main>
      <Header />

      <figure className="wellness-hero">
        <img src={mainBg} className="wellness-hero-image" />
        <figcaption className="wellness-hero-caption">
          <p className="wellness-hero-subtitle">Ultimate wellness escape</p>
          <p className="wellness-hero-title">
            Wellness Meets the Harmony of Nature
          </p>
        </figcaption>
      </figure>
      <div className="wellness-section-collection">
        <section className="wellness-page-intro">
          <h1 className="wellness-page-intro-title">Reconnect yourself</h1>
          <p className="wellness-page-intro-text">
            We’re fortunate to be surrounded by one of the most breathtaking
            landscapes in Switzerland. At the very spot where the view is at its
            finest, we created the wellness center of our hotel—a sanctuary
            where clean, modern lines, elegant fabrics, and soft tones come
            together to invite you into a world of pure relaxation and
            tranquility.
          </p>
        </section>

        <figure className="wellness-page-figure">
          <div className="wellness-page-first-image-wrapper">
            <img
              src={pool}
              alt="Indoor wellness pool"
              className="wellness-page-figure-image1"
            />
          </div>
          <div className="wellness-page-figure-images">
            <div className="wellness-page-image-wrapper">
              <img
                src={outdoorPool1}
                alt="Outdoor wellness pool with mountain view"
                className="wellness-page-figure-image"
              />
            </div>

            <div className="wellness-page-image-wrapper">
              <img
                src={outdoorPool2}
                alt="Heated outdoor pool overlooking the Swiss Alps"
                className="wellness-page-figure-image"
              />
            </div>
          </div>

          <figcaption className="wellness-page-figure-caption">
            <h2 className="wellness-page-figure-title">Water</h2>
            <p className="wellness-page-figure-text">
              Immerse yourself in elegance and calm. Our heated pool offers a
              luxurious escape surrounded by panoramic Swiss views. Whether
              you’re unwinding after a day in the mountains or starting your
              morning in serenity, every swim feels like pure indulgence.
            </p>
          </figcaption>
        </figure>

        <section className="spa-section">
          <figure className="spa-figure">
            <img
              src={bathTub}
              alt="Luxury spa bathtub"
              className="spa-figure-image"
            />
          </figure>

          <figure className="spa-figures">
            <div className="spa-figure-image-wrapper">
              <img
                src={massage}
                alt="Relaxing full-body massage"
                className="spa-figure-image"
              />
            </div>

            <div className="spa-figure-image-wrapper">
              <img
                src={bathTub2}
                alt="Private wellness bathtub"
                className="spa-figure-image"
              />
            </div>
          </figure>

          <article className="spa-article">
            <h2 className="spa-article-title">Massage & Spa</h2>
            <p className="spa-article-text">
              Reconnect with yourself in harmony with nature. Our spa combines
              natural elements, gentle aromas, and expert massage techniques to
              release tension and rejuvenate body and mind. Let the peace of the
              Swiss mountains enhance every moment of your wellness journey.
            </p>
          </article>
        </section>

        <section className="spa-section-desktop">
          <figure className="spa-figure-desktop">
            <figcaption className="spa-figure-caption-desktop">
              <h2 className="spa-figure-title-desktop">Massage & Spa</h2>
              <p className="spa-figure-text-desktop">
                Reconnect with yourself in harmony with nature. Our spa combines
                natural elements, gentle aromas, and expert massage techniques
                to release tension and rejuvenate body and mind. Let the peace
                of the Swiss mountains enhance every moment of your wellness
                journey.
              </p>
            </figcaption>
            <div className="spa-figure-desktop-image-wrapper">
              <img
                src={massage}
                alt="Relaxing full-body massage"
                className="spa-figure-image-desktop"
              />
            </div>
          </figure>
          <div className="spa-figures-desktop">
            <div className="spa-figures-desktop-image-wrapper">
              <img
                src={bathTub}
                alt=""
                className="spa-figures-desktop-image1"
              />
            </div>
            <div className="spa-figures-desktop-image-wrapper">
              <img
                src={bathTub2}
                alt=""
                className="spa-figures-desktop-image"
              />
            </div>
          </div>
        </section>

        <section className="wellness-page-heat">
          <figure className="wellness-page-heat-image">
            <img
              src={heat}
              alt="Steam and sauna area"
              className="wellness-page-heat-figure"
            />
          </figure>

          <div className="wellness-page-heat-content">
            <article className="heat-article">
              <h2 className="wellness-page-heat-title">
                Where Heat Heals and Harmony Begins
              </h2>
              <p className="wellness-page-heat-text">
                Experience deep relaxation in our steam and sauna rooms — where
                warmth, calm, and pure tranquility meet. Let the soothing heat
                ease your muscles, cleanse your skin, and rejuvenate your senses
                as you unwind in a peaceful Swiss setting.
              </p>
            </article>
            <img
              src={smallHeat}
              alt=""
              className="wellness-page-small-heat-image"
            />
            <article className="sauna-article">
              <h2 className="sauna-section-title">
                Unwind in Warmth and Tranquility
              </h2>
              <p className="sauna-section-text">
                Clean design, gentle warmth, and pure relaxation — our steam and
                sauna rooms offer a quiet space to recharge. Step inside,
                unwind, and let the heat melt away the day.
              </p>
            </article>
          </div>
        </section>

        <section className="view-section">
          <figure className="view-figure">
            <img
              src={view1}
              alt="Wellness bathtub with nature view"
              className="view-figure-image"
            />
            <figcaption className="view-figure-caption">
              <p className="view-figure-subtitle">Scenery</p>
              <h2 className="view-figure-title">Breathtaking Nature View</h2>
              <p className="view-figure-text">
                Experience the beauty of the Swiss Alps from our wellness
                center.
              </p>
              <div className="view-figure-buttons">
                <button className="view-figure-button"></button>
                <button className="view-figure-button"></button>
                <button className="view-figure-button"></button>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>
      <Footer />
    </main>
  );
}
