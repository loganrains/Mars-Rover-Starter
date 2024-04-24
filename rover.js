class Rover {
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   recieveMessage(message) {
      let response = {
         message: message.name,
         results: [],
      }
      
      return response;
   }
}

module.exports = Rover;