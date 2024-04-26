class Rover {
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   receiveMessage(message) {
      let response = {
         message: message.name,
         results: [],
      };


      for(let i = 0; i < message.commands.length; i++){
        
         let status = {
            completed: false,
            roverStatus: {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
            }
         };
        
         if (message.commands[i].commandType === "MOVE"){
            if(this.mode === 'LOW_POWER'){
               status.completed = false;
               response.results.push(status);
            } else if (this.mode === 'NORMAL'){
               this.position = message.commands[i].value;
               status.roverStatus.position = message.commands[i].value;
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
         }; console.log(response);
      };
      return response;
   }
}

module.exports = Rover;