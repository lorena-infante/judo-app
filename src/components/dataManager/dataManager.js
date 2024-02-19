var fs = require('fs');
export default class DataManager {
    constructor(basepath) {
        this.folderpath = `${basepath}/data/`;
        this.competitionList = [];
        console.log("Folderpath:", `${this.folderpath}/competitions.json`);
    }
    async getCompetitions() { 
            const response = await fetch(`${this.folderpath}/competitions.json`);
            const data = await response.json();
            return data;
    }
    async newCompetition(newCompetition)
    {
        const competitionList = await  this.getCompetitions();
        competitionList["competitionList"].push(newCompetition)
        const new_competitionList = JSON.stringify(competitionList);

        // writing the JSON string content to a file
        fs.writeFile(`${this.folderpath}/competitions.json`, new_competitionList, (error) => {
            if (error) {
                console.error(error);
                throw error;
            }
            console.log("data.json written correctly");
        });
    }
    async getJudokas() {
        const response = await fetch(`${this.folderpath}/judokas.json`);
        const data = await response.json();
        return data;
    }
    async newJudoka(newjudoka) {
        const judokas = await  this.getJudokas();
        judokas["judokas"].push(newjudoka)
        const new_judokas = JSON.stringify(judokas);
        fs.writeFile(`${this.folderpath}/judokas.json`, new_judokas, (error) => {
            if (error) {
                console.error(error);
                throw error;
            }
            console.log("data.json written correctly");
        });
    }
}

//module.exports = DataManager;
