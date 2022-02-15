// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderIngredientLI, renderMealLI } from '../util.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>1 Cups of sugar</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredientLI({ qty: 1, measurement: 'Cups', ingredient: 'sugar' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test a function2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>zdfnzdn - 1 Ingredients</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMealLI({ name: 'zdfnzdn', count: 1 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
