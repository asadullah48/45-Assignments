// Task # 21

import path from "path";

 interface patientProfile {

    name : string;
    age : number;
    gender: string;
    medicalrecord : number;
    diagnosis: string;
    treatment: string;
    phonenumber : number,
    email : string,

    };

    let patientProfile ={

        name: "Abdul Hameed",
        age : 35,
        gender: "male",
        medicalrecord : 12345,
        diagnosis: "Coronary artery disease",
        treatment: "Surgery",
        phonenumber : 33265789,
        email : "abdulhameed@gmai.com",
    };

    console.log(patientProfile);