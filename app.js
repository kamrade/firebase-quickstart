

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
    const ulList = document.getElementById('list');

    // CREATE REFERENCES
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');

    // SYNC OBJECTS CHANGES
    dbRefObject.on('value', snap => {
            preObject.innerText = JSON.stringify(snap.val(), null, 3);
        });
    // SYNC LIST CHANGES
    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);
    });

    dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById(snap.key);
        liChanged.innerText = snap.val();
    });

    dbRefList.on('child_removed', snap => {
        const liToRemove = document.getElementById(snap.key);
        liToRemove.remove();
    });



}());
