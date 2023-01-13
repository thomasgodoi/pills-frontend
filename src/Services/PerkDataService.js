class PerkService {

    alertRandomNumber() {
        return alert(Math.random())
    }

    logRandomNumber() {
        return console.log(Math.random())
    }
}

export default new PerkService();