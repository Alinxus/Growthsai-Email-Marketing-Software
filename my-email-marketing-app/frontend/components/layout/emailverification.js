// frontend/components/EmailVerification.js
import React, { useState } from 'react';

const EmailVerification = ({ isVerified, onSendVerificationCode, onVerifyEmail }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setCodeSent] = useState(false);

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSendVerificationCode = () => {
    // Call the onSendVerificationCode function to request a verification code
    onSendVerificationCode();

    // Update the state to indicate that the code has been sent
    setCodeSent(true);
  };

  const handleVerifyEmail = () => {
    if (verificationCode.trim() === '') {
      alert('Please enter a valid verification code.');
      return;
    }

    // Call the onVerifyEmail function to verify the email address
    onVerifyEmail(verificationCode);
  };

  return (
    <div className="email-verification">
      <h2>Email Verification</h2>
      {isVerified ? (
        <p>Your email address is verified.</p>
      ) : (
        <>
          {isCodeSent ? (
            <>
              <p>Enter the verification code sent to your email:</p>
              <input
                type="text"
                placeholder="Verification Code"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
              />
              <button onClick={handleVerifyEmail}>Verify Email</button>
            </>
          ) : (
            <>
              <p>Your email address is not verified. Click the button below to send a verification code to your email.</p>
              <button onClick={handleSendVerificationCode}>Send Verification Code</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EmailVerification;
