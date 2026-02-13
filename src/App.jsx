import { useState } from "react";

const contactEmail = "contact@hephix.eu";

export default function App() {
  const [workEmail, setWorkEmail] = useState("");

  const handleEarlyAccessSubmit = (event) => {
    event.preventDefault();
    if (!workEmail.trim()) {
      return;
    }
    const subject = "Early Access Request";
    const body = `Early access request from: ${workEmail.trim()}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <div className="bg-grid" aria-hidden="true" />
      <header className="site-header">
        <div className="container nav">
          <div className="logo">
            <img src="/hephix-logo.svg" alt="Hephix logo" />
            <span>Hephix</span>
          </div>
          <nav className="nav-links">
            <a href="#solution">Solution</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI for repair teams</p>
              <h1>
                Make every repair <span>confident, fast, and profitable</span>
              </h1>
              <p className="lead">
                Hephix unifies repair knowledge, parts sourcing, and support workflows into one
                AI agent. Diagnose problems in seconds, source compatible parts instantly, and
                keep every ticket on track.
              </p>
              <div className="cta-row">
                <a className="btn primary" href="#cta">
                  Request Early Access
                </a>
                <a className="btn ghost" href="#contact">
                  Contact Us
                </a>
                <a
                  className="btn ghost"
                  href="https://demo.hephix.eu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try Demo
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>One workflow</strong>
                  <span>Repair, sourcing, support</span>
                </div>
                <div>
                  <strong>Trust-first AI</strong>
                  <span>Source-tagged answers</span>
                </div>
                <div>
                  <strong>Supplier friendly</strong>
                  <span>No supplier fees</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-header">
                <span>Repair Session</span>
                <span className="status">Live</span>
              </div>
              <div className="card-body">
                <div className="prompt">
                  <p className="label">Engineer</p>
                  <p>
                    “Coffee machine powers on but won’t heat. What should I check?”
                  </p>
                </div>
                <div className="response">
                  <p className="label">Hephix AI</p>
                  <ul>
                    <li>Run heating element continuity test (expected 25–35Ω)</li>
                    <li>Verify thermal fuse status and replacement part compatibility</li>
                    <li>Suggests 2 suppliers with 48h lead time</li>
                  </ul>
                </div>
                <div className="actions">
                  <button className="pill" type="button">
                    Open ticket
                  </button>
                  <button className="pill" type="button">
                    Order parts
                  </button>
                  <button className="pill" type="button">
                    Generate report
                  </button>
                </div>
              </div>
              <div className="card-footer">
                <span>Confidence: High</span>
                <span>Sources: OEM manual + supplier data</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pain">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Why Hephix</p>
              <h2>Service engineers lose hours to fragmented data and slow sourcing</h2>
            </div>
            <div className="pain-grid">
              <article>
                <h3>Information fragmentation</h3>
                <p>
                  Manuals, schematics, known issues, and firmware notes are scattered or
                  paywalled.
                </p>
              </article>
              <article>
                <h3>Parts sourcing friction</h3>
                <p>
                  Compatibility checks, lead times, and substitutes take too long across
                  suppliers.
                </p>
              </article>
              <article>
                <h3>Support inefficiency</h3>
                <p>
                  Ticketing and escalation are slow, manual, and disconnected from repairs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="solution" id="solution">
          <div className="container solution-grid">
            <div>
              <div className="section-title">
                <p className="eyebrow">The Platform</p>
                <h2>One AI agent. Four roles.</h2>
                <p className="lead">
                  Hephix is a repair expert, parts sourcing assistant, procurement gateway, and
                  support hub. It centralizes knowledge, surfaces trusted parts, and keeps every
                  repair moving forward.
                </p>
              </div>
              <div className="role-list">
                <div>
                  <span className="role">Repair Expert</span>
                  <p>Step-by-step diagnostics, confidence scoring, and verified sources.</p>
                </div>
                <div>
                  <span className="role">Parts Sourcing Assistant</span>
                  <p>Compatibility, substitutes, and lead times across suppliers.</p>
                </div>
                <div>
                  <span className="role">Procurement Gateway</span>
                  <p>Better-qualified orders with fewer wrong parts and returns.</p>
                </div>
                <div>
                  <span className="role">Support Hub</span>
                  <p>Ticketing, repair history, and internal knowledge base in one place.</p>
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <p className="label">Faster triage</p>
                <h3>Diagnose in seconds</h3>
                <p>AI-guided checks that cut first-response time.</p>
              </div>
              <div className="stat">
                <p className="label">Supplier onboarding</p>
                <h3>Faster & easier</h3>
                <p>Aggregated demand + AI deflects common support.</p>
              </div>
              <div className="stat">
                <p className="label">Data quality</p>
                <h3>Trust-first AI</h3>
                <p>Source-tagged answers + verification loops.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="loops">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Network Effects</p>
              <h2>Two loops that compound over time</h2>
            </div>
            <div className="loop-grid">
              <div className="loop">
                <h3>Engineer Loop</h3>
                <p>More engineers → more repair data → smarter AI → more engineers.</p>
              </div>
              <div className="loop">
                <h3>Supplier Loop</h3>
                <p>More demand → more suppliers → better availability → more demand.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="cta">
          <div className="container cta-box">
            <div>
              <h2>Be first to repair with Hephix</h2>
              <p className="lead">
                Join early access to shape the AI that powers modern service teams.
              </p>
            </div>
            <form className="cta-form" onSubmit={handleEarlyAccessSubmit}>
              <input
                type="email"
                placeholder="Work email"
                aria-label="Work email"
                required
                value={workEmail}
                onChange={(event) => setWorkEmail(event.target.value)}
              />
              <button className="btn primary" type="submit">
                Request Early Access
              </button>
            </form>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Talk to the Hephix team</h2>
              <p className="lead">
                Email us directly for partnerships, pilot programs, or supplier onboarding.
              </p>
            </div>
            <a className="btn ghost" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="logo">
            <img src="/hephix-logo.svg" alt="Hephix logo" />
            <span>Hephix</span>
          </div>
          <div className="footer-links">
            <span>AI Repair Intelligence</span>
            <span>Built for service engineers</span>
          </div>
          <div className="footer-note">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <span>© 2026 Hephix. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
