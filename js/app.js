$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme: "Orange Coral",

        calendarEvents: [
          {
            name: "Dzień Piotrish Demonisha",
            badge: "PD",
            date: ["February/24/2020"],
            description: "Dzień Piotrish Demonisha - W tym dniu każdy mówi na każdego Piotrka Demonish, a każdy Piotr musi przyjść ubranym na czerwono.",
            type: "event",
            color: "#ff3030",
            everyYear: true,
          },
          
          {
            name: "Dzień Kiszonej Amelki",
            badge: "KA",
            date: ["January/26/2020"],
            description: "Dzień Kiszonej Amelki - W tym dniu każdy musi zjeść ogórka kiszonego.",
            type: "event",
            color: "#1d8518",
            everyYear: true,
          }
        ]
    })
})


/*
długotrwałe wydarzenia:
    date: ["January/13/2020", "January/15/2020"],

Odznaka:
    badge: "02/13 - 02/15",
*/