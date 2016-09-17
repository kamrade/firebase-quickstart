

(function(){


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB0cz9ohtYiauNz6e7FxiLCR793cl_URFY",
        authDomain: "web-quickstart-d5469.firebaseapp.com",
        databaseURL: "https://web-quickstart-d5469.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "589127434951"
    };
    firebase.initializeApp(config);

    // GET ELEMENTS
    const preObject = document.getElementById('object');

    // CREATE REFERENCES
    const dbRefObject = firebase.database().ref().child('object')

    // SYNC OBJECTS CHANGES
    dbRefObject.on('value', snap => console.log(snap.val()));


}());
