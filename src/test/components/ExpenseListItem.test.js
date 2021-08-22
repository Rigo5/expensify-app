import React from 'react'; 
import { shallow } from 'enzyme';
import { ExpensesListItem } from '../../components/ExpensesListItem';
import { expenses } from '../../fixtures/expenses';


let wrapper, onClick; 
beforeEach(() => {
    onClick = jest.fn(); 
    wrapper = shallow(<ExpensesListItem key={expenses[0].id} {...expenses[0]} onClick={onClick} />);
});

test('shoul list item render with one expense', () => {

    expect(wrapper).toMatchSnapshot();
})


test('should remove handler', () => {

    wrapper.find('button').simulate('click');

    expect(onClick).lastCalledWith(expenses[0].id);
})