"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function AboutSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section id="about" className="section alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="section-label">
              <span className="line" /> Modern Engineering Legacy
            </div>

            <h2 className="section-title">
              A Trusted Partner In{" "}
              <span className="gradient-text">Power Distribution</span>
            </h2>

            <p>
              We are a leading transformer manufacturing company committed to
              delivering high-performance electrical solutions for industries,
              utilities, and infrastructure projects. With advanced
              manufacturing facilities, skilled professionals, and strict
              quality standards, we provide reliable and customized transformer
              solutions that meet customer expectations.
            </p>

            <div className="feature-cards">
              <div className="feature-card">
                <Icon name="settings" className="feature-icon" />

                <h4>Precision Built</h4>

                <p>
                  Engineered for maximum efficiency and long-term durability by
                  KHARE.
                </p>
              </div>

              <div className="feature-card">
                <Icon name="shield" className="feature-icon" />

                <h4>KHARE Quality</h4>

                <p>
                  Every unit undergoes comprehensive diagnostic verification in
                  our labs.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image reveal">
            <img
              src="/images/about/about-facility1.png"
              alt="KHARE Engineering Facility"
            />

            <div className="year-card">
              <strong>25+</strong>
              <span>Years of Industrial Excellence</span>
            </div>
          </div>
        </div>

        <div className="vision-grid">
          <div className="vision-card">
            <Icon name="eye" className="vision-icon" />

            <h3>Our Vision</h3>

            <p>
              To become a trusted and innovative leader in the transformer
              manufacturing industry by delivering energy-efficient, reliable,
              and high-quality power solutions that support industrial and
              infrastructure growth.
            </p>
          </div>

          <div className="vision-card alt">
            <Icon name="target" className="vision-icon" />

            <h3>Our Mission</h3>

            <p>
              Our mission is to manufacture world-class transformers and
              electrical solutions with superior quality, advanced technology,
              and customer-focused service while maintaining safety,
              sustainability, and operational excellence.
            </p>
          </div>
        </div>

        {/* ================= WHAT WE DO ================= */}

        <div className="what-we-do reveal">
          <div className="section-label">
            <span className="line" /> What We Do
          </div>

          <h2 className="section-title">
            Complete Transformer{" "}
            <span className="gradient-text">Solutions</span>
          </h2>

          <p>
            We specialize in the design, manufacturing, testing, supply,
            installation, and maintenance of power and distribution transformers
            for industrial, commercial, and utility applications.
          </p>

          <p>
            With a commitment to quality, precision engineering, and reliable
            performance, we provide customized transformer solutions that meet
            national and international standards.
          </p>
        </div>

        {/* ================= RECOGNITION & CERTIFICATION ================= */}

        <div className="recognition-section reveal">
          <div className="section-label">
            <span className="line" /> Recognition & Certification
          </div>

          <h2 className="section-title">
            Trusted Quality.{" "}
            <span className="gradient-text">Recognized Excellence.</span>
          </h2>

          <div className="recognition-grid">
            {/* ================= AWARD ================= */}

            <div className="recognition-card">
              <div
                className="recognition-image clickable-image"
                onClick={() =>
                  setSelectedImage({
                    src: "/images/about/award.jpg",
                    alt: "Maharashtra Government Gaurav-Chin Award",
                  })
                }
              >
                <img
                  src="/images/about/award.jpg"
                  alt="Maharashtra Government Gaurav-Chin Award"
                />

                <span className="image-zoom-hint">Click to view</span>
              </div>

              <div className="recognition-content">
                <h3>Maharashtra Government Gaurav-Chin</h3>

                <p>
                  Recognition awarded by the Maharashtra Government for
                  industrial contribution.
                </p>
              </div>
            </div>

            {/* ================= ISO CERTIFICATE ================= */}

            <div className="recognition-card">
              <div
                className="recognition-image clickable-image"
                onClick={() =>
                  setSelectedImage({
                    src: "/images/about/iso-certificate.jpg",
                    alt: "ISO 9001:2015 Certificate",
                  })
                }
              >
                <img
                  src="/images/about/iso-certificate.jpg"
                  alt="ISO 9001:2015 Certificate"
                />

                <span className="image-zoom-hint">Click to view</span>
              </div>

              <div className="recognition-content">
                <h3>ISO 9001:2015 Certification</h3>

                <p>
                  Quality Management System certification for design,
                  manufacture, supply and in-house servicing of transformers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= IMAGE LIGHTBOX ================= */}

      {selectedImage && (
        <div
          className="image-lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <button
            className="image-lightbox-close"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <div className="image-lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}
