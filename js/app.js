$(document).ready(function() {

    //Kolory
    let Urodziny = '#f74aef';
    let DarkGreen = '#1d8518';
    let Lime = '#4ec75c';
    let Blue = '#514ced';
    let LightBlue = '#45a8ff';
    let Red = '#ff3030'
    let Aqua = '#45ffc4';

    
    
    $('#calendar').evoCalendar({
        theme: "Orange Coral",

        calendarEvents: [
          {
            name: "Dzień Piotrisha Demonisha",
            badge: "PD",
            date: ["March/24/2022"],
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

          {
            name: "Dzień zazdrosnej Amelki",
            badge: "ZA",
            date: ["February/27/2022"],
            description: "Dzień zazdrosnej Amelki" + "<img src='../../images/ZA.gif' />",
            type: "event",
            color: Lime,
            everyYear: true,
          },

          {
            name: "Dzień kłamstw",
            badge: "DK",
            date: ["January/28/2022"],
            description: "Dzień kłamstw - w tym dniu każdy może normalnie skłamać każdemu i nic się nie stanie.",
            type: "event",
            color: LightBlue,
            everyYear: true,
          },

          {
            name: "",
            badge: "DK",
            date: ["January/28/2022"],
            description: "Dzień kłamstw - w tym dniu każdy może normalnie skłamać każdemu i nic się nie stanie.",
            type: "event",
            color: LightBlue,
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
            name: "🥳 Urodziny Turka",
            badge: "Uro",
            date: ["April/19/2022"],
            description: 'Urodziny Turka 🎂',
            type: "birthday",
            color: Urodziny,
            everyYear: true,
          },

          {//Amelka
            name: "🥳 Urodziny Amelki",
            badge: "Uro",
            date: ["April/28/2022"],
            description: 'Urodziny Amelki 🎂',
            type: "birthday",
            color: Urodziny,
            everyYear: true,
          },

          {//Karolina
            name: "🥳 Urodziny Karoliny",
            badge: "Uro",
            date: ["July/21/2022"],
            description: 'Urodziny Karoliny 🎂',
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
