$(document).ready(function() {

    //Kolory
    let Urodziny = '#f74aef';
    let DarkGreen = '#1d8518';
    let Blue = '#514ced';
    let Red = '#ff3030'

    
    
    $('#calendar').evoCalendar({
        theme: "Orange Coral",

        calendarEvents: [
          {
            name: "Dzień Piotrisha Demonisha",
            badge: "PD",
            date: ["February/24/2022"],
            description: "Dzień Piotrisha Demonisha - W tym dniu każdy mówi na każdego Piotrka Demonish, a każdy Piotr musi przyjść ubranym na czerwono.",
            type: "event",
            color: Red,
            everyYear: true,
          },
          
          {
            name: "Dzień Kiszonej Amelki",
            badge: "KA",
            date: ["January/26/2022"],
            description: "Dzień Kiszonej Amelki - W tym dniu każdy musi zjeść ogórka kiszonego."             + "<img src='../../images/KA.jpg' />", //Zdjęcie (opcjonalnie)
            type: "event",
            color: DarkGreen,
            everyYear: true,
          },

          {
            name: "Dzień Rosyjskiej Karoliny",
            badge: "RK",
            date: ["March/15/2022"],
            description: 'Dzień Rosyjskiej Karoliny - W tym dniu każdy zwraca się do każdego dodając końcówkę "ov" do imienia tej osoby.',
            type: "event",
            color: Blue,
            everyYear: true,
          },


          //Urodziny:
          {//Moje
            name: "Urodziny BK",
            badge: "Uro",
            date: ["April/14/2022"],
            description: 'Urodziny BK (i tak zapomnicie xd)',
            type: "birthday",
            color: Urodziny,
            everyYear: true,
          },

          {//Turek
            name: "Urodziny Turka",
            badge: "Uro",
            date: ["April/19/2022"],
            description: 'Urodziny Turka',
            type: "birthday",
            color: Urodziny,
            everyYear: true,
          },

          {//Amelka
            name: "Urodziny Amelki",
            badge: "Uro",
            date: ["April/28/2022"],
            description: 'Urodziny Amelki',
            type: "birthday",
            color: Urodziny,
            everyYear: true,
          },

          {//Karolina
            name: "Urodziny Karoliny",
            badge: "Uro",
            date: ["June/21/2022"],
            description: 'Urodziny Karoliny',
            type: "birthday",
            color: Urodziny,
            everyYear: true,
          },
        ]
    })
})


/*
długotrwałe wydarzenia:
    date: ["January/13/2020", "January/15/2020"],

Odznaka:
    badge: "02/13 - 02/15",
*/