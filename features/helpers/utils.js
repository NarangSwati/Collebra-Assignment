import { Chance } from "chance";

export const getRandomEmailAddress = ()=>{
    const chance = new Chance();
    let email =chance.email({domain: "example.com"}); 
    return email;
}








