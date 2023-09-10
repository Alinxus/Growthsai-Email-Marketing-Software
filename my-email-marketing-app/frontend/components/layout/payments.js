// frontend/components/BillingAndPayment.js
import React from 'react';

const BillingAndPayment = ({ subscriptionDetails, onUpdatePaymentMethod, onUpdateBillingInfo }) => {
  return (
    <div className="billing-and-payment">
      <h2>Billing and Payment</h2>
      <div className="subscription-details">
        <h3>Subscription Details</h3>
        <p>Plan: {subscriptionDetails.planName}</p>
        <p>Next Billing Date: {subscriptionDetails.nextBillingDate}</p>
        <p>Price: ${subscriptionDetails.price} per month</p>
        <button onClick={onUpgradeSubscription}>Upgrade Subscription</button>
      </div>
      <div className="payment-method">
        <h3>Payment Method</h3>
        <p>Card Number: {subscriptionDetails.cardNumber}</p>
        <button onClick={onUpdatePaymentMethod}>Update Payment Method</button>
      </div>
      <div className="billing-info">
        <h3>Billing Information</h3>
        <p>Name: {subscriptionDetails.billingName}</p>
        <p>Address: {subscriptionDetails.billingAddress}</p>
        <button onClick={onUpdateBillingInfo}>Update Billing Information</button>
      </div>
    </div>
  );
};

export default BillingAndPayment;
