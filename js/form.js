const firebaseConfig = {
  apiKey: "AIzaSyAWvekDReC_fwL4Pn91BcB_nzvwszAdCeg",
  authDomain: "sample-ee028.firebaseapp.com",
  databaseURL: "https://sample-ee028-default-rtdb.firebaseio.com",
  projectId: "sample-ee028",
  storageBucket: "sample-ee028.appspot.com",
  messagingSenderId: "1060660106326",
  appId: "1:1060660106326:web:f11e01a40452f61151d7f7",
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("coderspree");

document.getElementById("regform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getvalue("name");
    const mail = getvalue("mail");
    const library = getvalue("library");
    const github = getvalue("github");
    const session = document.getElementsByName("session");
    var attend = ""

    for (var i = 0; i < session.length; i++) {
                if (session[i].checked)
                    attend = session[i].value
    }
    
    if (attend.length === 0) {
        document.querySelector(".alertDan").style.display = "block";
        setTimeout(() => {
            document.querySelector(".alertDan").style.display = "none";
        }, 2000);
    }

    else {

        savedata(name, mail, library, github, attend);

        document.querySelector('.alert').style.display = "block"

        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 2000)

        document.getElementById("regform").reset();
    }
}

const savedata = (name, mail, library, github, session) => {
    const newForm = contactFormDB.push();

    newForm.set({
        name: name,
        email: mail,
        libraryID: library,
        github: github,
        attendSession: session,
    })
}

const getvalue = (id) => {
  return document.getElementById(id).value;
};
