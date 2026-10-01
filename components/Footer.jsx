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
              <span className="brand-logo">
                <img src="/images/logo-khare3.png" alt="KHARE logo" />
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
                  <a href="mailto:sales@khareelectrans.co.in">
                    sales@khareelectrans.co.in
                  </a>
                </span>
              </div>

              <div>
                <Icon name="phone" />
                <span>
                  <a href="tel:+912346250336">+91 2346 250336</a>
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

        {/* BOTTOM */}

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} KHARE Elec-Trans. All rights reserved.
          </span>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a
              href="http://www.khareelectrans.co.in"
              target="_blank"
              rel="noreferrer"
            >
              www.khareelectrans.co.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
