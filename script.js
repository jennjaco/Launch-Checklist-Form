// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*6);
         div.innerHTML =`
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">   
         `
      });
   });
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus= document.getElementById("launchStatus");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields required");
         event.preventDefault();
      }else if (isNaN(pilotNameInput.value) !== true || isNaN(copilotNameInput.value) !== true) {
         alert("Pilot or CoPilot names invalid");
         event.preventDefault();
      }else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true){
         alert("Please enter valid numbers for Fuel Level and Cargo Mass");
         event.preventDefault();
      }
         event.preventDefault();
         pilotStatus.style.visibility = `visible`
         pilotStatus.innerHTML = `Mission Commander: ${pilotNameInput.value} Status: Ready for launch`;
         copilotStatus.style.visibility = `visible`
         copilotStatus.innerHTML = `First officer: ${copilotNameInput.value} Status: Ready for launch`;
         launchStatus.innerHTML = `Shuttle ready for launch`
         launchStatus.style.color = `green`

         if (fuelLevelInput.value < 10000) {
            launchStatus.style.visibility = `visible`
            launchStatus.style.color = `red`
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            fuelStatus.style.visibility = `visible`
            fuelStatus.innerHTML = `Not enough fuel for the journey.`
         }else{
            fuelStatus.style.visibility = 'hidden'
         };

         if (cargoMassInput.value > 10000) {
            launchStatus.style.visibility = `visible`
            launchStatus.style.color = `red`
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            cargoStatus.style.visibility = `visible`
            cargoStatus.innerHTML = `Too much mass for the shuttle to take off.`
         }else{
            cargoStatus.style.visibility = 'hidden'
         }
      
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
