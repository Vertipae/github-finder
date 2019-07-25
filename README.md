## GitHub Finder

Implemented with hooks (awesome) and context.
With this application you can search GitHub users and see their repos.

https://awesomedevconnector.herokuapp.com/

### Development Environment:

1. Outside src folder (project root) make a new file called .env.local and add lines below. Check this guide if you are not familiar with oAuth application https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/
```

REACT_APP_GITHUB_CLIENT_ID "", //  Github register a new OAuth application and add clientId in here
REACT_APP_GITHUB_CLIENT_SECRET "" // Github register a new OAuth application and add clientSecret in here
}
```
2. Go to your terminal and run the following command:
```
npm install
```
```
npm start
```

Navigate to http://localhost:3000/
