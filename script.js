let button = document.querySelector('.button');
let teamsList;
let dropdown = document.querySelector('.dropdown');
let choice;
let output = document.querySelector('.output');
let randomNumber = Math.floor(Math.random() * 10);




fetch("https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=English_Premier_League")
.then(response => response.json())
.then(function(data) {
teamsList = data.teams;
console.log(teamsList);
button.addEventListener('click', function() {
console.log("clicked");
choice = dropdown.value;
console.log("Selected choice:", choice);
output.innerHTML = teamsList[randomNumber].strTeam;

})});


