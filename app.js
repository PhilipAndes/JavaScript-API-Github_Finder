// Initialize github    
const github = new Github;

// Initialize UI class
const ui = new UI; 

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    // We set it to e.target.value, So whatever value is typed in
    const userText = e.target.value;

    // We want to make sure it is not blank
    if(userText !== '') {
    // if not empty we want to make an HTTP call to Github, this is going to be done true our github.js file
    //Make HTTP call
    github.getUser(userText)
        //this will return a promise so .then
        .then(data => {
            // If a user doesnt excist we get the profile: message: Not found, so we want to use that here:
            if(data.profile.message === 'Not Found') {
                // Show alert (this is going to be written in the ui.js)
                // This will take in a message, and a class alert-danger
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Show profile (this will also be written in the ui.js)
                ui.showProfile(data.profile);
                // Show repos
                ui.showRepos(data.repos);
            }
        })
    } else {
        // if the search bar is empty we want the profiles to disappear (will happen true the ui.js as well)
       // Clear Profile 
       ui.clearProfile();
    }
});