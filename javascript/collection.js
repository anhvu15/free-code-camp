var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {

  if(value!=="" && prop !=="tracks"){
     collection[id][prop] = value;
   }
   else if (value !=="" && prop === "tracks") {
     collection[id].tracks.push(value);
    }
  else if (value === ""){
     delete collection[id][prop];
     console.log("I am here");  
  }
  return collection;
}

// Alter values below to test your code
//update(5439, "artist", "ABBA");
update(2548, "artist", "")
console.log(collection);