// Transaction.js

import React from 'react';
import './Transaction.css';

const Transaction = () => {
  const transactions = [
    { type: 'Deposit', date: '2023-01-01', time: '10:30 AM', amount: 5000 },
    { type: 'Withdrawal', date: '2023-01-05', time: '02:15 PM', amount: 2000 },
    // Add more transactions as needed
  ];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <div className="chat-container">
        {transactions.map((transaction, index) => (
          <div key={index} className={`chat-message ${transaction.type.toLowerCase()}`}>
            <span className="message-type">{transaction.type}</span>
            <span className="message-details">
              {`Amount: ${transaction.amount} INR | Date: ${transaction.date} | Time: ${transaction.time}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
