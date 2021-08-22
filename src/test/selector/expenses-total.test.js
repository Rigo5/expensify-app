import {expenses} from '../../fixtures/expenses';
import getTotal from '../../selectors/expenses-total';


test('should add just one expense', () => {
    const total = getTotal([expenses[0]]);

    expect(total).toBe(10);
})
test('shoul sum up all the amounts', () => {
    const total = getTotal(expenses);

    expect(total).toBe(325);
})

test('shoul return zero if no expenses', () => {
    const total = getTotal([]);

    expect(total).toBe(0);
})