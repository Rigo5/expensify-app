import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from  '../../components/Header';
import { shallow } from 'enzyme';

//il test dei componenti non è un vero e proprio test, nel senso che vengono utilizzati gli snapshot.
//Gli snap shot sono sostanzialmente html del componente renderizzato  che vengono storati. 
//Se il componete viene modificato per passare il test, o combacia con quello storato o si approva la modifica e 
//si fa l'update dello snapshot
//Enzyme usa gli snap shot ma ci aggiunge funzionalita di analisi dell albero html per analizzare numero nodi e specifiche di questi.
//Cose che con reacy-renderer non se po fare

test('shoul render the header correctly', () => {
    //renderizziamo il componente a un livello più basso del browser per testarlo
    /* const renderer = new ReactShallowRenderer(); 
    //renderizziamo jsx component
    renderer.render(<Header />); 
    expect(renderer.getRenderOutput()).toMatchSnapshot(); */

    const wrapper = shallow(<Header />);
    //questo permette di selezionare nello snap tramite class, id  o tag name e ritorna array
    //expect(wrapper.find('h1').length).toBe(1)
    //per permettere a enzyme di lavorare con gli snapshot dobbiamo far si che quelli che va a salvare non abbiano 
    //la parte di codice spazzatura ma solo il componente renderizzato dobbiamo installare enzyme-to-json. 
    //Questo è stato impostato nel file di configurazione di jest e gira in automatico
    expect(wrapper).toMatchSnapshot();
})