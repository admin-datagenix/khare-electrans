import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-logo footer-logo">
                <img src="/images/logo-khare2.jpg" alt="KHARE logo" />
              </span>

              <span className="brand-name"></span>
            </Link>

            <p>
              A trusted and innovative leader in the transformer manufacturing
              industry, delivering energy-efficient, reliable, and high-quality
              power solutions under the KHARE brand.
            </p>

            <div className="footer-contact">
              <div>
                <Icon name="map" />
                <span>
                  Plot No. 12, 19 Tasgaon Industrial Estate, Sangli, India
                </span>
              </div>

              <div>
                <Icon name="mail" />
                <span>
                  <a href="mailto:khare.shripad114@gmail.com">
                    khare.shripad114@gmail.com
                  </a>
                </span>
              </div>

              <div>
                <Icon name="phone" />
                <span>
                  <a href="tel:+919552563522">+91 95525 63522</a>
                </span>
              </div>
            </div>
          </div>

          {/* CORE PRODUCTS */}
          <div>
            <h4 className="footer-title">Core Products</h4>

            <ul className="footer-list">
              <li>
                <Link href="#distribution-transformer">
                  Distribution Transformer
                </Link>
              </li>

              <li>
                <Link href="#power-transformer">Power Transformer</Link>
              </li>

              <li>
                <Link href="#furnace-transformer">Furnace Transformer</Link>
              </li>

              <li>
                <Link href="#compact-substation">Compact Substation</Link>
              </li>
            </ul>
          </div>

          {/* ESSENTIAL SERVICES */}
          <div>
            <h4 className="footer-title">Essential Services</h4>

            <ul className="footer-list">
              <li>
                <Link href="#on-site-testing">On-Site Testing</Link>
              </li>

              <li>
                <Link href="#erection-commissioning">
                  Erection &amp; Commissioning
                </Link>
              </li>

              <li>
                <Link href="#preventive-maintenance">
                  Preventive Maintenance
                </Link>
              </li>

              <li>
                <Link href="#retrofitting-upgradation">
                  Retrofitting &amp; Upgradation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          {/* COPYRIGHT - LEFT */}
          <span className="footer-copyright">
            © {new Date().getFullYear()} KHARE Elec-Trans. All rights reserved.
          </span>

          {/* LINKS - CENTER */}
          <div className="footer-links">
            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a
              href="http://www.khareelectrans.co.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.khareelectrans.co.in
            </a>
          </div>

          {/* DATAGENIXAI - RIGHT */}
          <a
            href="https://www.datagenix.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Designed &amp; Developed by DatagenixAI
          </a>
        </div>
      </div>
    </footer>
  );
}