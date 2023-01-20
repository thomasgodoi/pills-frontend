import axios from "axios";
const baseUrl = "http://localhost:8080/perks";

export const PerkDataService = {
    getAllPerks,
    getPerkById,
    getPerks,
    getPositivePerks,
    getNegativePerks,
    sendPerksScore,
    getPerkMostWins,
    getPerkMostLosses,
    getPerkHotStreak,

    handleTierColor,
    handleTierShadow
};

function getAllPerks() {
    return axios.get(baseUrl + `/find-all`);
}

function getPerkById(perkId) {
    return axios.get(baseUrl + `/by-id/${perkId}`);
}

function getPerks() {
    return axios.get(baseUrl + `/find-perks`);
}

function getPositivePerks() {
    return axios.get(baseUrl + "/positives");
}

function getNegativePerks() {
    return axios.get(baseUrl + "/negatives");
}

function sendPerksScore(perkList, isWinner) {
    return axios.put(baseUrl + `/add-score/${perkList}/${isWinner}`);
}

function getPerkMostWins() {
    return axios.get(baseUrl + `/find-most-wins`);
}

function getPerkMostLosses() {
    return axios.get(baseUrl + `/find-most-losses`);
}

function getPerkHotStreak() {
    return axios.get(baseUrl + `/find-hot-streak`);
}



function handleTierColor(tier) {
    switch(tier) {
        case "S+":
            return "gold"

        case "D":
            return "grey"
        
        case "E":
            return "grey"

        default:
            return "white";
    }
}

function handleTierShadow(tier) {
    const goldShadow = "0 0 3px rgb(255, 215, 0, 0.8)";
    const whiteShadow = "0 0 3px rgb(255, 255, 255, 0.8)";
    const silvershadow = "0 0 3px rgb(192, 192, 192, 0.8)";


    switch(tier) {
        case "S+":
            return goldShadow;

        case "D" || "E":
            return silvershadow;
            
        default:
            return whiteShadow;
    }
}