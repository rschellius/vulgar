[![Build Status][travis-badge]][travis-badge-url]

MEAN Stack Angular 2 Development Starter
====================================

A MEAN stack development kit featuring [Angular 2](https://angular.io).
Not mine, just forked from [Vulgar](https://github.com/datatypevoid/vulgar).

About
-------------
ToDo

Good Reading
--------------------

- [Building A Single Page Todo App with MEAN—Including Angular 2!](http://www.davidniciforovic.com/2016/02/03/building-a-single-page-todo-app-with-mean-including-angular-2/)
- [Angular quickstart](https://angular.io/docs/ts/latest/quickstart.html)
- [Quickstart: Angular2 With Typescript And Gulp](http://blog.codeleak.pl/2016/03/quickstart-angular2-with-typescript-and.html) 

Demo
--------------------
A deployed version of this application is on [Heroku](http://angular2mean.herokuapp.com). 
Check the nodejs server recipe api via [this link](http://angular2mean.herokuapp.com/api/recipe).

The mongodb database is hosted at [mLab](https://www.mlab.com/).

Prerequisites
-------------

- nodejs
- MongoDB

**Verify that you are running at least node `v6.8.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

Setting up the mongodb database
-------------
The database settings are stored in this application's config.json file in the config folder. Adapt these to your own settings

To create a database (named 'vulgar' here) and user, open a command terminal and type

```
mongo
use vulgar
db.createUser({
      user: "your_username",
      pwd: "secret",
      roles: [{ role: "readWrite", db: "vulgar" }]
})
exit
```

Login to the database to verify:

```
mongo --host 127.0.0.1 --port 27017 -u your_username -p secret vulgar
```

Building the project
--------------------

Detailed information can be found at the [original Vulgar repo](https://github.com/datatypevoid/vulgar).

Clone this repository:

```
git clone --depth 1 https://github.com/rschellius/vulgar.git
```

Navigate to the newly created folder:

```
cd vulgar
```

Run the project with:

```
npm install
npm start 	// or node server.js
```

To do a fresh restart and run all commands in one line, type

```
rm -rf node_modules dist typings & npm install & node server.js
```

Your application is running at [http://localhost:3000](http://localhost:3000).


This next step should not be neccessary. 
Open a second command line terminal.

```
cd [cloned repo]
gulp serve
```

Cleanup and rebuilding 
--------------------

To do a fresh restart and run all commands in one line, type

```
npm run clean & npm install & node server.js
```

This requires `rimraf` (a tool to rm -rf). Run 

```
npm install rimraf -g
```

Deploying to Heroku
--------------------
In production, your package.json's devDependencies will not be installed, so these packages will be missing.
Verify that your local project builds on production with

```
rm -rf node_modules dist typings & npm install --quiet --production
```
