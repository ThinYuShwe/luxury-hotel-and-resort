import guestRoom3 from "../assets/homePage/guest-room3.jpg";
import wellness from "../assets/homePage/wellness.jpg";
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
import bathroom from "../assets/homePage/bathroom.png";
import golf1 from "../assets/homePage/golf1.avif";
import view1 from "../assets/homePage/view1.webp";

import swimmingPool from "../assets/homePage/swimmingPool.webp";
import heat from "../assets/homePage/heat.jpg";
import care from "../assets/homePage/care.avif";

export const homePageData = {
  stay: {
    main: {
      title: "Stay With Us",
      description: `Experience sophistication in our elegantly designed rooms and
              suites, where contemporary style meets timeless charm. Enjoy
              spacious interiors, modern furnishings, and breathtaking natural
              views — your serene escape.`,
    },
    cards: [
      {
        title: "Rooms",
        imgSrc: guestRoom3,
        imgAlt: "Guest room interior",
        buttonText: "View Rooms",
        buttonAction: null,
      },
      {
        title: "Wellness",
        imgSrc: wellness,
        imgAlt: "A girl sitting in a bathtub",
        buttonText: "View Packages",
        buttonAction: null,
      },
    ],
  },

  offerings: [
    {
      title: "Experiences",
      content: ` Every experience is crafted to elevate your stay beyond the
                  ordinary. From curated cultural journeys to immersive wellness
                  rituals and adventure-filled excursions, each moment is
                  designed to help you unwind.`,
      images: [
        { src: experience1, alt: "Fancy outdoor restaurant" },
        { src: experience2, alt: "Kitchen" },
      ],
    },
    {
      title: "Adventure Activities",
      content: `Enjoy outdoor adventures that blend excitement with
                  breathtaking scenery. From scenic treks to water activities,
                  each experience energizes your stay and creates lasting
                  memories.`,
      images: [
        {
          src: adventure1,
          alt: "A couple climbing mountains",
        },
        { src: adventure2, alt: "Outdoor Camping" },
      ],
    },

    {
      title: "Foods & Drinks",
      content: `Savor dishes and drinks crafted with fresh, local ingredients
                  and global flair. From gourmet meals to casual bites and
                  signature cocktails, every flavor enhances your stay.`,
      images: [
        { src: food1, alt: "Food" },
        { src: food2, alt: "Two women holding glass of wine" },
      ],
    },
    {
      title: "Meetings & Events",
      content: ` Elevate your gathering with stylish venues, modern amenities,
                  and attentive service. Perfect for meetings, retreats, and
                  celebrations, we make every event seamless and memorable.`,
      images: [
        { src: meetings1, alt: "A room" },
        { src: meetings2, alt: "A group of people enjoying party" },
      ],
    },
  ],

  discover: {
    text1: "Unwind or discover your",
    text2: "Personal Playground",
    imgSrc: discover,
    imgAlt: "Discover your personal playground",
  },

  roomHightLight: {
    text: "We are the best five-star holiday hotel in Switzerland!",
    images: [
      { src: room1, alt: "A clean room" },
      { src: bathroom, alt: "room-highlight-image-bathroom" },
    ],
  },

  golf: {
    subtitle: "Swing Into Luxury",
    title: "Golf Retreat",
    imgSrc: golf1,
    imgAlt: "A girl is wearing sports clothes and playing golf outside.",
  },

  roomsView: {
    title: "Rooms & View",
    description: `At Nivara, experience newly renovated rooms designed in
                  soothing neutral tones with clean, minimalist lines—crafted to
                  offer pure relaxation. Floor-to-ceiling panoramic windows let
                  you savor the breathtaking beauty of South Tyrol as sunlight
                  dances across the landscape throughout the day.`,
    imgSrc: view1,
    imgAlt: "A room with new view",
    ctaText: "View Rooms",
  },

  wellness: {
    title: "Ultimate Wellness Escape",
    description: `At Nivara, where every detail is designed for pure relaxation.
              Surrounded by warm, calming tones, let the soothing waters and
              gentle warmth melt your stress away. Recharge, and experience
              wellness like never before.`,

    cards: [
      {
        title: "Water",
        subtitle: "Swimming Pool",
        description: `Immerse yourself in the warm embrace of the pool, where every
                gentle ripple. Step in slowly, and let the serene beauty around
                you captivate your senses.`,
        imgSrc: swimmingPool,
        imgAlt: "Indoor swimming pool",
      },
      {
        title: "Heat",
        subtitle: "Steam & Sauna",
        description: `Relax in our panoramic sauna, let the gentle warmth embrace you,
                and enjoy the breathtaking views of the Dolomites.`,
        imgSrc: heat,
        imgAlt: "Steam and sauna area",
      },
      {
        title: "Beauty Care",
        subtitle: "Care",
        description: `A wellness experience awaits at our beauty center, where
                soothing treatments and rejuvenating massages merge with the
                serene atmosphere to create something unforgettable.`,
        imgSrc: care,
        imgAlt: "A girl taking beauty treatment",
      },
    ],
  },
};
