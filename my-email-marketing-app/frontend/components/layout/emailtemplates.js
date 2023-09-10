// frontend/components/EmailTemplates.js
import React, { useState, useEffect } from 'react';

const EmailTemplates = ({ templates, onSaveTemplate, onDeleteTemplate }) => {
  const [newTemplateName, setNewTemplateName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleNewTemplateNameChange = (e) => {
    setNewTemplateName(e.target.value);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleSaveTemplate = () => {
    if (newTemplateName.trim() === '') {
      alert('Please enter a valid template name.');
      return;
    }

    // Call the onSaveTemplate function to add or update the template
    onSaveTemplate(newTemplateName);

    // Clear the input field
    setNewTemplateName('');
  };

  const handleDeleteTemplate = () => {
    if (selectedTemplate) {
      // Call the onDeleteTemplate function to delete the selected template
      onDeleteTemplate(selectedTemplate.id);

      // Clear the selected template
      setSelectedTemplate(null);
    }
  };

  useEffect(() => {
    // Clear the selected template when the templates list changes
    setSelectedTemplate(null);
  }, [templates]);

  return (
    <div className="email-templates">
      <h2>Email Templates</h2>
      <div className="template-list">
        <ul>
          {templates.map((template) => (
            <li
              key={template.id}
              className={template === selectedTemplate ? 'selected' : ''}
              onClick={() => handleTemplateSelect(template)}
            >
              {template.name}
            </li>
          ))}
        </ul>
        <div className="template-actions">
          <button onClick={handleDeleteTemplate} disabled={!selectedTemplate}>
            Delete Template
          </button>
        </div>
      </div>
      <div className="template-add">
        <input
          type="text"
          placeholder="Enter new template name"
          value={newTemplateName}
          onChange={handleNewTemplateNameChange}
        />
        <button onClick={handleSaveTemplate}>Add Template</button>
      </div>
    </div>
  );
};

export default EmailTemplates;
