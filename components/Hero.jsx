"use client";
import Icon from "./Icon";

export default function Hero() {
  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal">
          <div className="eyebrow">
            <Icon name="zap" /> INDUSTRIAL ENGINEERING LEADER
          </div>
          <h1 className="hero-title">
            Powering Industries with{" "}
            <span className="gradient-text">Reliable Transformer</span>{" "}
            Solutions.
          </h1>
          <p className="hero-copy">
           Trusted Partner for Efficient Electrical Power Systems
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scroll("products")}
            >
              Explore Solutions <Icon name="right" />
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scroll("services")}
            >
              Our Expertise
            </button>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <strong>
                <Icon name="shield" /> Certified Quality
              </strong>
              <span>IS 1180 &amp; IS 2026</span>
            </div>
            <div className="hero-feature">
              <strong>
                <Icon name="zap" /> Energy Efficient
              </strong>
              <span>Low Loss Designs</span>
            </div>
            <div className="hero-feature">
              <strong>
                <Icon name="cpu" /> Precision Built
              </strong>
              <span>Advanced Manufacturing</span>
            </div>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-glow" />
          <div className="hero-image-wrap">
            <img
              src="/images/hero/hero-transformer.jpg"
              alt="KHARE Power Transformer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
