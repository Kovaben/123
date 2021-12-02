import axios from "axios";

export class GenderGuesser{
    getGuess(name){
        let String = axios.get(' https://api.genderize.io/?name=tim' +name);
    return String;
    }
}