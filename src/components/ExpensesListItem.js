import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpensesListItem = (props) => (
    <div>
        <Link to={'/edit/' + props.id}>{props.description}</Link>
        <p>{props.amount} - {props.createdAt}</p>
        <button onClick={(e) => {
            props.onClick({ id: props.id });
        }}>Remove</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    onClick : (id) => removeExpense({ id : id})
});


export default connect(undefined, mapDispatchToProps)(ExpensesListItem);