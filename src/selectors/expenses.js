//SELECTORS: Sono funzioni per recuperare dati dai container redux
//In questo caso recuperiamo le spese utilizzando tutti i filtri possibili

//Ora utlizziamo il filtro per effettivamente filtrare le spese creiamo una funzione che faccai questo
//che mettiamo in subscribe cosi ogni volta che cambiamo qualcosa sbombiamo il tutto
import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {

    return expenses.filter( (expense) =>
        {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
            const textMatch = expense.description.toLowerCase().includes(text); 
            return startDateMatch &&  endDateMatch &&  textMatch;
        }
    ).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? -1 : 1;
        }
    });
}

export default getVisibleExpenses;