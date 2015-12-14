## Gitstats

Visualize your public repositories with D3.js!

### Technologies Used

- Node.js
- Express.js
- Github API
- Backbone.js
- D3.js
- Heroku for hosting
- Postman for API exploring

#### Getting started with Node.js

- First you need to create a `package.json` file. `npm init` walks you through the process.
- Install your command utilities. `npm install -g nodemon`, `npm install -g node-debug`
- Install local packages, ie. `npm install --save url-pattern`
- Create an init file and run using `node server.js`

#### Deploying to Heroku

- `heroku login`, `heroku create`
- Define Procfile

#### Annotated Workflow

- `npm install express --save`
- `npm install ejs --save`
- Add a .gitignore so that you ignore node_modules

#### Starting the server

- `nodemon server.js'

#### Git reference

Redoing last commit and unstaging

- $ git commit -m "Something terribly misguided" 
- $ git reset --soft HEAD~ 
- $ git reset

#### Obstacles to overcome

- Rate limited by Github, had to wait some time.
- This ended up steering me away from using the API as much as I had liked.
- So intead of focusing on different ways I could use the API, I used only 1 API call and tried to see how I could make use of that one call.






