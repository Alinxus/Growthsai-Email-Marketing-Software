// frontend/components/Automation.js
import React, { useState } from 'react';

const Automation = () => {
  const [workflowName, setWorkflowName] = useState('');
  const [triggerEvent, setTriggerEvent] = useState('');
  const [conditions, setConditions] = useState([]);
  const [actions, setActions] = useState([]);
  const [showConditionModal, setShowConditionModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [newCondition, setNewCondition] = useState('');
  const [newAction, setNewAction] = useState('');

  const handleWorkflowNameChange = (e) => {
    setWorkflowName(e.target.value);
  };

  const handleTriggerEventChange = (e) => {
    setTriggerEvent(e.target.value);
  };

  const handleAddCondition = () => {
    setShowConditionModal(true);
  };

  const handleAddAction = () => {
    setShowActionModal(true);
  };

  const handleSaveCondition = () => {
    setConditions([...conditions, newCondition]);
    setNewCondition('');
    setShowConditionModal(false);
  };

  const handleSaveAction = () => {
    setActions([...actions, newAction]);
    setNewAction('');
    setShowActionModal(false);
  };

  const handleSaveWorkflow = () => {
    // Placeholder function to save the workflow
    console.log('Saving the workflow...');
  };

  return (
    <div className="automation">
      <h2>Automation</h2>
      <div className="automation-form">
        <label>Workflow Name:</label>
        <input
          type="text"
          value={workflowName}
          onChange={handleWorkflowNameChange}
          placeholder="Enter a name for your workflow"
        />
        <label>Select Trigger Event:</label>
        <select value={triggerEvent} onChange={handleTriggerEventChange}>
          <option value="">Select</option>
          <option value="newSubscriber">New Subscriber</option>
          <option value="campaignOpened">Campaign Opened</option>
          {/* Add more trigger event options */}
        </select>
        <div className="conditions">
          <h3>Conditions</h3>
          <button onClick={handleAddCondition}>Add Condition</button>
          <ul>
            {conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>
        <div className="actions">
          <h3>Actions</h3>
          <button onClick={handleAddAction}>Add Action</button>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleSaveWorkflow}>Save Workflow</button>
      </div>
      {showConditionModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Condition</h3>
            <input
              type="text"
              value={newCondition}
              onChange={(e) => setNewCondition(e.target.value)}
              placeholder="Enter a condition"
            />
            <button onClick={handleSaveCondition}>Save</button>
            <button onClick={() => setShowConditionModal(false)}>Cancel</button>
          </div>
        </div>
      )}
      {showActionModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Action</h3>
            <input
              type="text"
              value={newAction}
              onChange={(e) => setNewAction(e.target.value)}
              placeholder="Enter an action"
            />
            <button onClick={handleSaveAction}>Save</button>
            <button onClick={() => setShowActionModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Automation;
