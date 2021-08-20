import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';


test('shoul NotFound component render', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchSnapshot(); 
})