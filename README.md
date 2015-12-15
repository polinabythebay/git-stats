## Github Language Trends

A tool to visualize your use of programming languages on Github.

### Summary

Programming languages come and go, and your Github profile represents a timeline of your learning as a programmer. However, the statistics Github displays are used to help other people understand how useful your profile is. What is shown by default is the projects with the most stars, and the projects you’ve recently pushed to. This app is meant to help reflect on what you've worked on thus far and what you've experimented with.

### Technologies Used

- Node.js
- Express.js
- Github's Public API
- Angular.js
- Bootstrap.js
- Chart.js
- Heroku for app hosting
- Postman for API exploring

### Using Github's Public API with Node.js

- [Postman](https://www.getpostman.com/) is very helpful for exploring APIs. I recommend you give it a try!
- [Repos by user](https://developer.github.com/v3/repos/#list-user-repositories) For users with more than 30 repos, specify per page: `https://api.github.com/users/polinadotio/repos?per_page=100`.
- [Commits by repo](https://developer.github.com/v3/repos/commits/): `https://api.github.com/repos/polinadotio/rails-app/commits`.
- Repos you've starred: `https://api.github.com/users/polinadotio/starred?page=1&per_page=10000`

### Getting started

- `git clone https://github.com/polinadotio/git-stats.git`
- `npm install && bower install`
- Start server at `app.js`

### Obstacles to overcome

- Rate limited by Github, had to wait some time.
- This ended up steering me away from using the API as much as I had liked.






