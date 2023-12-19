import React, { useState } from 'react';
import LouDocForm from './LouDocForm';
import LouDocList from './LouDocList';
import Louterms from './Louterms';
import Loufooter from './Loufooter';
import Louheader from './Louheader';
import './Loudoc.css';

const LouDocPage = () => {
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (document) => {
    // Simulate submission to a server or storage
    // For a real application, you would handle the submission logic here
    setDocuments((prevDocuments) => [...prevDocuments, document]);
  };

  return (
    <div>
      <Louheader />
      <div className="main-content">
        <Louterms />
        <LouDocForm onSubmit={handleSubmit} />
        <LouDocList documents={documents} />
      </div>
      <Loufooter />
    </div>
  );
};

export default LouDocPage;