import React, { useState } from 'react';
import {Button,Grid} from '@mui/material';
const Loureq = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    contactInformation: '',
    applicantAddress: '',
    purpose: '',
    transactionDetails: '',
    termsConditions: '',
    securityRequirements: '',
    authorizedSignatories: '',
    legalReview: '',
    applicableLaw: '',
    notarization: '',
  });

  const [louRequests, setLouRequests] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the submission of the LOU request
    // For example, you can update the state with the new request
    setLouRequests([...louRequests, formData]);
    // Clear form data after submission
    setFormData({
      applicantName: '',
      contactInformation: '',
      applicantAddress: '',
      purpose: '',
      transactionDetails: '',
      termsConditions: '',
      securityRequirements: '',
      authorizedSignatories: '',
      legalReview: '',
      applicableLaw: '',
      notarization: '',
    });
  };

  return (
    <div>
      <h2>Letter of Undertaking Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        {/* ... (same as the previous example) */}
      </form>

      {/* Display LOU requests in a table */}
      <table>
        <thead>
          <tr>
            <td>APPLICANT NAME :</td>
            <td>
                <label>
                <input type="text" name="applicantName" value={formData.applicantName} onChange={handleInputChange} required />
                </label>
            </td>
          </tr>
          <br></br>
          <tr>
            <td>MOBILE NO :</td>
            <td>
                <label>
                <input type="number" name="contactInformation" value={formData.contactInformatione} onChange={handleInputChange} required />
                </label>
            </td>
          </tr>
          <br></br>
          <tr>
            <td>APPLICANT ADDRESS :</td>
            <td>
                <label>
                <input type="text" name="applicantAddress" value={formData.applicantAddress} onChange={handleInputChange} required />
                </label>
            </td>
          </tr>
          <br></br>
          <tr>
            <td>PURPOSE :</td>
            <td>
                <label>
                <input type="text" name="Purpose" value={formData.Purpose} onChange={handleInputChange} required />
                </label>
            </td>
          </tr>
          <br></br>
          <tr>
            <td>TRANSACTION DETAILS :</td>
          </tr>
          <br></br>
          <tr>
          <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit Request
          </Button>
        </Grid>
          </tr>
        </thead>
        <tbody>
          {louRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.applicantName}</td>
              <td>{request.applicantAddress}</td>
              <td>{request.purpose}</td>
              <td>{request.transactionDetails}</td>
              {/* Add more cells based on your requirements */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Loureq;
