import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('should expense dashboard render', () => {
    const wrapper = shallow(<ExpenseDashboard />);

    expect(wrapper).toMatchSnapshot();
})
