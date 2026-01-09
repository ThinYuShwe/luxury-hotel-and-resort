import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "./Rooms.css";
import "../index.css";
import { MomentSection } from "../components/MomentSection";
import mainBg from "../assets/roomsAvailable/mainBg.jpg";
import room1 from "../assets/roomsAvailable/room1.jpg";
import room2 from "../assets/roomsAvailable/room2.jpg";
import room3 from "../assets/roomsAvailable/room3.avif";
import room4 from "../assets/roomsAvailable/room4.avif";
import room5 from "../assets/roomsAvailable/room5.avif";

export function Rooms() {
  return (
    <main>
      <Header />
      <div className="rooms-image-card">
        <img src={mainBg} alt="" className="rooms-image-card-media" />
        <div className="rooms-image-card-content">
          <p className="rooms-image-card-subtitle">Overnight Stay</p>
          <p className="rooms-image-card-title">Rooms</p>
        </div>
      </div>

      <section className="rooms-div-collection">
        <div className="text-block">
          <h1 className="text-block-title">A Room with panoramic view</h1>
          <p className="text-block-description">
            Our rooms embrace the beauty of simplicity. Gentle colors, clean
            forms, and natural elements create a cozy atmosphere — but it’s the
            breathtaking Switzerland view through large windows that makes each
            space unforgettable.
          </p>
        </div>

        <div className="room-gallery">
          <figure className="room-card">
            <div className="room-card-media">
              <img src={room1} alt="" className="room-card-image" />
              <div className="room-pay">
                <p>$25/ NIGHT</p>
              </div>
            </div>

            <figcaption className="room-card-caption">
              Small Grandlit Double Room with Balcony
            </figcaption>
          </figure>

          <figure className="room-card">
            <div className="room-card-media">
              <img src={room2} alt="" className="room-card-image" />
              <div className="room-pay">
                <p>$30/ NIGHT</p>
              </div>
            </div>

            <figcaption className="room-card-caption">
              Corner Double Room Comfort
            </figcaption>
          </figure>

          <figure className="room-card">
            <div className="room-card-media">
              <img src={room3} alt="" className="room-card-image" />
              <div className="room-pay">
                <p>$29/ NIGHT</p>
              </div>
            </div>

            <figcaption className="room-card-caption">
              Classic Junior Suite with Balcony
            </figcaption>
          </figure>

          <figure className="room-card">
            <div className="room-card-media">
              <img src={room4} alt="" className="room-card-image" />
              <div className="room-pay">
                <p>$65/ NIGHT</p>
              </div>
            </div>

            <figcaption className="room-card-caption">
              Wellbeing Luxury Two Bedroom Master Suite
            </figcaption>
          </figure>

          <figure className="room-card">
            <div className="room-card-media">
              <img src={room4} alt="" className="room-card-image" />
              <div className="room-pay">
                <p>$45/ NIGHT</p>
              </div>
            </div>

            <figcaption className="room-card-caption">
              Superior Double Room with Balcony
            </figcaption>
          </figure>

          <figure className="room-card">
            <div className="room-card-media">
              <img src={room5} alt="" className="room-card-image" />
              <div className="room-pay">
                <p>$45/ NIGHT</p>
              </div>
            </div>

            <figcaption className="room-card-caption">
              Comfort Double Room with Mountain View
            </figcaption>
          </figure>
        </div>
        <MomentSection />
      </section>
      <Footer />
    </main>
  );
}
