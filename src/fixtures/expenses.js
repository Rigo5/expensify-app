import moment from 'moment';


export const expenses =  [
    {
        id: '1',
        description: 'merda',
        amount : 10,
        note: 'merdamerda',
        createdAt : moment(0).valueOf()
    },
    {
        id: '2',
        description: 'merda2',
        amount : 15,
        note: 'merdamerda2',
        createdAt : moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'merda3',
        amount : 300,
        note: 'merdamerda3',
        createdAt : moment(0).add(4, 'days').valueOf()
    }
]; 