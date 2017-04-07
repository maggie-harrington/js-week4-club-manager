# Planning

### Initial Project Setup
`npm install bower -g`
`npm install @angular/cli@latest -g`
`npm install typescript -g`
`apm install atom-typescript`
`ng new club-manager`
`bower init`
Include /bower_components in gitignore
`bower install bootstrap --save`
add to "styles" section of angular-cli.json: "../bower_components/bootstrap/dist/css/bootstrap.css"
`ng serve`
In browser, open localhost:4200
Change title in app.component.ts
Add container in app.component.html to make sure bootstrap is installed correctly


### Project Stages
* Create 'README'
* Initial project setup (see above)
* Create 'app.routing'
* Create 'welcome' component
* Create 'about' component and route
* Create navbar
* Create 'members' component and route
* Create 'member-profile.model', including name, date joined, transportation status, and additional info
* Create 'member-profile.service' to share data between components
* Create json file with sample firebase data
* Set up firebase and upload data
* Display firebase data on 'members' page
* Create 'member-profile' component and dynamic route to display individual info
* Create 'admin' component and route
* Create form to add new users on 'admin' component/route
* Create 'edit' component with form to edit user profiles on 'admin' route
* Create delete button on 'edit' component/ 'admin' route
* Create custom pipe to filter user data by miles hiked
* CSS styling (if time allows)
