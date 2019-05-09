// We use ES6 classes for this project

class Github {
    constructor() {
        this.client_id = 'db6991f5105705e5215b';
        this.client_secret = '36d3299ff09308390ecc93413acaf8ec5224ea82';
        this.repos_count = 5; // The number of repositories you want to show
        this.repos_sort = 'created: asc'; // repos listed by newest first
    }

    // Create a async function
    async getUser(user) {
        // We are going to have 2 different responses, a profile response and a repos response, so we call the first one profileResponse
        // We also want the user to be the one we are looking for, so we use backticks and the link of the api, so we change the last part to the user parameter we passed in above
        // We also gonna need to add on the client id and client secret, so we add a question mark to add a query string
        //Then we gonna use & to add the client secret
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // For the repositories we just copy the code above and add /repos after user, then per_page and sort, because we want to show 5 repos each time, sorted by newest first
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // Now for the client data we want to set it to json and then simply return that
        const profile = await profileResponse.json();
        // same for the repos
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}