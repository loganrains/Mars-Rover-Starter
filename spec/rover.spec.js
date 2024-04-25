const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // Test 7
  test("constructor sets position and default values for mode and generatorWatts", function() {
    expect( new Rover(0)).toEqual({"position": 0, "mode": "NORMAL", "generatorWatts": 110});
  })

  // Test 8
  test("response returned by receiveMessage contains the name of the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test Message', commands);
    let testRover = new Rover(0);
    expect(testRover.recieveMessage(message).message).toEqual("Test Message");
  })

  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test Message', commands);
    let testRover = new Rover(0);
    let testVariable = testRover.recieveMessage(message).results.length
    expect(testVariable).toEqual(2);
  })

  // Test 10
  test("responds correctly to the status check command", function() {
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Status Check Test', commands);
    let testRover = new Rover(0);
    let testVariable = testRover.recieveMessage(message).results;
    expect(testVariable).toEqual([{"completed": true, "roverStatus": {"generatorWatts": 110, "mode": "NORMAL", "position": 0}}]);
  })

  // Test 11
  test("responds correctly to the mode change command", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Mode change test', commands);
    let testRover = new Rover(0);
    let testVariable = testRover.recieveMessage(message).results[0].roverStatus.mode;
    expect(testVariable).toEqual('LOW_POWER');
  })

  // Test 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let commands = [new Command('MOVE', 10)];
    let message = new Message('Too tired', commands);
    let testRover = new Rover(0, "LOW_POWER");
    let testVariable = testRover.recieveMessage(message).results[0].completed;
    expect(testVariable).toEqual(false);
  })

  // Test 13
  test("responds with the position for the move command", function() {
    let commands = [new Command('MOVE', 10)];
    let message = new Message('Move', commands);
    let testRover = new Rover(0);
    let testVariable = testRover.recieveMessage(message).results[0].roverStatus.position;
    expect(testVariable).toEqual(10);
  })

});
