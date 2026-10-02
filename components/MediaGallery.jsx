"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

import { galleryImages } from "../data/gallery";

const categories = [
  "All",
  "Manufacturing",
  "Testing",
  "Projects",
  "Installation",
  "Maintenance",
];

export default function MediaGallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = galleryImages.filter(
    (x) => active === "All" || x.filter === active,
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="center-heading">
          <div className="section-label">
            <Icon name="eye" /> Industrial Showcase
          </div>

          <h2 className="section-title">
            Inside <span className="gradient-text">KHARE Manufacturing</span>
          </h2>

          <p className="section-copy">
            Explore our manufacturing excellence, transformer production
            process, testing facilities, and successful global installations.
          </p>
        </div>

        <div className="filters">
          {categories.map((c) => (
            <button
              className={`filter ${active === c ? "active" : ""}`}
              key={c}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((img, i) => (
            <div
              className={`gallery-item ${i === 0 ? "big" : ""}`}
              key={img.id}
              onClick={() => setSelected(img)}
            >
              <img src={img.image} alt={img.title} />

              <div className="gallery-overlay">
                <span>{img.category}</span>
                <strong>{img.title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="modal" style={{ maxWidth: 1000 }}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <Icon name="close" />
            </button>

            <div style={{ padding: 16 }}>
              <img
                src={selected.image}
                alt={selected.title}
                style={{
                  display: "block",
                  width: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                  borderRadius: 18,
                }}
              />

              <div style={{ padding: "18px 10px 8px" }}>
                <div className="section-label">{selected.category}</div>

                <h3
                  style={{
                    fontFamily: "Space Grotesk",
                    fontSize: 28,
                    margin: "10px 0 0",
                  }}
                >
                  {selected.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
