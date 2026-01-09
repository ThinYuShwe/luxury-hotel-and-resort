import unforgettableMoments1 from "../assets/homePage/unforgettableMoments1.jpg";
import smallDate from "../assets/homePage/smallDate.png";
export function MomentSection() {
  return (
    <section className="moments-section">
      <div className="moments-figure">
        <img
          src={unforgettableMoments1}
          alt="A couple having their moments while eating and talking"
          className="moments-image"
        />

        <div className="moments-caption">
          <div className="moment-text-main">
            <h2 className="moments-title">
              Exclusive Stays, Unforgettable Moments
            </h2>
            <p className="moments-description">
              Nivara Hotels offers personalized stays tailored to your every
              need and desire. Our dedicated team works tirelessly to deliver an
              exclusive and unforgettable holiday experience at the iconic Hotel
              Aguere in the heart of Switzerland. With Nivara Hotels, you have
              the freedom to shape your getaway exactly the way you want.
            </p>
          </div>
          <img
            src={smallDate}
            alt="A couple is dating"
            className="moments-image2"
          />
          <div className="golf-text-main">
            <h2 className="golf-title">Luxury Beyond the Ordinary</h2>
            <p className="golf-description">
              Nivara Hotels presents exclusive five-star escapes in breathtaking
              locations—many right on the beachfront. Hotel Fariones 5* invites
              you to enjoy Puerto del Carmen’s three main beaches, lush
              surroundings, and an unforgettable atmosphere. It offers a serene
              family-friendly retreat with spacious rooms, world-class dining,
              and endless entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
