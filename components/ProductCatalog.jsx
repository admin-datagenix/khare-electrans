"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { products } from "@/data/products";

export default function ProductCatalog() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const openProductFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      const product = products.find(
        (item) => item.slug === hash
      );

      if (product) {
        setSelected(product);

        setTimeout(() => {
          document
            .getElementById(product.slug)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
        }, 100);
      }
    };

    openProductFromHash();

    window.addEventListener("hashchange", openProductFromHash);

    return () => {
      window.removeEventListener(
        "hashchange",
        openProductFromHash
      );
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeModal = () => {
    setSelected(null);

    if (
      products.some(
        (product) =>
          `#${product.slug}` === window.location.hash
      )
    ) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );
    }
  };

  return (
    <section id="products" className="section">
      <div className="container">

        <div className="center-heading">
          <div className="section-label">
            <Icon name="zap" /> Product Catalog
          </div>

          <h2 className="section-title">
            World-Class{" "}
            <span className="gradient-text">
              Transformers
            </span>
          </h2>

          <p className="section-copy">
            Engineering excellence designed for heavy
            industrial loads and high-voltage grid stability.
          </p>
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <article
              id={product.slug}
              className="product-card"
              key={product.id}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-badge">
                  {product.voltageClass ||
                    product.category}
                </span>
              </div>

              <div className="product-body">

                <h3>{product.name}</h3>

                <p>
                  {product.shortDescription ||
                    product.description}
                </p>

                <div className="product-specs">

                  <div className="spec">
                    <small>Capacity</small>
                    <strong>
                      {product.capacity || "N/A"}
                    </strong>
                  </div>

                  <div className="spec">
                    <small>Standard</small>
                    <strong>
                      {product.standard ||
                        "IS Verified"}
                    </strong>
                  </div>

                </div>

                <ul className="feature-list">
                  {product.features
                    .slice(0, 3)
                    .map((feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    ))}
                </ul>

              </div>

              <div className="product-footer">
                <button
                  className="product-btn"
                  onClick={() =>
                    setSelected(product)
                  }
                >
                  <Icon name="info" />
                  View Specifications
                </button>
              </div>

            </article>
          ))}

        </div>
      </div>


      {/* ================= PRODUCT MODAL ================= */}

      {selected && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="modal">

            <button
              className="modal-close"
              aria-label="Close"
              onClick={closeModal}
            >
              <Icon name="close" />
            </button>

            <div className="modal-grid">

              <div className="modal-image">
                <img
                  src={selected.image}
                  alt={selected.name}
                />
              </div>

              <div className="modal-content">

                <h3 className="gradient-text">
                  {selected.name}
                </h3>

                <h4>Engineering Description</h4>

                <p>{selected.description}</p>

                <div className="product-specs">

                  <div className="spec">
                    <small>Max Capacity</small>
                    <strong>
                      {selected.capacity || "N/A"}
                    </strong>
                  </div>

                  <div className="spec">
                    <small>Voltage Rating</small>
                    <strong>
                      {selected.voltageClass ||
                        "N/A"}
                    </strong>
                  </div>

                </div>

                <h4>Technical Features</h4>

                <ul className="feature-list">
                  {selected.features.map(
                    (feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    )
                  )}
                </ul>

                <a
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    marginTop: 28,
                  }}
                  href="#contact"
                  onClick={() =>
                    setSelected(null)
                  }
                >
                  Request Technical Quote
                </a>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}