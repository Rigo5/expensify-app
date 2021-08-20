import React from 'react';
import { shallow } from 'enzyme';
import { Edit } from '../../components/Edit';
import {expenses} from '../../fixtures/expenses';

let wrapper, history, onSubmit;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push : jest.fn()};

    wrapper = shallow(<Edit expense={expenses[0]} onSubmit={onSubmit} history={history}/>);
})


test('should Edit render', () => {

    expect(wrapper).toMatchSnapshot(); 
})

test('should onSubmit event handler', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(onSubmit).lastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).lastCalledWith('/');

})

