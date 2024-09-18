import React from "react";

export const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul  className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
