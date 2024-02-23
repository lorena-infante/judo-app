var fs = require('fs');
export class DataManager {
    constructor(basepath) {
        this.folderpath = `${basepath}/data/`;
        this.competitionList = [];
        console.log("Folderpath:", `${this.folderpath}/competitions.json`);
    }
    async updateDB(database,newdata){
        fs.writeFile(`${this.folderpath}/${database}.json`, newdata, (error) => {
            if (error) {
                console.error(error);
                throw error;
            }
            console.log(`updated ${database}`);
        });

    }
    async getCompetitions() { 
            const response = await fetch(`${this.folderpath}/competitions.json`);
            const data = await response.json();
            return data;
    }
    async newCompetition(newCompetition)
    {
        const competitionList = await  this.getCompetitions();
        newCompetition["id"]=crypto.randomUUID()
        competitionList["competitionList"].push(newCompetition)
        const new_competitionList = JSON.stringify(competitionList);
        this.updateDB("competitions",new_competitionList);
    }
    async getJudokas() {
        const response = await fetch(`${this.folderpath}/judokas.json`);
        const data = await response.json();
        return data;
    }
    async newJudoka(newjudoka) {
        const judokas = await  this.getJudokas();
        newjudoka["id"]=crypto.randomUUID()
        judokas["judokas"].push(newjudoka)
        const new_judokas = JSON.stringify(judokas);
        this.updateDB("judokas",new_judokas);
    }
    async deleteJudokabyID(IDtoDelete){
        const promise = await (this.getJudokas());
        const judokas=promise['judokas']
        for(const judoka of judokas){
            if(judoka["id"]===IDtoDelete){
                judokas.splice(judokas.indexOf(judoka), 1);
                console.log("Judoka deleted")
                const newJudokasDB={
                    'judokas':judokas
                }
                const new_judokas = JSON.stringify(newJudokasDB);
                this.updateDB("judokas",new_judokas);
                return true;
            }
        }
        console.log("job done")
    }
    async deleteCompetitionbyID(IDtoDelete){
        const promise = await (this.getCompetitions());
        const competitions=promise['competitionList']
        for(const competition of competitions){
            if(competition["id"]===IDtoDelete){
                competitions.splice(competitions.indexOf(competition), 1);
                console.log("Competition deleted")
                const newCompetititonsDB={
                    'competitionList':competitions
                }
                const new_competitions = JSON.stringify(newCompetititonsDB);
                this.updateDB("competitions",new_competitions);
                return true;
            }
        }
        console.log("job done")
    }
    async getJudokabyID(judokaID){
        const promise = await this.getJudokas()
        const judokas = promise['judokas']
        for (const judoka in judokas){
            if (judoka['id']===judokaID){
                return judoka;
            }
        }
    }
    async updateJudoka(judokaID,new_parameters){
        const promise = await this.getJudokas()
        const judokas = promise['judokas']
        let judoka_target={};
        for (const judoka of judokas){
            console.log(judoka)
            if (judoka['id']===judokaID){
                console.log("judoka was found")
                judoka_target=judoka;
                for(const param of Object.keys(new_parameters)){
                    console.log(param)
                    if (judoka_target.hasOwnProperty(param)){
                        judoka_target[param]=new_parameters[param]                  
                    }
                }
                const new_judokas = JSON.stringify(judokas);
                this.updateDB("judokas",new_judokas);
            }

        }
    }
    async updateJudoka(judokaID,new_parameters){
        const promise = await this.getJudokas()
        const judokas = promise['judokas']
        let judoka_target={};
        for (const judoka of judokas){
            console.log(judoka)
            if (judoka['id']===judokaID){
                judoka_target=judoka;
                for(const param of Object.keys(new_parameters)){
                    console.log(param)
                    if (judoka_target.hasOwnProperty(param)){
                        judoka_target[param]=new_parameters[param];                  
                    }
                }
                const new_judokas = JSON.stringify({"judokas":judokas});
                this.updateDB("judokas",new_judokas);
            }
        }
    }
    async updateCompetition(competitionID,new_parameters){
        const promise = await this.getCompetitions()
        const competitions = promise['competitionList']
        let comp_target={};
        for (const comp of competitions){
            if (comp['id']===competitionID){
                comp_target=comp;
                for(const param of Object.keys(new_parameters)){
                    if (comp_target.hasOwnProperty(param)){
                        comp_target[param]=new_parameters[param];               
                    }
                }
                const new_comp = JSON.stringify({"competitionsList":competitions});
                this.updateDB("competitions",new_comp);
            }
        }
    }
}




//module.exports = DataManager;
