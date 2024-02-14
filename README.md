# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug :

- Sign up to the app
- Create at least 2 others users on people page ( not with signup )
- Edit these profiles and add additional information
- Create a project
- Input some information about the project
- Input some activities to track your work in the good project

Then, see what happens in the app and fix the bug you found doing that.

## Then

Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions :

- What bugs did you find ? How did you solve these and why ?
- Which feature did you develop and why ?
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ?

First bug : When I click the Signup button, the error message "The field is empty" is quickly displayed under the inputs, and then I am redirected to the Signup form. To fix this, I used some props of Formik.

Second bug : We can signup with the same username several times. For the security and the different reasons, I fixed this by adding a condition to check if the user is already registered or not.

Third bug : We can signup with an empty username. For the security, the UX etc... I added a verification to check if the input is empty of not.

Fourth bug : We can signup with an empty organisation name and given that the application is a platform for monitoring people's activities and controlling the budget for their startups, I believe that providing the name of the organization is a requirement.

Fifth bug : We can have access to the home page when we are logout while I click on "Signup" and click on "Previous" of my browser. For the security, I fixed this to prevent the users to have access to the page when they are disconnected. The sign token response was cached, even if I logout. I changed the HTTP verb from GET to POST.

Sixth bug : When I want to create an user, the password is visible. For the security, I have hidden this.

Seventh bug : When I created an user, the name input was not pre filled because the name wasn't saved in the db.

Eighth bug : The update of the user doesn't work. To fix it, I changed the onChange from the <LoadingButton> to onClick.

Ninth bug : When I add a project, the list does not update. To fix this, I added a dependency to the useEffect.

Tenth bug : I can't have access to the project information. I deleted the toString() method to fix this.

Eleventh bug : The details of the project are not displayed. For the UX and UI. I added [0] to project because project is an array.

Twelfth bug : I can't edit the project because the id which is passed is undefined. I updated that to pass correctly the id.

Fourteenth bug : When I click to edit for editing the project, all the inputs are empty, for the UX, I fixed this with the good values by fixing the initialValue to an object and not an array, and this fixed the values sended to the body to and object and not an array.

Thirteenth bug : When we go to "Activites", the name of the project in the placeholder is undefined. I changed this with the right value.

Sixteenth bug : The list of the users available does not update when I change my availability to "Not available". To fix this, I added a dependency to the useEffect.

Seventeenth bug : The list of the projects deleted does not update when I delete a project. To fix this, I added a dependency to the useEffect for the UX.

Feature developed: I put the possibility for the user connected to delete his own account to "My account" because this is necessary for all users to can delete his own account.

Feedback: I saw a lot of security errors like the password send to the frontend and more... it was hard for me to work on a project which use Formik because this is my first time on it.
