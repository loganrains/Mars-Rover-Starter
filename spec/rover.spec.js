const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // Test 7 <<<Rewrite>>>
  test("constructor sets position and default values for mode and generatorWatts", function() {
    expect( new Rover(0)).toEqual({"position": 0, "mode": "NORMAL", "generatorWatts": 110});
  })

  // Test 8 <<<Rewrite>>>
  test("response returned by receiveMessage contains the name of the message", function() {
    expect( new Rover(0).recieveMessage("x", ["y", "z"])).toEqual({"message": "x", "results": ["y", "z"]});
  })

  // Test 9 <<<Rewrite>>>
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    expect( new Rover(0).recieveMessage("x", ["y", "z"])).toEqual({"message": "x", "results": ["y", "z"]});
  })

  // Test 10 <<<Rewrite>>>
  test("responds correctly to the status check command", function() {
    expect( new Rover(0).recieveMessage("STATUS_CHECK")).toEqual({"message": "STATUS_CHECK", "results": {"completed": true, "roverStatus": {"generatorWatts": 110, "mode": "NORMAL", "position": 87382098}}});
  })

  // Test 11 <<<W.I.P.>>>
  // test("responds correctly to the mode change command", function() {
  //   // let testRover = new Rover(0)
  //
  //   // expect(completed).toEqual(true);
  //   // expect()
  // })

});
