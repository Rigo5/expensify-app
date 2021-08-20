import React from 'react';
//connect permette di getState e dispatch azioni 
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => (
                <ExpensesListItem key={expense.id} {...expense} />
            ))
        )}
    </div>

);

/* il primo argomento di coonect è un afunzione che specifica che informazioni dello stato devono essere passate
al componente che viene vrappato, il secondo argomento è il componente da wrappare. Gli argomenti passati saranno del tipo
key value paair. Ogni volta che lo store cambia questo viene refreshato in modo da avere i dati sempre freschi*/
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};


export default connect(mapStateToProps)(ExpenseList);
