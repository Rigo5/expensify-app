import React from 'react';
import getTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    return (
        <div>
            {props.expensesCount ? 
                <h1>Number of expenses : {props.expensesCount}</h1>
                :
                <h1>No expenses</h1>
            }
            <h1>Total : {numeral(props.expensesTotal).format('$0,0.00')}</h1>
        </div>    
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount : visibleExpenses.length,
        expensesTotal : getTotalExpenses(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);