class Rover {
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   recieveMessage(message, results) {
      let response = {
         message: message
      }
      if (message === "STATUS_CHECK") {
         response["results"] = {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}}
      } else {
         response["results"] = results
      }
      return response;
   }
}

module.exports = Rover;