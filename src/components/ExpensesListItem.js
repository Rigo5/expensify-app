import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpensesListItem = (props) => (
    <div>
        <Link to={'/edit/' + props.id}>{props.description}</Link>
        <p>{numeral(props.amount).format('$0,00.00')} - {moment(props.createdAt).format('MMMM Do, YYYU')}</p>
        <button onClick={(e) => {

            props.onClick(props.id );
        }}>Remove</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    onClick : (id) => dispatch(removeExpense({ id : id}))
});


export default connect(undefined, mapDispatchToProps)(ExpensesListItem);