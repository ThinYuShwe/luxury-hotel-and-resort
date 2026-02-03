import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Contact.css";
import "../index.css";
import mainBg from "../assets/contact/mainBg.jpg";
import dining from "../assets/contact/dining.jpg";

export function Contact() {
  return (
    <main>
      <Header />
      <div className="contact-section">
        <img src={mainBg} alt="" className="contact-section-bg" />

        <div className="contact-section-content">
          <p className="contact-section-subtitle">We’re here for you</p>
          <p className="contact-section-title">Stay in Touch</p>
        </div>
      </div>

      <div className="contact-section-collector">
        <section className="location-section">
          <figure className="location-figure">
            <img
              src={dining}
              alt="Dining area at Nivara Hotel & Resort"
              className="location-image"
            />
          </figure>

          <div className="location-content">
            <address className="location-address">
              <h1 className="location-title">Nivara Hotel & Resort</h1>
              <p className="location-text top-text">Via Lago di Sole 18 6612</p>
              <p className="location-text">Ascona Ticino</p>
              <p className="location-text">Switzerland</p>
              <p className="location-text phone">Phone: +41 91 555 12 34</p>
              <p className="location-text email">
                Email: reservations@domain.com
              </p>
            </address>

            <div className="location-distance">
              <h2 className="location-distance-title">Distance from Airport</h2>

              <ul className="location-distance-list">
                <li className="location-distance-item">
                  <p className="location-distance-type">
                    Arrival by train and boat
                  </p>
                  <p className="location-distance-time">2 hours</p>
                </li>

                <li className="location-distance-item">
                  <p className="location-distance-type">
                    Arrival by public transportation
                  </p>
                  <p className="location-distance-time">3.5 hours</p>
                </li>

                <li className="location-distance-item">
                  <p className="location-distance-type">
                    Arrival by private car
                  </p>
                  <p className="location-distance-time">2.5 hours</p>
                </li>

                <li className="location-distance-item">
                  <p className="location-distance-type">
                    Arrival by helicopter
                  </p>
                  <p className="location-distance-time">30 minutes</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-header">
            <h2 className="contact-form-title">Got questions?</h2>
            <p className="contact-form-subtitle">We are here to help!</p>
          </div>

          <form className="contact-form">
            <div className="contact-form-name">
              <div className="contact-form-field">
                <label htmlFor="firstName" className="contact-form-label">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="lastName" className="contact-form-label">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="contact-form-input"
                />
              </div>
            </div>
            <div className="contact-form-contact-info">
              <div className="contact-form-field">
                <label htmlFor="email" className="contact-form-label">
                  Email
                </label>
                <input id="email" type="email" className="contact-form-input" />
              </div>

              <div className="contact-form-field">
                <label htmlFor="phone" className="contact-form-label">
                  Phone
                </label>
                <input id="phone" type="text" className="contact-form-input" />
              </div>
            </div>
            <div className="contact-form-field message">
              <label htmlFor="message" className="contact-form-label">
                Message
              </label>
              <textarea
                id="message"
                className="contact-form-textarea"
              ></textarea>
            </div>

            <button className="contact-button">Send Message</button>
          </form>
        </section>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0607255881923!2d96.12820717492134!3d16.82334328397086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194c9eca2b75b%3A0xd6abf239773b3969!2sInfo%20Myanmar%20University!5e0!3m2!1sen!2smm!4v1767633601976!5m2!1sen!2smm"
            width="100%"
            height="450"
            style={{ border: 0 }} // ✅ object, not string
            allowFullScreen // ✅ camelCase
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
