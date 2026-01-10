import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Booking.css";
import "../index.css";
import mainBg from "../assets/booking/mainBg.jpg";

export function Booking() {
  return (
    <main>
      <Header />
      <div className="banner">
        <img src={mainBg} alt="" className="banner-image" />

        <div className="banner-content">
          <p className="banner-subtitle">Your stay starts here</p>
          <p className="banner-title">Book Your Stay</p>
        </div>
      </div>
      <div className="booking-section-collector">
        <section className="reservation">
          <h1 className="reservation-heading">
            Fill in your details to complete your reservation.
          </h1>

          <h3 className="reservation-subheading">Booking details</h3>

          <form className="reservation-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkIn" className="form-label">
                  Check-in
                </label>
                <input type="date" id="checkIn" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="checkOut" className="form-label">
                  Check-out
                </label>
                <input type="date" id="checkOut" className="form-input" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="noOfGuest" className="form-label">
                  No. of guest
                </label>
                <input type="number" id="noOfGuest" className="form-input" min="1" />
              </div>

              <div className="form-group">
                <label htmlFor="roomType" className="form-label">
                  Room type
                </label>
                <select id="roomType" className="form-select">
                  <option value="">Comfort & Standard Rooms</option>
                  <option value="">Junior & Premium Suites</option>
                  <option value="">Luxury & Family Suites</option>
                  <option value="">Signature Rooms</option>
                </select>
              </div>
            </div>
          </form>
        </section>

        <section className="booking-contact-form-section">
          <h2 className="booking-contact-form-title">Contact details</h2>
          <form className="booking-contact-form" action="">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="form-input"
                />
              </div>
            </div>

            <button className="booking-contact-form-button">
              Send Message
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </main>
  );
}
