import React from "react";

export const IncomeExpenses = () => {
  return (
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p class="money plus">+$0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p  class="money minus">-$0.00</p>
      </div>
    </div>
  );
};
