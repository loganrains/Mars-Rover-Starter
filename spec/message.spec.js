const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    // Test 4 <<<Rewrite>>>
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error("Name required."));
    });

    // Test 5 <<<Rewrite>>>
    test("constructor sets name", function() {
        expect( new Message("x")).toEqual({"name": "x", "commands": undefined});
    });

    // Test 6 <<<Rewrite>>>
    test("contains a commands array passed into the constructor as the 2nd argument", function() {
        expect( new Message("x", ["y", "z"])).toEqual({"name": "x", "commands": ["y", "z"]});
    });
});