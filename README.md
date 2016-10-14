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
You can see a deployed version running at [Heroku](https://angular2mean.herokuapp.com/). 

Prerequisites
-------------

- NodeJs, latest version
- MongoDB

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

Setting up the mongodb database
-------------
The database settings are stored in this application's config.json file in the config folder. Adapt these to your own settings

To create a database and user, open a command terminal and type

```
mongo
use vulgar
db.createUser({
      user: "your_username",
      pwd: "secret",
      roles: [{ role: "readWrite", db: "your_database_name" }]
})
exit
```

Login to the database to verify:

```
mongo --host 127.0.0.1 --port 27017 -u your_username -p secret your_database_name
```

Building the project
--------------------

Detailed information can be found at the [original Vulgar repo](https://github.com/datatypevoid/vulgar).

Clone this repository:

```
git clone [url to this repo]
```

Navigate to the newly created folder:

```
cd [cloned repo]
```

Run the project with:

```
npm install -g typings webpack webpack-dev-server concurrently
npm install
npm run build
npm start
```

Your app is running at [http://localhost:3000](http://localhost:3000).


This next step may not be neccessary. 
Open a second command line terminal.

```
cd [cloned repo]
gulp serve
```