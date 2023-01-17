import axios from "axios";
const baseUrl = "http://localhost:8080/api";

export const PerkDataService = {
    alertRandomNumber,
    logRandomNumber,
    getTeste
};


function alertRandomNumber() {
    return alert(Math.random())
}

function logRandomNumber() {
    return console.log(Math.random())
}

function getTeste() {
    console.log('chegou')
    // return "http://localhost:8080/api/teste"
    return axios.get(baseUrl + "/teste")
}