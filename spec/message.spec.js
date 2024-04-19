const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    // Test 4
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error("Name required."));
    });

    // Test 5
    test("constructor sets name", function() {
        expect( new Message("Test Message")).toEqual({"name": "Test Message", "commands": undefined});
    });

    // Test 6
    test("contains a commands array passed into the constructor as the 2nd argument", function() {
        let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let message = new Message('Test Message', commands);
        
        expect(message.commands).toEqual([{"commandType": "MODE_CHANGE", "value": "LOW_POWER"}, {"commandType": "STATUS_CHECK", "value": undefined}]);
    });
});