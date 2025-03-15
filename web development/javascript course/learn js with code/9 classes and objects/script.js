//Qs you are creating a website for your college. create a class user with 2 properties , name & email
//It also has a method called viewData() that allows the user to view website data.

let DATA = "secret information";

class User {
    constructor (name, email){
        this.name = name; 
        this.email = email;
    }

    viewData(){
        console.log("data =", DATA);
    }
}

let student1 = new User("shraddha", "abc@gmail.com");
let student2 = new User("aman","aman@gmail.com");

//Qs create a new class called admin which inherits from user . add a new method called editData to 
//Admin that allows it to edit website data.

class Admin extends User {
    constructor (name, email){
        super(name, email);
    }
    editData () {
        DATA = "some new value";
    }
}

let admin1 = new Admin("admin", "admin@college.com");
