window.onload = function () {

    //Arrays with characters 

    let character = ["Goku", "Vegueta", "Freezer", "MajinBu", "Mr.Satan"]
    let action = ["killed", "helped", "struck", "froze", "kissed", "waited"]
    let article = "for"
    let affected = ["Krillin", "Picollo", "Shenlong", "Duglas", "Luis", "Jhonatan", "Naldi"]


    //the CREATION!! 


    for (let i = 0; i < character.length; i++)
        for (let j = 0; j < action.length; j++)
            for (let z = 0; z < affected.length; z++)


               console.log (character[i] + action[j] + article + affected[z] + ".com");


}
