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

      let status = {
         completed: false,
         roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
         }
      };

      for(let i = 0; i < message.commands.length; i++){
         if (message.commands[i].commandType === "MOVE"){
            if(this.mode === 'LOW_POWER'){
               response.results.push(status);
            } else if (this.mode === 'NORMAL'){
               this.mode = message.commands[i].value;
               this.position = message.commands[i].value;
               status.completed = true;
               response.results.push(status);
            } else {
               response.results.push("ERROR UNRECOGNIZED COMMAND")
            }
            
         } else if (message.commands[i].commandType === "STATUS_CHECK"){
            status.completed = true;
            response.results.push(status);

         } else if (message.commands[i].commandType === "MODE_CHANGE"){
            this.mode = message.commands[i].value;
            status.roverStatus.mode = message.commands[i].value;
            status.completed = true;
            response.results.push(status);
            
         } else {
            response.results.push("ERROR UNRECOGNIZED COMMAND");
         };
      };
      
      return response;
   }
}

module.exports = Rover;