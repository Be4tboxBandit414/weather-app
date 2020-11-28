# Project Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and thus the tools used to build this application were:

React.js and SASS


# Notes about the Project

Inital mount of the application will fetch from the API: "https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=709847967f5e54b97308c1b2cae4dee5" and store in state: "weatherData". The default zipcode is initially hardcoded to 10036; however, it can be changed as it is set on line 12 via a template string. 

getTemp() is a function used to update the Virtual DOM on click of the "Update" button. The function fetches from the API with a zipcode that the user entered and sets the state with the new data. If the user provides an incorrect input, the Promise will be rejected and alert the user of the mistake. 

convertTemp() is a function used to convert the initial value in Kelvin to Fahrenheit 

## Available Scripts

Please first run either command: `yarn` or `npm install` to install dependencies

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


