# Automate.io case study

##### Summary
1. Application Details
2. How to setup the application
3. Details of external libraries / plugin used
4. Completed Requirements
5. What can be done more?

###### 1. Application Details 
This application will be useful to manage workflows and tasks

###### 2. How to Setup the application in your local
- Clone the repo using ```git@github.com:ajayg415/aj-automate.git``` in your command prompt
- Go inside the folder ```cd aj-automate```
- Install npm modules using ```npm install```
- If you want to run the application type ```npm start```. Application will open in your default we browser

###### 3. Details of external libraries / plugin used
- ```react-create-app``` bolier plate to generate the application.
- ```redux``` for data management.
- ```redux-sagas``` as middleware.
- ```json-server ``` to fetch workflows on async request.
- ```axios``` to make async requests.
- ```react-router-dom``` for routing.
- ```react-icons``` for icons.
- ```tailwind css``` for styling
 
###### 4. Completed Requirements
- Added login screen with admin as userid and password.
- After successful login user navigated to Workflows screen.
- In workflows screen user can perform update workflow, view workflow statics, delete workflow and view list.
- When user clicks on View Lists, User will navigate to Tasks screen.
- In Tasks Screen user can shuffle tasks, update tasks status and update workflow title.
- Provided sign-out functionality in App Header 

###### 5. What can be done more?
- Can add functionality to add new Workflows.
- Can add functionality to add new tasks and delete tasks.
- Can have better redux store management, right now I used single store where I added everything there itself.
- Hardcoded all strings, instead better to have a Stirngs file where we can fetch strings from there. This will help us for Internalization in future.
- Since I'm using dynamic data using async, I can't deploy this site into Github pages.
- Login to main session when user refresh webpage


