
export class Contact {
    name =""; 
    surName = ""; 
    email = "";
    conected = false;

    // *can use like prop
    constructor(name, surName, email, conected){
        this.name = name;
        this.surName = surName;
        this.email = email;
        this.conected = conected;
    }
}