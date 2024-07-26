function register(event) {
  event.preventDefault();
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      user.updateProfile({
        displayName: fullName
      }).then(() => {
        document.getElementById('message').innerHTML = "Account created successfully!";
        setTimeout(() => {
          window.location.href = 'main.html';
        }, 2000); // Redirect after 2 seconds
      }).catch((error) => {
        document.getElementById('message').innerHTML = "Error updating profile: " + error.message;
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementById('message').innerHTML = "Error: " + errorMessage;
    });
}

function login(event) {
  event.preventDefault(); // Prevent form submission

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log('User logged in:', user); // Debugging line

      // Redirect to main.html after successful login
      window.location.href = 'main.html';
    })
    .catch((error) => {
      console.error('Error logging in:', error); // Debugging line
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementById('message').innerHTML = "Error: " + errorMessage;
    });
}