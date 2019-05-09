class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block
                        mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show alert message
    showAlert(message, className) {
        // Clear any remaining alerts:
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // So to insert it we first need to get the parent, (we want to get the second the container from the ui so thats why we added the class searchContainer)
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert the alert, (so we want to insert the div, before search)
        container.insertBefore(div, search);

        // We want the alert to go away after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message, so it only shows one alert every time
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        //Then we want to check if there is an alert else we get an error
        if(currentAlert) {
            currentAlert.remove();
        }

    }


    //Clear profile when nothing is typed in
    clearProfile() {
        this.profile.innerHTML = '';
    }

}