class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    //get woh value h jo user ko milegi
    //set woh value h jo data base m save hogi 
    //hum dono values ko alg rakh skte h
    //getter-setter mein aur contructor m race hone lgegi kyu dono same chij kr re h 
    //over ride krne ke liye get-set kje syntax mein under_score use krlete h jese this.email ki jgh this._email




    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);