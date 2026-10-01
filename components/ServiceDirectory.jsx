"use client";

import { useEffect } from "react";
import Icon from "./Icon";
import { services } from "@/data/services";

export default function ServiceDirectory() {

  useEffect(() => {
    const scrollToService = () => {
      const hash = window.location.hash.replace("#", "");

      const service = services.find(
        (item) => item.slug === hash
      );

      if (!service) return;

      setTimeout(() => {
        document
          .getElementById(service.slug)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);
    };

    scrollToService();

    window.addEventListener(
      "hashchange",
      scrollToService
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        scrollToService
      );
    };
  }, []);

  return (
    <section
      id="services"
      className="section alt"
    >
      <div className="container">

        <div className="center-heading">

          <div className="section-label">
            <Icon name="zap" />
            Professional Services
          </div>

          <h2 className="section-title">
            Engineering{" "}
            <span className="gradient-text">
              Excellence
            </span>
          </h2>

          <p className="section-copy">
            Complete transformer lifecycle management
            from supply and testing to commissioning
            and repair.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <article
              id={service.slug}
              className="service-card"
              key={service.id}
            >
              <div className="service-icon">
                <Icon name={service.icon} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}