const person = {
    name: 'Andrew',
    age : 26,
    location: {
        city: 'Tolmezzo',
        temp: 30
    }
};

//con questa sintassi settiamo un valore di default
const {name = 'minchia', age} = person;

//con questa sintassi rinominiamo la variabili
const {city , temp: temperature } = person.location;

console.log( name + ' ha ' + age + ' anni');

const book = {
    title : 'Merda di cane',
    author : 'Michele',
    publisher : {
        name : 'pinguin'
    }
};

const { name : publisherName = 'Self-Published'} = book.publisher; 

console.log(publisherName); 


//ARRAY DISTRUCTORING 

const address = ['1299 Merda di Cane', 'Tolmezzo', 'Italia', '33028'];


//distrutturo solo il secondo e il terzo elemento dell'array
//il naming non conta in qunato si basa sulle posizioni e si possono settare i default
const [, cityArray, nomeStato = 'caneMatto'] = address;


console.log('you are in ' + nomeStato);