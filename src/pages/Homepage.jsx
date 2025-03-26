import React, { useEffect, useState } from 'react';
import './HomePage.css';

function Homepage() {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Revolutionize Your Business Transactions";

  useEffect(() => {
    let isMounted = true;
    const animateText = () => {
      let currentText = '';
      for (let i = 0; i < fullText.length; i++) {
        setTimeout(() => {
          if (isMounted) {
            currentText += fullText[i];
            setAnimatedText(currentText);
          }
        }, i * 50);
      }
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="homepage">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
        <div className="bg-shape bg-shape-4"></div>
        <div className="bg-shape bg-shape-5"></div>
        
        {/* Triangles added here */}
        <div className="background-triangles">
        <div className="triangle triangle-1"></div>
        <div className="triangle triangle-2"></div>
      </div>
      </div>

      {/* Navbar */}
      <nav className="homepage-navbar">
        <div className="homepage-logo">Mutify</div>
        <div className="homepage-nav-links">
          <a href="/signup">Sign Up</a>
          <a href="/signin">Sign In</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="homepage-hero">
        <div className="homepage-hero-content">
          <div className="homepage-hero-text">
            <h1 className="homepage-hero-title">Mutify</h1>
            <p className="homepage-hero-subtitle">{animatedText}</p>
            <button className="homepage-hero-cta">Get Started</button>
          </div>
        </div>
      </div>

    
      {/* Features Section */}
      <section className="homepage-features">
        <h2 className="homepage-features-title">Our Features</h2>
        <div className="homepage-features-grid">
          <div className="homepage-feature-card">
            <div className="homepage-feature-icon">🧾</div>
            <h3 className="homepage-feature-title">Digital Receipts</h3>
            <p className="homepage-feature-description">
              Create and manage digital receipts effortlessly with secure cloud storage.
            </p>
          </div>
          <div className="homepage-feature-card">
            <div className="homepage-feature-icon">🔳</div>
            <h3 className="homepage-feature-title">QR Code Generation</h3>
            <p className="homepage-feature-description">
              Generate and verify receipts instantly using unique QR codes.
            </p>
          </div>
          <div className="homepage-feature-card">
            <div className="homepage-feature-icon">🏢</div>
            <h3 className="homepage-feature-title">Business Registration</h3>
            <p className="homepage-feature-description">
              Register your business and start managing transactions seamlessly.
            </p>
          </div>
          <div className="homepage-feature-card">
            <div className="homepage-feature-icon">⏰</div>
            <h3 className="homepage-feature-title">Transaction Tracking</h3>
            <p className="homepage-feature-description">
              Monitor and analyze your business transactions in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="homepage-future-plans">
        <h2 className="homepage-future-plans-title">Future Plans</h2>
        <div className="homepage-future-plans-container">
          <div className="homepage-future-plan-card">
            <h3 className="homepage-future-plan-title">AI Transaction Insights</h3>
            <p className="homepage-future-plan-description">
              Advanced analytics and predictive modeling for business growth
            </p>
          </div>
          <div className="homepage-future-plan-card">
            <h3 className="homepage-future-plan-title">Global Expansion</h3>
            <p className="homepage-future-plan-description">
              Extending Mutify's reach to international markets
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="homepage-pricing">
        <h2 className="homepage-pricing-title">Pricing</h2>
        <div className="homepage-pricing-grid">
          <div className="homepage-pricing-card">
            <h3 className="homepage-pricing-tier">Free</h3>
            <p className="homepage-pricing-amount">$0</p>
            <ul className="homepage-pricing-features">
              <li>Basic Receipt Management</li>
              <li>Limited QR Code Generation</li>
            </ul>
            <button className="homepage-pricing-button">Get Started</button>
          </div>
          <div className="homepage-pricing-card">
            <h3 className="homepage-pricing-tier">Pro</h3>
            <p className="homepage-pricing-amount">$9.99</p>
            <ul className="homepage-pricing-features">
              <li>Unlimited Receipts</li>
              <li>Advanced Analytics</li>
              <li>Priority Support</li>
            </ul>
            <button className="homepage-pricing-button">Choose Pro</button>
          </div>
          <div className="homepage-pricing-card">
            <h3 className="homepage-pricing-tier">Enterprise</h3>
            <p className="homepage-pricing-amount">Custom</p>
            <ul className="homepage-pricing-features">
              <li>Unlimited Users</li>
              <li>Custom Integrations</li>
              <li>Dedicated Support</li>
            </ul>
            <button className="homepage-pricing-button">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <div>© 2024 Mutify. All Rights Reserved.</div>
        <div className="homepage-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;