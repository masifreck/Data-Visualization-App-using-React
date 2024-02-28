import React, { useState } from 'react';
import EntryPage from './EntryPage';
import TablePage from './Table';

const ParentComponent = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (formDataObject) => {
    setFormData((prevValue) => [...prevValue, formDataObject]);
  };

  return (
    <div>
      <EntryPage onFormSubmit={handleFormSubmit} />
      <TablePage data={formData} />
      {/* Other components or content */}
    </div>
  );
};

export default ParentComponent;
