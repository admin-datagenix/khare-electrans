"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const links = [
  ["About", "#about"],
  ["Products", "#products"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 45);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="brand-logo">
            <img src="/images/logo-khare2.jpg" alt="KHARE logo" />
          </span>
          <span className="brand-name"></span>
        </Link>
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={(e) => go(e, href)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="contact-btn"
            onClick={(e) => go(e, "#contact")}
          >
            Contact Us
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={25} />
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => go(e, href)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="contact-btn"
            onClick={(e) => go(e, "#contact")}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
