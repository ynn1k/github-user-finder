class GitHub {
    constructor() {
        this.client_id = '7c2562f8d574e9141a0a'; //go get your own!
        this.client_secret = 'a6ff32b7a254218ef73b191b95199a7e8cc91ec9'; //go get your own!
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}