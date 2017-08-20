[![GitHub tag](https://img.shields.io/github/tag/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/tags)
[![GitHub contributors](https://img.shields.io/github/contributors/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/CrowderiaSolution/react-native-boilerplate/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/issues-pr)

![- React Native](/docs/reacttemp.png "React Native Boiler Plate")

# React Native Sample Project

This Boiler Plate Kit helps you get started with React Native. It contains a bunch of helpful components, building blocks and basic structure to allow you to jump straight into building an app.

Before you use the app set your app facebook and google clientid to `constent/consts.js` 

![ScreenShot](/screen_shot_login.png "React Native Starter App Login")

---

## Docs

1. [Features](#third-party-libraries)
1. **Before you start**
   1. [Getting Started with React Native](/docs/react-native.md)
   1. [React Native Quick Tips](/docs/quick-tips.md)
   1. [Understanding the File Structure](#understanding-the-file-structure)
   1. [Common Components](#common-modules)
   1. [Opinions Guiding this Project](/docs/opinions.md)
1. **Using Template**
   1. [Getting Up and Running with Sample](#getting-started)
   1. [Renaming the App from New](/docs/renaming.md)
   1. [Routing / Navigating](https://reactnavigation.org)
   1. [Using Google Analytics](/docs/google-analytics.md)
   1. [Interacting with the Firebase API](https://firebase.google.com/docs/database/web/start)
   1. [Testing](/docs/testing.md)
1. [Contributing](/docs/poweredBy.png)
1. [Licence](LICENSE)

---

## Third party libraries

| library | Summary |
| --- | --- |
| [Expo](https://docs.expo.io/versions/v18.0.0/sdk/index.html) | The Expo SDK provides access to system functionality such as contacts, camera, location for Expo apps.  <br><br>['How to' Guide &rarr;](https://blog.expo.io/updating-your-project-for-the-exponent-expo-name-change-67aee72c4e2e#.260eg23v7) |
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [Router Flux](https://github.com/aksonov/react-native-router-flux) | Router for React Native based on new React Native Navigation API. <br><br>['How to' Guide &rarr;](/src/navigation/README.md)|
| [Navigators](https://reactnavigation.org) | Let's use React Navigation to build a simple chat application for Android and iOS. |
| [axios](https://github.com/mzabriskie/axios) | Promise based HTTP client for the browser and node.js | 
| [Date Pckier](https://www.npmjs.com/package/react-native-modal-datetime-picker) | A declarative closs-platform react-native datetime-picker. |
| [Sidebar / Hamburger Menu](https://github.com/react-native-community/react-native-side-menu) | ... |
| [TextInput Effects](https://github.com/halilb/react-native-textinput-effects) | Text inputs with custom label and icon animations for iOS and android. Built with react native and inspired by Codrops |
| [React Native Elements](https://github.com/react-native-community/react-native-elements) | Cross Platform React Native UI Toolkit. |
| [Styled Components](https://www.npmjs.com/package/styled-components) | Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅 |
| [EStyleSheet](https://github.com/vitalets/react-native-extended-stylesheet) | Drop-in replacement of React Native StyleSheet with media-queries, variables, dynamic themes, relative units, percents, math operations, scaling and other styling stuff. |
| [Google Analytics](https://github.com/idehub/react-native-google-analytics-bridge) | Shows how to track screen views (includes both a 'debug' mode tracker as well as 'release' mode so that data doesn't get obfuscated). <br><br>[Setup Guide &rarr;](/docs/google-analytics.md) |
| [Vector Icons](https://github.com/oblador/react-native-vector-icons) | React Native Vector Icons, Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />`. |
| [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware) | Redux middleware for resolving and rejecting promises with conditional optimistic updates |
| [Redux Form](http://redux-form.com/6.8.0/) | The best way to manage your form state in Redux | 
| [Moment](https://momentjs.com/) | Parse, validate, manipulate, and display dates and times in JavaScript. |
| Component Style Guide | A bunch of elements and components to get you started - styled headings, buttons, list rows, alerts etc. |
| Code Linting / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. <br><br>[Get started with linting for React Native &rarr;](https://medium.com/pvtl/linting-for-react-native-bdbb586ff694) |
| Boilerplate | An example directory/file structure I've found useful for scaling apps <br><br>[Learn more &rarr;](#understanding-the-file-structure) |

---

## Common modules

| Feature | Summary |
| --- | --- |
| Language feature | translate |
| User auth and profile management | using crowdAuth |
| Api Manager | Api Services managemnet and error handler |
| Theme | App theme, color chnages |
| Map | Map managemnet |
| Chat | Basic chat funtionalaies |
| Empty Data Set Image Generator | Add 'No data' images |
| Form Effects  | With common form validation |
| Menu Control | Menu controll with tab and segments |
| SVG Processing hud | Common Loader | 
| Calendar | Calendar and date management with time |
| Social Media | Share Content |
| Image Manipulation | crop, pick and shape options |
| UI Tips  | For help disck for users |

---

## Getting Started

---

For Clear and clean code, we use [EsLint](/project-template/.eslintrc) and Vscode configaration [Editor Configaration](/project-template/.editorconfig)

## The API & testing out authentication
We've created a quick little "API server" on [Google's Firebase Platform](https://firebase.google.com/). You can get your own API up and running within minutes too:

1. Signup for a [Crowderia account](https://auth.crowderia.com/)
1. Create a new project - eg. "React Native Starter App"
1. Turn on email/password __Authentication__

---

## The API & testing out authentication
We've created a quick little "API server" on [Crowderia Auth Platform](https://auth.crowderia.com/). You can get demo API up and running within minutes too.

---

## Understanding the File Structure

```
crowd-react-native-template 
│
└───assets
│   │   fonts
│   │   icons
│   
└───constants
│   │   api.js
│   │   Theme.js
│   │   consts.js
│   
└───helpers
│   │   cachedFonts.js
│   │   index.js
│   
└───src
│   │   index.js
│   │   Root.js
│   │ 
│   └───routes
│       │   HomeNavigator.js
│       │   Navigator.js
│       │  
│       commons
│       │   styles
│       │   └───LoadingScreen.js
│       │   index.js
│       │   LoadingScreen.js
│       │   TextInputWithValidations.js
│       │ 
│       redux
│       │   reducer.js
│       │   store.js
│       │ 
│       screens
│          index.js
│          home
│          │  └───components
│          │      │     styles
│          │      │     └───DataList.js
│          │      │     DataList.js
│          │      │
│          │      styles
│          │      │
│          │      HomeScreen.js
│          │      index.js
│          │      
│          addView
│          │  └───components
│          │      │     styles
│          │      │     └───addViewForm.js
│          │      │     addViewForm.js
│          │      │     index.js
│          │      │
│          │      styles
│          │      └───addViewScreen.js
│          │      addViewScreen.js
│          │      index.js
│          │      validations.js
│          │ 
│          Notification
│          │      NotificationScreen.js
│          │      index.js
│          │ 
│          Profile
│          │      ProfileScreen.js
│          │      index.js
│ 
│   .babelrc
│   .eslintrc
│   .editorconfig
│   App.js
│   app.json
│   jsconfig.json
│   package.json
│   README.md   

```

![- PowerdBy](/docs/poweredBy.png "Powerd by crowdLab")
