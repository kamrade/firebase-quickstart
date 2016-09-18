

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

    // cache DOM
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add sign Up event
    btnSignUp.addEventListener('click', e => {
        // Get email and pass
        // TODO: check for real email
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    // Add a real time listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });


}());
