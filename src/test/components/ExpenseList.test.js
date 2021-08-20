import { ExpenseList } from "../../components/expensesList";
import React from 'react';
import { shallow } from 'enzyme';
import moment from "moment";


const testData = [
    {
        id: '1',
        description: 'merda',
        amount : 10,
        note: 'merdamerda',
        createdAt : moment(0).valueOf()
    },
    {
        id: '2',
        description: 'merda2',
        amount : 15,
        note: 'merdamerda2',
        createdAt : moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'merda3',
        amount : 300,
        note: 'merdamerda3',
        createdAt : moment(0).add(4, 'days').valueOf()
    }
]

test('testo la lista di item verso snapshot', () => {
    const wrapper = shallow(<ExpenseList expenses={testData} />);

    expect(wrapper).toMatchSnapshot(); 
});


test('test should render expense list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    
    expect(wrapper).toMatchSnapshot();
})