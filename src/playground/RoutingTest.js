import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboard = () => {
    return (
        <div>
            <p>la merda di cane puzza</p>
        </div>
    );
}

const AddExpenseComponent = () => {
    return (
        <div>
            <p>aggiungi spese</p>
        </div>
    );
}

const HelpComponent = () => {
    return (
        <div>
            <p>Pagina di aiuto</p>
        </div>
    );
}

const EditComponent = () => {
    return (
        <div>
            <p>Pagina per modificare le spese</p>
        </div>
    );
}

const NotFoundComponent = () => {
    return (
        <div>
            <p>404</p>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h1>Expensive app</h1>
            <div>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                <NavLink to="/edit" >Edit</NavLink>
            </div>
        </header>
    );
}

const routes = (
    //browserRouter si aspetta un solo elemento quindi dobbiamo wrappare le route in una division
    //si vede se il path specificato matcha il patch che ci arriva. "/" li amtcha tutti per quello mettiamo a true exact 
    //questo significa che deve essere tutto il path uguale a /
    //Con switch invece va in ordine e la prima che matcia viene renderizzata
    //<Header /> comparirà in ogni pagina qua ci si piazza i link di navigazione
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/help" component={HelpComponent} />
                <Route path="/edit" component={EditComponent} />
                <Route path="/create" component={AddExpenseComponent} />
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route component={NotFoundComponent} />
            </Switch>
        </div>
    </BrowserRouter>
);


import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboard = () => {
    return (
        <div>
            <p>la merda di cane puzza</p>
        </div>
    );
}

const AddExpenseComponent = () => {
    return (
        <div>
            <p>aggiungi spese</p>
        </div>
    );
}

const HelpComponent = () => {
    return (
        <div>
            <p>Pagina di aiuto</p>
        </div>
    );
}

const EditComponent = () => {
    return (
        <div>
            <p>Pagina per modificare le spese</p>
        </div>
    );
}

const NotFoundComponent = () => {
    return (
        <div>
            <p>404</p>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h1>Expensive app</h1>
            <div>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                <NavLink to="/edit" >Edit</NavLink>
            </div>
        </header>
    );
}

const routes = (
    //browserRouter si aspetta un solo elemento quindi dobbiamo wrappare le route in una division
    //si vede se il path specificato matcha il patch che ci arriva. "/" li amtcha tutti per quello mettiamo a true exact 
    //questo significa che deve essere tutto il path uguale a /
    //Con switch invece va in ordine e la prima che matcia viene renderizzata
    //<Header /> comparirà in ogni pagina qua ci si piazza i link di navigazione
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/help" component={HelpComponent} />
                <Route path="/edit" component={EditComponent} />
                <Route path="/create" component={AddExpenseComponent} />
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route component={NotFoundComponent} />
            </Switch>
        </div>
    </BrowserRouter>
);


