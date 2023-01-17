import axios from "axios";
const baseUrl = "http://localhost:8080/perks";

export const PerkDataService = {
    getAllPerks,
    getPerkById,
    getPerks,
    getPositivePerks,
    getNegativePerks,
    sendPerksScore
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
