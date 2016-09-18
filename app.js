

(function(){


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB0cz9ohtYiauNz6e7FxiLCR793cl_URFY",
        authDomain: "web-quickstart-d5469.firebaseapp.com",
        databaseURL: "https://web-quickstart-d5469.firebaseio.com",
        storageBucket: "web-quickstart-d5469.appspot.com",
        messagingSenderId: "589127434951"
    };
    firebase.initializeApp(config);

    // cache DOM
    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    // listener
    fileButton.addEventListener('change', function(e){
        // get file
        var file = e.target.files[0];

        // create a storage ref
        var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

        // upload file
        var task = storageRef.put(file);

        // update progress bar
        task.on('state_changed',

            function progress(snapshot){
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },
            function error(err){
                console.log('error');
            },
            function complete(){
                console.log('complete');
            }

        )

    });

}());
