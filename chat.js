// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebase = {
    apiKey: "AIzaSyDvNJ9fbpzZQs-bTyai0whrvD5k76fQ7CU",
    authDomain: "kwitter-6ed8c.firebaseapp.com",
    projectId: "kwitter-6ed8c",
    storageBucket: "kwitter-6ed8c.appspot.com",
    messagingSenderId: "186348030805",
    appId: "1:186348030805:web:d90b941162cb004af2bddc"
  };

// Initialize Firebase
firebase.initializeApp(firebase);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



