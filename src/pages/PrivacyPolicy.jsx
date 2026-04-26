import React from 'react';
import './Policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="policy-content">
        <h2>1. Information We Collect</h2>
        <p>
          At isooko, we collect information that you voluntarily provide to us when you
          register on our website, place an order, or subscribe to our newsletter. This includes:
        </p>
        <ul>
          <li><strong>Personal Information:</strong> Name, Email Address, Phone Number, Shipping details in Kigali.</li>
          <li><strong>Payment Information:</strong> Processed securely by our payment partners. We do not store full credit card details.</li>
          <li><strong>Usage Data:</strong> Information on how the service is accessed and used.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information for various purposes:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our dropshipping order status</li>
          <li>To process transactions directly from our China suppliers to Kigali</li>
          <li>To provide customer support and service improvements</li>
          <li>To monitor the usage of our website</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2>3. Data Sharing and Third Parties</h2>
        <p>
          We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), 
          to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing 
          how our Service is used. 
        </p>
        <p>
          As a dropshipping company, we securely share your shipping details with our trusted suppliers in China 
          so they can directly dispatch the items to our Kigali hub or your destination. Our partners are obligated 
          not to disclose or use the information for any other purpose.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          isooko will retain your Personal Data only for as long as is necessary for the purposes 
          set out in this Privacy Policy.
        </p>

        <h2>5. Your Data Protection Rights</h2>
        <p>
          You have the right to request a copy of your personal data, rectify incomplete data, request deletion 
          of your personal information, or restrict the processing thereof. Feel free to contact us with such requests.
        </p>

        <h2>6. Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet, 
          or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
          your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
          <br/>
          <strong>Email:</strong> support@kigaliglobal.rw <br/>
          <strong>Phone:</strong> +250 788 123 456
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
