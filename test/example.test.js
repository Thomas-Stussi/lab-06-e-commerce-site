// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCard } from '../renderCard.js';                         
const test = QUnit.test;


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const shivanDragon = {
        id: 'shivan',
        name: 'Shivan Dragon',
        image: 'shivan.jpg',
        description: `While it's true most Dragons are cruel, the Shivan Dragon seems to take particular glee in the misery of others, often tormenting its victims much like a cat plays with a mouse before delivering the final blow.`,
        category: 'Creature',
        price: 6199.99,
        color: 'red',
        mana: 6
    };

    const expected = `<li class="Creature" title="While it's true most Dragons are cruel, the Shivan Dragon seems to take particular glee in the misery of others, often tormenting its victims much like a cat plays with a mouse before delivering the final blow."><h3>Shivan Dragon</h3><img src="../assets/shivan.jpg" alt="Shivan Dragon image"><p class="price">$6199.99<button value="shivan">Add</button></p></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderCard(shivanDragon);
    const actual = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
