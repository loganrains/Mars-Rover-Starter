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
      };

      let possibleResults = {
         completed: true,
         roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
         }
      };

      for(let i = 0; i < message.commands.length; i++){
         if (message.commands[i].commandType === "MOVE"){
            response.results.push(possibleResults);
         } else if (message.commands[i].commandType === "STATUS_CHECK"){
            response.results.push(possibleResults);
         } else if (message.commands[i].commandType === "MODE_CHANGE"){
            response.results.push(possibleResults);
         } else {
            response.results.push("ERROR UNRECOGNIZED COMMAND");
         }
      };
      
      return response;
   }
}

module.exports = Rover;