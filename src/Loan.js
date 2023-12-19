// Loan.js

import React from 'react';
import './Loan.css'; // Import the CSS file

const Loan = ({ loan }) => {
  const { type, loanAmount, pendingAmount, status, bankName } = loan;

  return (
    <tr className={`loan-row ${status}`}>
      <td>{type}</td>
      <td>${loanAmount}</td>
      <td>${pendingAmount}</td>
      <td>{status === 'active' ? 'Active' : 'Completed'}</td>
      <td>{bankName}</td>
    </tr>
  );
};

export default Loan;
