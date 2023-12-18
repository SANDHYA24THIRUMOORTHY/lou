// Transaction.js

import React from 'react';

const Transaction = () => {
  // Assuming you have transaction data, replace this with your actual data
  const transactions = [
    { type: 'Deposit', date: '2023-01-01', time: '10:30 AM', amount: 5000 },
    { type: 'Withdrawal', date: '2023-01-05', time: '02:15 PM', amount: 2000 },
    // Add more transactions as needed
  ];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount (INR)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              <td>{transaction.amount} INR</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
