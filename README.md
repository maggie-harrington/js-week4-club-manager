# Club Manager

#### _Epicodus JavaScript Week 4 Independent Project - Angular CLI, Firebase, and TypeScript_

#### _By Maggie Harrington_
##### _4-7-17_


## Description

##### An Angular CLI application written in TypeScript that allows the user/administrator to view/manage the member list of a hiking club.

##### The user can:
* visit a page to see a list of all club members
* click a club member's entry in the list to visit their profile page, which includes more details about them
* visit an "About" page that explains what the club is, and what they do
* filter the list of users by their particular role in the group, or some other information/category

##### In addition, the administrator can:
* add new users to the club
* Edit existing user profiles
* Delete users
* All changes to data is persisted in a database


##### This project demonstrates the following skills:
* Use of components to create display and behavior for templates
* Use of a router to navigate between pages
* Use of dynamic routing
* Use of a service to share data between multiple components
* Use of a model to organize data
* Filtering models through a pipe
* Use of Firebase to retrieve data displayed in the application
* Ability to create, edit, and delete instances of a model, persisting all changes in Firebase
* Use of two-way data binding in an edit/update form
* Use of TypeScript with defined data types

Please see PLANNING.md in the root level of the project folder if you would like additional details on my process in creating this project.


## Setup/Installation Requirements

##### First, please make sure you have the following installed:

* Node.js and npm (see https://nodejs.org/en/download/ for installation details)

* Bower: run `npm install bower -g` (see https://bower.io/ for more installation details)

* Angular CLI: run `npm install @angular/cli@latest -g` (see https://github.com/angular/angular-cli for installation and update details)

* Node TypeScript Package: run `npm install typescript -g`

* Atom TypeScript Package: run `apm install atom-typescript` (not required to run the project but will make viewing of TypeScript easier)


##### Cloning project:

Clone project at my GitHub repository: https://github.com/maggie-harrington/js-week4-club-manager

* Open the terminal and enter `cd Desktop`

* Enter `git clone ` and copy/paste the project link above.

* Enter `cd js-week4-club-manager`


##### Firebase setup:

* Run `npm install angularfire2 firebase --save`

* Restart server after AngularFire config.

* Log into Firebase (or create a new account, https://console.firebase.google.com), click "Go to Console", click "Create New Project" and name your database whatever you want.

* Click the "Add Firebase to your web app" button. A pop-up window will appear with your Firebase credentials. Leave this window open for now and move on to the next step.

* Create a new file called 'api-keys.ts' in the src/app directory of the project.

* Paste the following into 'api-keys.ts':
`export var masterFirebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxxx.firebaseio.com",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxx"
  };`

  * Now return to the window with your Firebase credentials. Copy and paste your credentials between the {} in 'api-keys.ts', replacing the sample contents, and save.

  * Back in Firebase, navigate to the Database section of project and select Data tab, then select "Import JSON", select "Browse" and navigate to this project folder. Select 'sample-members.json' and click "Import".

  * In Rules tab, update read and write to true.

##### Final setup:

Run the following in the command line:

    `npm install`

    `bower install`

    `ng build`

    `ng serve`

The project will appear in your web browser at localhost:4200. (Make sure to keep the terminal window containing the server open while the project runs.)



## Support and contact details

If you run into any issues or have questions, ideas or concerns, please feel free to contact me at maggie.harrington@gmail.com


## Technologies Used

Written using Angular CLI, TypeScript, Firebase, JavaScript, Bootstrap, Node.js, Node Package Manager (NPM), Bower, Atom, Git Bash


## MIT License

Copyright (c) 2017 Maggie Harrington
