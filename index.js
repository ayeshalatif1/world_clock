function updateTime(){
//los angeles time
let losAngeles = document.querySelector("#los-angeles")
let lsdateElem = losAngeles.querySelector(".date")
let lstimeElem = losAngeles.querySelector(".time")
let lscurrentTime = moment().tz("America/Los_Angeles")

lsdateElem.innerHTML = lscurrentTime.format("MMMM D, YYYY")
lstimeElem.innerHTML = `${lscurrentTime.format("h:mm:ss")} <small>${lscurrentTime.format("A")}</small>`


//Paris time

let paris = document.querySelector("#paris")
let prsdateElem = paris.querySelector(".date")
let prstimeElem = paris.querySelector(".time")
let prscurrentTime = moment().tz("Europe/Paris")

prsdateElem.innerHTML = prscurrentTime.format("MMMM D, YYYY")
prstimeElem.innerHTML = `${prscurrentTime.format("h:mm:ss")} <small>${prscurrentTime.format("A")}</small>`
}

// updateTime()
setInterval(updateTime, 1000);