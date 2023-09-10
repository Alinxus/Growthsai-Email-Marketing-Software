// frontend/components/BillingHistory.js
import React, { useState, useEffect } from 'react';

const BillingHistory = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Simulate fetching billing history data from the server
    // Replace this with your actual API request to retrieve billing data
    const fetchBillingHistory = async () => {
      try {
        // Make an API request to retrieve billing history data
        const response = await fetch('/api/billing/history'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Unable to fetch billing history.');
        }
        const data = await response.json();

        // Set the fetched billing history data in the state
        setInvoices(data.invoices);
      } catch (error) {
        console.error(error.message);
        // Handle error or display a notification to the user
      }
    };

    // Fetch billing history data when the component mounts
    fetchBillingHistory();
  }, []);

  return (
    <div className="billing-history">
      <h2>Billing History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Invoice Number</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.date}</td>
              <td>{invoice.invoiceNumber}</td>
              <td>${invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>
                <a href={`/billing/invoice/${invoice.id}`} target="_blank" rel="noopener noreferrer">
                  View Invoice
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingHistory;
