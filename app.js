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
        console.log(userText);
    }
});