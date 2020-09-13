// Write your JavaScript code here!
window.addEventListener("load", function() {
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
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json){
            const div = document.getElementById("missionTarget");
            div.innerHTML =`
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}">   
            `
         });
      });
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || isNaN(fuelLevelInput.value) === true || cargoMassInput.value === "" || isNaN(cargoMassInput.value) === true){
         alert("All fields required");
         event.preventDefault();
      }else{
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
         };
         if (cargoMassInput.value > 10000) {
            launchStatus.style.visibility = `visible`
            launchStatus.style.color = `red`
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            cargoStatus.style.visibility = `visible`
            cargoStatus.innerHTML = `Too much mass for the shuttle to take off.`
         }
      };
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
