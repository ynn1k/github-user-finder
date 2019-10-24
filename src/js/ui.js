class Ui {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    //displays profile
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2 rounded-lg">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Follower: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //display repos
    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector('#repos').innerHTML = output;
    }

    //shows an alert message
    showAlert(message, className) {
        //clear remainig alert
        this.clearAlert();
        //create div
        const alertElement = document.createElement('div');
        //add classes
        alertElement.className = className;
        //add text TODO: innerText????
        alertElement.appendChild(document.createTextNode(message));
        //get parent
        const alertParent = document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');
        //insert alert beforesearch box
        alertParent.insertBefore(alertElement, search);
        //clear alert after 3sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    //remove alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    //clears profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}