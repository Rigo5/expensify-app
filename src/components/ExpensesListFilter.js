import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';


export class ExpenseListFilter extends React.Component {
    state = {
        focusedInput: null
    }

    onInputChange = (e) => {
        this.props.onInputChange(e.target.value);
    }
 
    onSelectChange = (e) => {
        e.target.value === 'date' ? this.props.byDate() : this.props.byAmount();
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.endDate(endDate);
        this.props.startDate(startDate);
    }

    onFocusChange = ({ calendarFocused }) => {
        this.setState(() => ({
            calendarFocused: calendarFocused
        }))
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onInputChange} />
                <select onChange={this.onSelectChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="1"
                    endDate={this.props.filters.endDate}
                    endDateId="2"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput} 
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    isOutsideRange={(day) => false}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onInputChange : (value) => dispatch(setTextFilter(value)),
    byDate : () => dispatch(sortByDate()),
    byAmount : () => dispatch(sortByAmount()),
    endDate : (endDate) => dispatch(setEndDate(endDate)),
    startDate : (startDate) => dispatch(setStartDate(startDate))
})

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);

