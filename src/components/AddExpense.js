import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense, editExpense } from '../actions/expenses';


/* un problema qua per il testing è dato da : 
    props.dispatch(addExpense({...expense}))
    props dispatch sarà messa come spy, il problema è che come arg
    ha una referenza a una funzione di un modulo e non è passata come prop
    redux per fortuna ci viene in contro e ci permette di definire come per lo stato
    una funzione che mappa i vari dispatch come props
    il codice di prima diventa props.onSubmit(expense); che è più testabile
    in qunato abbiamo astratto il dispatch. 
    Per evitare inline functions sarebbe meglio portare stateless function a componente
    FAAREMO 
    */
export const AddExpense = (props) => {
    return (
        <div>
            <p>aggiungi spese</p>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.onSubmit(expense);
                    props.history.push('/');
                }}

            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit : (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpense);