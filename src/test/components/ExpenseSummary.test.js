import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { expenses } from '../../fixtures/expenses';


test('shoul the Expense obj render', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);

    expect(wrapper).toMatchSnapshot();
})


