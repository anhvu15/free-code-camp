var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
function lookUp(firstName, prop){
    var found = false;
    var i = 0;
    var index = undefined;
    while(i < contacts.length  && !found){
        if (contacts[i].firstName === firstName) {
            found = true;
            index = i;
        }
        i++;
    }    
    if (found) {
        if (contacts[index].hasOwnProperty(prop)) {
            return contacts[index][prop];
        } else{
            return "No such property";
        }
    } else{
        return "No such contact";
    }
}

console.log(lookUp("Kristian", "lastName"));