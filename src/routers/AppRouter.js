import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import Edit from '../components/Edit';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Help from '../components/Help';
import ExpenseLogin from '../components/ExpenseLogin';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/help" component={Help} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route path="/create" component={AddExpense} />
                    <Route path="/dashboard" conponent={ExpenseDashboard} />
                    <Route path="/" component={ExpenseLogin} exact={true} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};


export default AppRouter;

