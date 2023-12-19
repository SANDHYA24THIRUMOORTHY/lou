// LoanList.js

import React from 'react';
import Loan from './Loan';

const LoanList = () => {
  const loans = [
    {
      type: 'Personal',
      loanAmount: 5000,
      pendingAmount: 2000,
      status: 'active',
      bankName: 'Example Bank',
    },
    {
      type: 'Home',
      loanAmount: 100000,
      pendingAmount: 0,
      status: 'completed',
      bankName: 'Another Bank',
    },
    // Add more loan objects as needed
  ];

  return (
    <div>
      <h2>Loan List</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Loan Amount</th>
            <th>Pending Amount</th>
            <th>Status</th>
            <th>Bank</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <Loan key={index} loan={loan} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanList;
