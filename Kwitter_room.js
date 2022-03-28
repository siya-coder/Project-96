const firbaseConfig = {
    apiKey: "AIzaSyDOSZgWf9lnZ7mvb8SdBVWwK0qDPABphXQ",
  authDomain: "project93-65834.firebaseapp.com",
  projectId: "project93-65834",
  storageBucket: "project93-65834.appspot.com",
  messagingSenderId: "679585657047",
  appId: "1:679585657047:web:1d37ce5e145e40663ac092"
};



firebase.initializeApp(firbaseConfig);

function addRoom(){
    user_name = document.getElementById("room").value;
    firebase.database().ref("/").child(user_name).update({
        kabir: "Hola"
    });
}