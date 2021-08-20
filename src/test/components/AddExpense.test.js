import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import { expenses }  from '../../fixtures/expenses';



//per evitare codice duplicato possiamo usare delle global vedi doc jest
//per fare del codice che gira prima di ogni test

let onEdit, onSubmit, history, wrapper; 

beforeEach( () => {
    onSubmit = jest.fn(); 
    history = { push : jest.fn() };
    wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history} />);
})

test('should render add expense correctly', () => {
    expect(wrapper).toMatchSnapshot(); 
})

test('should handle the event onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

    expect(onSubmit).lastCalledWith(expenses[0]);
    expect(history.push).lastCalledWith('/');

})  
