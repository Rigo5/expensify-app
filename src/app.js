import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { startSetExpenses} from './actions/expenses';
import { Provider } from 'react-redux';
import moment from 'moment';
import './styles/styles.scss';
//portare stile browser tutti ad uno stesso punto di partenza
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});



console.log(React.version)
//Provider permette l accesso easy allo store da parte di tutti i componenti figli
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})

