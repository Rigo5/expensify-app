const getExpenseTotal = (expenses) => {
    if(!expenses.length){
        return 0;
    }

    const amounts = expenses.map( (expense) => expense.amount);
    return amounts.reduce( (sum, currentValue = 0) => {
        return sum + currentValue;
    } )
}

export default getExpenseTotal; 