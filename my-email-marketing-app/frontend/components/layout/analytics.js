// frontend/components/ReportingAndAnalytics.js
import React from 'react';

const ReportingAndAnalytics = ({ campaignStats }) => {
  return (
    <div className="reporting-and-analytics">
      <h2>Reporting and Analytics</h2>
      <div className="campaign-stats">
        <div className="stat">
          <h3>Open Rate</h3>
          <p>{campaignStats.openRate}%</p>
        </div>
        <div className="stat">
          <h3>Click-Through Rate</h3>
          <p>{campaignStats.clickThroughRate}%</p>
        </div>
        <div className="stat">
          <h3>Total Subscribers</h3>
          <p>{campaignStats.totalSubscribers}</p>
        </div>
        <div className="stat">
          <h3>Total Opens</h3>
          <p>{campaignStats.totalOpens}</p>
        </div>
        <div className="stat">
          <h3>Total Clicks</h3>
          <p>{campaignStats.totalClicks}</p>
        </div>
        <div className="stat">
          <h3>Unsubscribes</h3>
          <p>{campaignStats.unsubscribes}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportingAndAnalytics;
