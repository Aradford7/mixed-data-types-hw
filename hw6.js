console.log('JS is running');

//1) Data Types
//For each of the following, write which data types you would use to represent the data, 
//and then give a small example of the data structure:
//A light switch that can be either on or off.
        //Booleans
//A user's email address.
        //String
//A spaceship with a hull, laser blasters, tractor beam, and warp drive.
        //Array
//A list of student names from our class.
        //Array and objects
//A list of student names from our class, each with a location.
        //Array and objects
//A list of student names from our class, each with a location and each with a list of 
//favorite tv shows.
        //Array and objects
//Commit: "data types" Answered


//2)Take it Easy
//Make an array that holds all of the colors of the rainbow.
//const Rainbow = ['red','blue','yellow','black','white'];
//Write code that will access "blue" from the rainbow array.
//console.log(Rainbow[1]); //Answer blue
//Make an object that is called your name and holds the information about your favorite food, 
//a hobby, the name of the town that you live in currently, and your favorite datatype.
/*
const objectMe = {
        name:'Ashley',
        favoritefood: 'EVERYTHING',
        hobby: 'winning',
        town: 'Los Angeles',
        datatype: 'objects',
};*/
//Write code that will access your hobby from the object that you just created.
//console.log(objectMe.hobby);
//Commit: "data structures" Answered

//3) Crazy Object!
const crazyObject = {
        taco: [
          {
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
          },
          {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
          },
        ],
        larry: {
          nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
          quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
          characters: [
            {
              name: "Jeff",
              occupation: "manager"
            },
            {
              name: "funkhauser",
              occupation: "tv dude"
            },
            {
              name: "susie",
              occupation: "jeffs wife",
              favourtieHobby: "Swearing at Larry and Jeff"
            },
          ]
        }
      }

//Use crazyObject to log the following.
//"omg my mouth is burning" // crazyObject.taco.salsa.[5]
      console.log(crazyObject.taco[1].salsa[5]);
//"Pretty pretty prettayyyyy good" // crazyObject.larry[1].quotes[0]
      console.log(crazyObject.larry.quotes[0]);
//"Swearing at Larry and Jeff"  // crazyObjects.larry.favouriteHobby[0]
      console.log(crazyObject.larry.characters[2].favourtieHobby);
//"Chicken Teriyaki Boyyyyyy" // crazyObject.larry.nicknames[1]
      console.log(crazyObject.larry.nicknames[1]);
//The object the contains the name funkhauser //crazyObject.larry.characters.[1].name
      console.log(crazyObject.larry.characters[1].name);
//Commit: "crazyObject"