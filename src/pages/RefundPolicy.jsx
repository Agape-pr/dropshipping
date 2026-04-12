import React from 'react';
import './Policy.css';

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Refund Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="policy-content">
        <h2>1. Overview</h2>
        <p>
          At KigaliGlobal Dropshipping, our priority is providing you high-quality products sourced directly 
          from China to Kigali. Because we operate as a dropshipping service, our refund policy follows 
          specific guidelines aligned with international shipping and supplier terms.
        </p>
        <p>
          Our policy lasts 14 days from the date of delivery in Kigali. If 14 days have gone by since your 
          item was delivered, unfortunately, we can’t offer you a refund or exchange.
        </p>

        <h2>2. Eligibility for Returns</h2>
        <p>
          To be eligible for a return, your item must be unused, in the same condition that you received it, 
          and in its original packaging. Several types of goods are exempt from being returned, such as:
        </p>
        <ul>
          <li>Perishable goods (such as food, flowers, or plants)</li>
          <li>Customized or personalized items</li>
          <li>Intimate or sanitary goods</li>
          <li>Hazardous materials, or flammable liquids or gases</li>
          <li>Gift cards or downloadable software products</li>
        </ul>

        <h2>3. Defective or Damaged Items</h2>
        <p>
          We only replace or refund items if they are defective or severely damaged upon arrival from China. 
          If you receive a defective item, please send us an email at support@kigaliglobal.rw within 48 hours 
          with clear photos of the product and packaging. We will investigate the issue with our supplier 
          and notify you of the approval or rejection of your refund/replacement.
        </p>

        <h2>4. Late or Missing Delivery</h2>
        <p>
          Because items ship internationally, delays may occasionally occur at customs. If your item has not 
          arrived within 60 days of the shipping date, you are eligible for a full refund or a free reshipment.
        </p>

        <h2>5. Processing Refunds</h2>
        <p>
          If your refund is approved, it will be processed, and a credit will automatically be applied to your 
          credit card, mobile money account, or original method of payment, within a certain amount of days 
          (typically 7-14 business days).
        </p>

        <h2>6. Return Shipping</h2>
        <p>
          To return your product, you should contact us first for instructions. For general dissatisfaction 
          (non-defective items), you will be responsible for paying for your own shipping costs for returning 
          your item to our Kigali office or the original supplier. Shipping costs are non-refundable.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
