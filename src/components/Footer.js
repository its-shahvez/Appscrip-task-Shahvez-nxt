import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      {/* UPPER SECTION: Newsletter & Contact */}
      <div className={styles.upperSection}>
        
        {/* Newsletter Signup */}
        <div>
          <h3 className={styles.sectionTitle}>Be the first to know</h3>
          <p className={styles.subText}>Sign up for updates from metta muse.</p>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Enter your e-mail..." className={styles.input} />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>

        {/* Contact & Currency */}
        <div>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <div className={styles.contactInfo}>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencySection}>
            <h3 className={styles.sectionTitle}>Currency</h3>
            <div className={styles.currencyIcon}>
              <div className={styles.flag}></div>
              <span>USD</span>
            </div>
            <p style={{fontSize:'10px', marginTop:'5px', color:'#888'}}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* LOWER SECTION: Links & Socials */}
      <div className={styles.lowerSection}>
        
        {/* Column 1: Brand Info */}
        <div className={styles.linkColumn}>
          <h3 className={styles.sectionTitle}>metta muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.linkColumn}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 3: Social & Payments */}
        <div className={styles.linkColumn}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <span className={styles.icon}>📷</span> {/* Insta Emoji */}
            <span className={styles.icon}>🔗</span> {/* LinkedIn Emoji */}
          </div>

          <h3 className={styles.sectionTitle} style={{marginTop:'30px'}}>metta muse Accepts</h3>
          <div className={styles.paymentIcons}>
            <span className={styles.paymentCard}>GPay</span>
            <span className={styles.paymentCard}>Mastercard</span>
            <span className={styles.paymentCard}>PayPal</span>
            <span className={styles.paymentCard}>Amex</span>
            <span className={styles.paymentCard}>Apple Pay</span>
          </div>
        </div>

      </div>

      <div className={styles.copyright}>
        Copyright © 2023 metta muse. All rights reserved.
      </div>
    </footer>
  );
}