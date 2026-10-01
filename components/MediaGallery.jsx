"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

const galleryImages = [
  {
    id: "g1",
    title: "Main Factory Floor",
    category: "Manufacturing Facility",
    filter: "Manufacturing",
    image:
      "https://static.wixstatic.com/media/2c092d_826975ac9aeb4f8eaa5205b3fbe6d628~mv2.jpg/v1/fill/w_640%2Ch_426%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/2c092d_826975ac9aeb4f8eaa5205b3fbe6d628~mv2.jpg",
  },
  {
    id: "g2",
    title: "Core Winding Section",
    category: "Production Unit",
    filter: "Manufacturing",
    image:
      "https://www.yaweitransformer.com/uploads/40950/list/p20260611134130c09e8.jpg",
  },
  {
    id: "g3",
    title: "High Voltage Test Lab",
    category: "Testing & Quality Control",
    filter: "Testing",
    image:
      "https://www.yaweitransformer.com/uploads/40950/news/p20260401095539745d5.jpg?size=592x0",
  },
  {
    id: "g4",
    title: "Transformer Assembly Line",
    category: "Transformer Assembly",
    filter: "Manufacturing",
    image:
      "https://www.trishulengineerings.com/assets/img/all/home/about-img-1.webp",
  },
  {
    id: "g5",
    title: "Industrial Transformer Facility",
    category: "Project & Manufacturing",
    filter: "Projects",
    image:
      "https://www.scotech-electrical.com/Content/uploads/2022644196/20221202133427cc4d6ac540de451d8d42949809d904ad.jpg",
  },
  {
    id: "g6",
    title: "Power Grid Installation",
    category: "Installed Transformers",
    filter: "Installation",
    image:
      "https://naytenergy.com/Content/img/services/ElectricalPowerSystems/HV_Transformer_Maintenance_Services.jpg",
  },
  {
    id: "g7",
    title: "On-site Maintenance",
    category: "Maintenance Activities",
    filter: "Maintenance",
    image:
      "https://www.gridsync.in/assets/img/services/transformer-service.jpg",
  },
 {
  id: "g8",
  title: "Technical Engineering Team",
  category: "Engineering & Technical Team",
  filter: "Manufacturing",
  image:
    "https://www.vatransformer.com/wp-content/uploads/2023/05/Photo-020-crop-scaled-1024x792-1.jpg",
},
];

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
              <img
                src={img.image}
                alt={img.title}
              />

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
          onMouseDown={(e) =>
            e.target === e.currentTarget && setSelected(null)
          }
        >
          <div className="modal" style={{ maxWidth: 1000 }}>

            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
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

                <div className="section-label">
                  {selected.category}
                </div>

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