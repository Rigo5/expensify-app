import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { expenses } from '../../fixtures/expenses';
import moment from 'moment';

/* Il problema che abbiamo è che questo componente all interno 
    ha delle funzioni come moment  che ogni volta che viene renderizzato il
    componente cambiano di valore, sputtanando il match. Creiamo un mock
*/
test('should expense form render correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
})


test('should expense form render correctly with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

    expect(wrapper).toMatchSnapshot();
})


/* Come cazzo testo gli event handlers ??
   Simuliamo con enzyme
*/

test('should render error from invalid form sub', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    //mocchiamo prevent default senno ci va in errore
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    //quando simuliamo questo submit l'handler agisce sullo stato del componente
    //quindi per verificare che questo funzioni dobbiamo vedere lo stato del wrapper
    //in queesto caso ci aspettiamo che parta l'errore
    //per prima cosa accediamo all'elemento e poi spariamo l evento
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    //gli snapshot qua per vedere se viene renderizzato l'errore
    expect(wrapper).toMatchSnapshot();
})


test('should set the change of description input', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: 'Minchia di cane lesb'
        }
    });

    expect(wrapper.state('description')).toBe('Minchia di cane lesb');

})

test('should set the change of note textarea', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
        target: {
            value: 'Minchia di cane lesb'
        }
    });

    expect(wrapper.state('note')).toBe('Minchia di cane lesb');

})


test('should set the change of amount input', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: '12.50'
        }
    });

    expect(wrapper.state('amount')).toBe('12.50');

})

test('should not set the change of incorrect format amount input', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: 'jfolkdjslf'
        }
    });

    expect(wrapper.state('amount').length).toBe(0);

})

/*  Ora lavoriamo con le spy che sono funzioni mockate
    Queste verranno passate al posto delle funzioni che deovno essere realmente chiamate
    cosi da vedere quante volte sono srtate chiamate, gli args ecc
*/

test('should call onsubmit prop for valid sub', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })

    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toBeCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    });
})

test('should set new date on date change', () => {
    const value = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onDateChange')(value);
    expect(wrapper.state('createdAt')).toEqual(value);
})

test('should set new focus on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(true);
})

