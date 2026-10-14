"use client";
import { useState } from "react";
import Icon from "./Icon";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    e.currentTarget.reset();
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="section-label">
              <Icon name="zap" /> Contact Infrastructure
            </div>

            <h2 className="section-title">
              Connect With Our{" "}
              <span className="gradient-text">Technical Team</span>
            </h2>

            <p className="section-copy">
              Ready to upgrade your industrial power infrastructure? Our senior
              engineers are standing by to provide detailed technical drawings
              and performance quotes.
            </p>

            <div className="contact-info">
              <div className="contact-row">
                <div className="contact-icon">
                  <Icon name="mail" />
                </div>
                <div>
                  <h4>E-Mail</h4>
                  <p>
                    <a href="mailto:khare.shripad114@gmail.com">
                      khare.shripad114@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon">
                  <Icon name="phone" />
                </div>
                <div>
                  <h4>Office Ph.</h4>
                  <p>
                    Office Ph: <a href="tel:+919552563522">+91 95525 63522</a>,
                    Works: <a href="tel:+919881143522">+91 98811 43522</a>
                  </p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon">
                  <Icon name="map" />
                </div>
                <div>
                  <h4>Office &amp; Works</h4>
                  <p>
                    Plot No. 12, 19, Tasgaon Industrial Estate Co. Operative
                    Society Ltd., Tasgaon : 416 312 Dist : Sangli, M.S. INDIA
                  </p>
                </div>
              </div>
            </div>

            <div className="persons">
              <div className="section-label">Contact Persons</div>

              <div className="person-grid">
                <div className="person">
                  <Icon name="users" />
                  <div>
                    <strong>Kaushik Khare</strong>
                    <span>
                      <a href="tel:+9109822540214">+91 9552563522</a>
                    </span>
                  </div>
                </div>

                {/* <div className="person"> 
                  <Icon name="users" /> 
                  <div> 
                    <strong>Milind Khare</strong> 
                    <span>
                      <a href="tel:+9109422406373">+91 09422406373</a>
                    </span> 
                  </div> 
                </div>  */}
              </div>
            </div>
          </div>

          <div className="form-card">
            <form onSubmit={submit}>
              <div className="form-grid">
                <div className="field">
                  <label>Contact Name</label>
                  <input name="name" placeholder="John Doe" required />
                </div>

                <div className="field">
                  <label>Organization</label>
                  <input
                    name="company"
                    placeholder="Energy Solutions Corp"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label>Corporate Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="field">
                <label>Project Type</label>
                <select name="type" defaultValue="" required>
                  <option value="" disabled>
                    Select interest
                  </option>
                  <option>Distribution Transformer</option>
                  <option>Power Transformer</option>
                  <option>Technical Service</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="field">
                <label>Project Requirements</label>
                <textarea
                  name="message"
                  placeholder="Include kVA, primary/secondary voltage, and specific site conditions..."
                  required
                />
              </div>

              <button className="form-submit" type="submit" disabled={loading}>
                {loading ? (
                  "Transmitting..."
                ) : (
                  <>
                    Dispatch Technical Inquiry{" "}
                    <Icon
                      name="send"
                      style={{ verticalAlign: "middle", marginLeft: 8 }}
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && (
        <div className="toast">
          <strong>Transmission Received</strong>
          Our engineering team will review your project requirements and contact
          you within 24 hours.
        </div>
      )}
    </section>
  );
}
