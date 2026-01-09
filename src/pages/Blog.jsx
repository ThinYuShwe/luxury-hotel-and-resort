import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Blog.css";
import "../index.css";
import mainBg from "../assets/blog/mainBg.jpg";
import img1 from "../assets/blog/img1.avif";
import img2 from "../assets/blog/img2.jpg";
import img3 from "../assets/blog/img3.jpg";
import img4 from "../assets/blog/img4.avif";
import img5 from "../assets/blog/img5.webp";
import img6 from "../assets/blog/img6.jpg";
import img7 from "../assets/blog/img7.avif";
import img8 from "../assets/blog/img8.webp";
import img9 from "../assets/blog/img9.avif";

export function Blog() {
  return (
    <main>
      <Header />
      <div className="blog-hero">
        <img src={mainBg} alt="" className="blog-hero-image" />

        <div className="blog-hero-content">
          <p className="blog-hero-subtitle">Travel Tips</p>
          <p className="blog-hero-title">Blog</p>
        </div>
      </div>

      <section className="figures">
        <div className="figures-part1">
          <figure className="figure-1">
            <div className="figure-1-image-wrapper">
              <img
                src={img1}
                alt="Outdoor adventure activities near the resort"
                className="figure-1-image"
              />
            </div>
            <figcaption className="figure-1-caption">
              Thrills and adventure just steps from your door
            </figcaption>
          </figure>

          <figure className="figure-2">
            <div className="figure-2-image-wrapper">
              <img
                src={img2}
                alt="Experience adventure like never before"
                className="figure-2-image"
              />
            </div>
            <figcaption className="figure-2-caption">
              Experience adventure like never before
            </figcaption>
          </figure>

          <figure className="figure-3">
            <div className="figure-3-image-wrapper">
              <img
                src={img3}
                alt="Vacation meets heart-pounding excitement"
                className="figure-3-image"
              />
            </div>
            <figcaption className="figure-3-caption">
              Vacation meets heart-pounding excitement
            </figcaption>
          </figure>
        </div>
        <div className="figures-part2">
          <figure className="figure-4">
            <div className="figure-4-image-wrapper">
              <img
                src={img4}
                alt="Experience the wild adventures in luxury"
                className="figure-4-image"
              />
            </div>
            <figcaption className="figure-4-caption">
              Experience the wild adventures in luxury
            </figcaption>
          </figure>

          <figure className="figure-5">
            <div className="figure-5-image-wrapper">
              <img
                src={img5}
                alt="From mountain peaks to ocean waves"
                className="figure-5-image"
              />
            </div>
            <figcaption className="figure-5-caption">
              From mountain peaks to ocean waves
            </figcaption>
          </figure>

          <figure className="figure-6">
            <div className="figure-6-image-wrapper">
              <img
                src={img6}
                alt="From sunrise peaks to sunset waves"
                className="figure-6-image"
              />
            </div>
            <figcaption className="figure-6-caption">
              From sunrise peaks to sunset waves
            </figcaption>
          </figure>
        </div>
        <div className="figures-part3">
          <figure className="figure-7">
            <div className="figure-7-image-wrapper">
              <img
                src={img7}
                alt="Chase sunsets and adrenaline together"
                className="figure-7-image"
              />
            </div>
            <figcaption className="figure-7-caption">
              Chase sunsets and adrenaline together
            </figcaption>
          </figure>

          <figure className="figure-8">
            <div className="figure-8-image-wrapper">
              <img
                src={img8}
                alt="Dive, climb, and explore on your dream getaway"
                className="figure-8-image"
              />
            </div>
            <figcaption className="figure-8-caption">
              Dive, climb, and explore on your dream getaway
            </figcaption>
          </figure>

          <figure className="figure-9">
            <div className="figure-9-image-wrapper">
              <img
                src={img9}
                alt="Escape, explore, and indulge in luxury"
                className="figure-9-image"
              />
            </div>
            <figcaption className="figure-9-caption">
              Escape, explore, and indulge in luxury
            </figcaption>
          </figure>
        </div>
      </section>
      <Footer />
    </main>
  );
}
