import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';



export class Edit extends React.Component {


    onSubmit = (expense) => {
        console.log('edited');
        this.props.onSubmit(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <p>Editing l'oggetto: {this.props.expense.id}</p>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
            </div>);
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit : (id, expense) => dispatch(editExpense(id, expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit);