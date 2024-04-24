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

  // // Test 9 <<<Rewrite>>>
  // test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  //   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  //   let message = new Message('Test Message', commands);
  //   let testRover = new Rover(0);
  //   expect(testRover.recieveMessage(message)).toEqual({"results": ["completed: true", "completed: true, roverStatus: {mode: 'LOW_POWER', generatorWatts: 110, position: 0}"]});
  // })

  // // Test 10 <<<Rewrite>>>
  // test("responds correctly to the status check command", function() {
  //   expect( new Rover(0).recieveMessage("STATUS_CHECK")).toEqual({"message": "STATUS_CHECK", "results": {"completed": true, "roverStatus": {"generatorWatts": 110, "mode": "NORMAL", "position": 87382098}}});
  // })

  // Test 11 <<<W.I.P.>>>
  // test("responds correctly to the mode change command", function() {
  //   // let testRover = new Rover(0)
  //
  //   // expect(completed).toEqual(true);
  //   // expect()
  // })

});
