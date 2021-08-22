import React from 'react';
import ExpenseList from './expensesList';
import ExpenseListFilter from './ExpensesListFilter';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboard = () => {
    return (
        <div>
            <p>la merda di cane puzza</p>
            <ExpenseListFilter />
            <ExpenseList />
            <ExpenseSummary />
        </div>
    );
}

export default ExpenseDashboard;