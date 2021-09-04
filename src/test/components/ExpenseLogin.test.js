import React from 'react';
import { shallow } from 'enzyme';
import ExpenseLogin from '../../components/ExpenseLogin';


test('should the ExpenseLogin render', () => {
    const wrapper = shallow(<ExpenseLogin />); 

    expect(wrapper).toMatchSnapshot(); 
})

/* test('should the ExpenseLogin render the change of the username', () => {
    const wrapper = shallow(<ExpenseLogin />);

    

    expect(wrapper.state('username')).toBe('merda'); 
}) */