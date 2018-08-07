# Deploy a MERN Stack app to Heroku

1. Create an account in Heroku or Sign in to your account.

2. Search for Heroku CLI and download and Install it. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

3. Now open your GitBash and type 'heroku' and press enter. If it says 'heroku command not found', then open the command prompt as an administrator and type 'heroku' command and press enter.

4. In Gitbash/cmd, type 'heroku login'. It will ask for your credential. Provide it and you are good to go.

5. Type 'heroku create' and enter. It will create a heroku app.

6. Go to the heroku dashboad and you can find the app listed in the dashboard that has been created.

7. Click on the newly app created in the heroku dashboard.

8. Click on the Deploy tab and click on Heroku Git under Deployment method section.

9. Copy the below heroku git command:

    `$ heroku git:remote -a 'your-app-name'`

10. In the terminal window, navigate to the MERN app directory and paste the above command and enter.

11. Now in the project config folder, you have a 'keys.js' file created. Create two more files, 'keys_prod.js' and 'keys_dev.js'.

12. **keys_dev**

```javascript
module.exports = {
  mongoURI: "your-mongodb-uri",
  secrets: 'secret'
};
```

13. **keys_prod**

```javascript
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secrets: process.env.SECRET_OR_KEY
};
```

14. **keys.js**

```javascript
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}
```

15. Now in the 'server.js' file, below the routes, set a static folder for the production. (You must have built the react app for production and build folder must be present in your project folder).

```javascript
// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
  // set a static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
```