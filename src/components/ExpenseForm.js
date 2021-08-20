import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



class ExpenseForm extends React.Component {
    
    constructor(props){
        super(props); 
        console.log(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : "Notes which are optional",
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState((prevState) => {
            return {
                description: description
            }
        })
    }

    onNoteChange = (e) => {
        //se non la metto in una variabile e lo uso direttamente nel set state va in erroe e devo usare e.persist()
        const note = e.target.value;
        this.setState((prevState) => ({
            note: note
        }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        //se matcia formato 122331.12 viene aggiornato altrmimenti sticazzi
        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount: amount }))
        }
    }

    onDateChange = (createAt) => {
        if (createAt) {
            this.setState(() => ({
                createdAt: createAt
            }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            //please description and amount 
            this.setState(() => ({
                error: 'Please set description and amount'
            }))
        } else {
            if (this.state.error) {
                this.setState(() => ({
                    error: ''
                }))
            }
            console.log(this.state.createdAt.valueOf());
            //clear the error
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount),
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error ? <p>Fuck you self</p> : null}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea placeholder={this.state.note} onChange={this.onNoteChange} />
                    {this.state.amount ? <button>Edit Expense</button>: <button>Create Expense</button>}
                </form>
            </div>
        );
    }
}

export default ExpenseForm;