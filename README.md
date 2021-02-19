# Running the App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1] clone the git repo https://github.com/aryan21710/GithubRepoTool.
2] npm install 
4] npm i cypress --save-dev
3] npm run start



# Testing the App

1] App should be running on default 3000 port.
2] npm run cypress

# Description

1] App loads with login screen.
2] Once valid github username is entered (for instance aryan21710) and clicked on Submit it will redirect to the New Page.
3] The New page will have following url :- localhost:3000/displayuserrepo/username
4] The New page will display all the Repository for user aryan21710, No of stars and No Of Forks in a Grid Format.
5] When clicked on any Repository name, it will redirect the user to the Repository Link hosted by Github.
6] Clear Repository Will clear all the user's repository from the UI.
7] If the username is changed in the url paramater {/localhost:3000/displayuserrepo/evanli} it will fetch evanli's Repository and will Display them in the Grid.
