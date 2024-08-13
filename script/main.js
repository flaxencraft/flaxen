const name ="FLAXEN";
let age =13;

const biodata = document.getElementById('biodata');

function generateBiodata() {
    let generation;

    if(age > 10 && age < 19) {
        generation = "generasi remaja"
    } 
    
    else if (age > 18 && age < 31) {
        generation = "generasi dewasa"
    }

    else if (age > 30) {
        generation = "generasi tua"
    }

    else if (age > 0 && age < 6) {
        generation ="generasi bayi"
    }

    else {
        generation = "generasi apa kamu?"
    }

    return biodata.innerHTML = generation;

}

console.log(name);
console.log(age);

generateBiodata();