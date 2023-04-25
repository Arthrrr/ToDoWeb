// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2G2mqCwNPa0nskmzxGcNvGBNgOT5l540",
    authDomain: "to-do-list-dce75.firebaseapp.com",
    projectId: "to-do-list-dce75",
    storageBucket: "to-do-list-dce75.appspot.com",
    messagingSenderId: "162155799901",
    appId: "1:162155799901:web:2db127c184835d16e1f4b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
   
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Por favor ingrese todos los campos')
      return
      // Don't continue running the code
    }
  
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('Usuario Creado')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email2').value
    password = document.getElementById('password2').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Por favor ingrese todos los campos')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('Bienvenido')
      window.location.href = "todo.html";
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
      
      alert("Este usuario no existe")
    })
  }
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    if (password < 6) {
      alert("Ingrese un password mayor a 6 caracteres")
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }