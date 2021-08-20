//TEST: 
/* I test si basano sulle asserzioni, cioè se il risultato non è uguale alla nostra assserzione allora throwno un eccezione altrimenti un cazzo
quando vengono fatti girare i test se lanciano eccezioni allora questi test non sono passsati.
    if( result !== 7){
        throw new Error('la merda di cane');
} 
Ovviamente non possiamo scrivere quest manfreda ogni volta, quindi jest ha predisposto un api per le asserzioni con il ritorno di messaggi che sborano.
JEST Ha un Watch mmode
*/


const add = (a, b) => a + b;
const generateGreeting = (name = 'troia') => 'Hello ' + name; 


test('Test somma', () => {
    const result = add(3, 4); 
    expect(result).toBe(7);
});

test('Greeting generation with argument', () => {
    const greeting = generateGreeting('Michele');

    expect(greeting).toBe('Hello Michele');
})

test('Greeting generation with default', () => {
    const greeting = generateGreeting();

    expect(greeting).toBe('Hello troia');
})