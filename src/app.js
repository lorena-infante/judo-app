import {DataManager} from './components/dataManager/dataManager.js';
const rootDataMng = "./";
var fs = require('fs');
const Competition_manager = new DataManager(rootDataMng);
const competitions = await  Competition_manager.getCompetitions();
const judokas = await  Competition_manager.getJudokas();


//debugger;

console.log(judokas['judokas'])
competitions["competitionList"].forEach((el) => {
    console.log(`${el.name},${el.date},${el.place}`);
  });
  judokas['judokas'].forEach((el) => {
    console.log(`${el.name}`);
  });

//const judoka = {name: "Lorena", surname: "Perez", age: 21, weight:55, height: 1.56, category: "junior", belt: "verde", club: "Judo Club Perico los Palotes"};
//const competition={name: "Ejemplo3",date: "2024-01-01",place: "Machalí"}
//Competition_manager.newJudoka(judoka);
//Competition_manager.newCompetition(competition)
//Competition_manager.deleteJudokabyID("89f6d8a0-73cf-4639-86d5-0f9c3cce23e0")
//Competition_manager.deleteCompetitionbyID("b23f111c-e2d8-48c9-9b1f-64ad324621f2")



Competition_manager.updateJudoka("a2c58231-fb33-4cb2-8313-71c6eb64033b",{weight: 60,height: 1.73})
