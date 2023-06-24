let guestTeam = document.getElementById("guest-team")
let homeTeam = document.getElementById("home-team")
let homeScore = 0
let guestScore = 0 


 function increase1() {
    homeScore += 1
    homeTeam.textContent = homeScore
     
 } 

 function increase2() {
    homeScore += 2
    homeTeam.textContent = homeScore

 }

 function increase3() {
    homeScore += 3
    homeTeam.textContent = homeScore
 }

 function gIncrease1() {
  guestScore += 1
  guestTeam.textContent = guestScore
 } 

 function gIncrease2() {
    guestScore += 2
    guestTeam.textContent = guestScore

 }

 function gIncrease3() {
    guestScore += 3
    guestTeam.textContent = guestScore
 }
 