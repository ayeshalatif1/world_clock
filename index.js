function updateTime() {
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

updateTime()
setInterval(updateTime, 1000);


function updateCity(event) {

    let inputZone = event.target.value   //taking selected city to display timezone
    let cityName = inputZone.replace("_", " ").split("/")[1]    //if its New_York, it will be New York
    let time = moment().tz(inputZone)  //through moment, time of that specific timezone is displayed

    let citiesElem = document.querySelector("#cities")   //targeting main div
    let cityElemContent = `<div class="city">        
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${time.format("MMMM Do YYYY")}</div>
                </div>
                <div>
                    <div class="time">${time.format("h:mm:ss")}<small>${time.format("A")}</small></div>
                </div>
            </div>`
    citiesElem.innerHTML = cityElemContent

}

let citiesSelectElement = document.querySelector("#city")      //targeting select elem for city input
citiesSelectElement.addEventListener("change", updateCity)     //on every change of value run this function 