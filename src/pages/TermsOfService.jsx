import React from 'react';
import './Policy.css';

const TermsOfService = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Terms of Service</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="policy-content">
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using KigaliGlobal Dropshipping ("we," "us," or "our"), 
          you agree to be bound by these Terms of Service. If you disagree with any part of the terms, 
          you may not access our service. We facilitate dropshipping from China directly to Kigali, Rwanda.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) 
          on KigaliGlobal Dropshipping's website for personal, non-commercial transitory viewing only.
        </p>
        <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on KigaliGlobal Dropshipping's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on KigaliGlobal Dropshipping's website are provided on an 'as is' basis. We make no warranties, 
          expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, 
          implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall KigaliGlobal Dropshipping or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KigaliGlobal Dropshipping's website.
        </p>

        <h2>5. Shipping and Delivery</h2>
        <p>
          As a dropshipping service, we coordinate shipping from suppliers and manufacturers in China to Kigali, Rwanda. 
          Delivery estimates are provided as a general guideline. We are not liable for delays caused by customs, 
          carrier issues, natural disasters, or other factors outside of our direct control.
        </p>

        <h2>6. Accuracy of Materials</h2>
        <p>
          The materials appearing on KigaliGlobal Dropshipping's website could include technical, typographical, or photographic errors. 
          We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of Rwanda, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at: <br/>
          <strong>Email:</strong> support@kigaliglobal.rw <br/>
          <strong>Address:</strong> KN 4 Ave, Kigali, Rwanda<br/>
          <strong>Phone:</strong> +250 788 123 456
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
