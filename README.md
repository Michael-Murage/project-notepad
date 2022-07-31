# PROJECT NOTEPAD

Deployed link: https://react-project-notepad.herokuapp.com

This is a rather minimal colourful version of a very capable notepad app. The 
thought process behind it is being able to note down your editable to do list or being able to jot down something for later reference.

The app is web based and is built mainly using React.js. Technically,
 it performs the basic CRUD functionalities and stores information in a json file (hosted separately).

 ## What works?
 You can basically add, edit or delete a note

 ## What doesn't work? (Limitations)
 1. Having hosted the json server on Heroku, the data, after sometime resets to its original value. That is, the notes written by a user will reset to the very first note the user saw when accessing the app.
 
 2. As an app in production, the "database" is centralised for everyone using the application. Meaning what I write/edit/delete you'll see and vice-versa. For this, there will be a feature added, that will ensure your own private experience (more on this later).

 ## Installation
Ensure you have npm installed on your computer.

 > Fork this repository and clone it to your computer.

 > In the folder where you've cloned it, cd into the cloned project

 > If your terminal wasn't open before this, open it and run the commands below:

 ```
    npm install
    npm start
 ```

 This process will enable you to have your the project in your local environment but the link above (deployed link) should function similarly to running npm start.

 ## Future Features
 1. In the near future (from the time of writing this), I plan to add a user authentication page such that you would need to login so as to ensure what your noting down is yours and yours alone. A solution to limitation number 2.

2. A bit more research and experimentation in finding a stable host for the json file or changing the code so that it stores in a device's internal memory (which is even more reliable).

# License

Copyright (c) 2022 Michael Murage

Michael Murage (individual), owns this Educational Content. However, I support the development and availability of educational materials in the public domain. Therefore, I grant users set forth in this repository certain rights to reuse, build upon and share such Educational Content subject to the terms of the Educational Content License set forth [here](http://learn.co/content-license) (http://learn.co/content-license). You must read carefully the terms and conditions contained in the Educational Content License as such terms govern access to and use of the Educational Content.

Michael Murage is willing to allow you access to and use of the Educational Content only on the condition that you accept all of the terms and conditions contained in the Educational Content License set forth [here](http://learn.co/content-license) (http://learn.co/content-license).  By accessing and/or using the Educational Content, you are agreeing to all of the terms and conditions contained in the Educational Content License.  If you do not agree to any or all of the terms of the Educational Content License, you are prohibited from accessing, reviewing or using in any way the Educational Content.

# ENJOY
