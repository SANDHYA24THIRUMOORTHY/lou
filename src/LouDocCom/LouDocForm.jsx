// src/components/DocumentSubmissionForm.js
import React, { useState } from 'react';

const LouDocForm = ({ onSubmit }) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const allowedFileTypes = ['pdf', 'doc', 'docx']; // Add or modify allowed file types
  const maxFileSizeInBytes = 5 * 1024 * 1024; // 5 MB

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > maxFileSizeInBytes) {
        setError(`File size exceeds the limit of ${maxFileSizeInBytes / (1024 * 1024)} MB`);
        setDocument(null);
      } else if (!allowedFileTypes.includes(file.name.split('.').pop().toLowerCase())) {
        setError(`Invalid file format. Supported formats: ${allowedFileTypes.join(', ')}`);
        setDocument(null);
      } else {
        setDocument(file);
        setError(null);
      }
    }
  };

  const handleTermsAgree = (agreed) => {
    setTermsAgreed(agreed);
    // Reset the file input if the user unchecks the terms
    if (!agreed) {
      setDocument(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document && termsAgreed) {
      onSubmit(document);
    } else if (!termsAgreed) {
      setError('Please agree to the terms and conditions before submitting.');
    } else {
      setError('Please select a valid document file.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h3 className='op'>SELECT DOCUMENT :</h3>
    <table className='hp'>
    <tr>
    <td><b>PASSPORT SIZE PHOTO :</b></td>
    <td>
    <label>
    <input
    type="file"
    onChange={handleFileChange}
    accept={allowedFileTypes.join(',')}
    disabled={!termsAgreed}
    />
    </label>
    </td>
    </tr>
    <tr>
    <td><b>SIGNATURE :</b></td>
    <td>
    <label>
    <input
    type="file"
    onChange={handleFileChange}
    accept={allowedFileTypes.join(',')}
    disabled={!termsAgreed}
    />
    </label>
    </td>
    </tr>
    <tr>
    <td><b>AADHAR CARD :</b></td>
    <td>
    <label>
    <input
    type="file"
    onChange={handleFileChange}
    accept={allowedFileTypes.join(',')}
    disabled={!termsAgreed}
    />
    </label>
    </td>
    </tr>
    </table>
      <div>
        <label>
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={(e) => handleTermsAgree(e.target.checked)}
          />
          I agree to the terms and conditions
        </label>
      </div><br></br>
      {error && <div className="error">{error}</div>}
      
      <button type="submit" disabled={!document || !termsAgreed}>
        Submit
      </button>
    </form>
  );
};

export default LouDocForm;
