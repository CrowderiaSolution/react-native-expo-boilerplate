[![GitHub tag](https://img.shields.io/github/tag/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/tags)
[![GitHub contributors](https://img.shields.io/github/contributors/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/CrowderiaSolution/react-native-boilerplate/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/CrowderiaSolution/react-native-boilerplate.svg?style=flat-square)](https://github.com/CrowderiaSolution/react-native-boilerplate/issues-pr)

![alt text](/docs/rnsk-logo.png "React Native Boiler Plate")

# React Native Sample Project

This Boiler Plate Kit helps you get started with React Native. It contains a bunch of helpful components, building blocks and basic structure to allow you to jump straight into building an app.

---

## Docs

1. [Features](#features)
1. **Before you start**
   1. [Getting Started with React Native](/docs/react-native.md)
   1. [React Native Quick Tips](/docs/quick-tips.md)
   1. [Understanding the File Structure](#understanding-the-file-structure)
   1. [Common Components](/docs/component.md)
   1. [Opinions Guiding this Project](/docs/opinions.md)
1. **Using RNSK**
   1. [Getting Up and Running with Sample](#getting-started)
   1. [Renaming the App from New](/docs/renaming.md)
   1. [Routing / Navigating](/src/navigation/README.md)
   1. [Using Google Analytics](/docs/google-analytics.md)
   1. [Interacting with the Firebase API](https://firebase.google.com/docs/database/web/start)
   1. [Testing](/docs/testing.md)
1. [Contributing](/docs/contributing.md)
1. [Licence](LICENSE)

---

## Features

| Feature | Summary |
| --- | --- |

---

## Getting Started

---

## The API & testing out authentication
We've created a quick little "API server" on [Google's Firebase Platform](https://firebase.google.com/). You can get your own API up and running within minutes too:

1. Signup for a [Firebase account](https://firebase.google.com/)
1. Create a new project - eg. "React Native Starter App"
1. Turn on email/password __Authentication__

---

## Understanding the File Structure

.. code::
.
|-- ContentStore
|   |-- de-DE
|   |   |-- art.mshc
|   |   |-- artnoloc.mshc
|   |   |-- clientserver.mshc
|   |   |-- noarm.mshc
|   |   |-- resources.mshc
|   |   `-- windowsclient.mshc
|   `-- en-US
|       |-- art.mshc
|       |-- artnoloc.mshc
|       |-- clientserver.mshc
|       |-- noarm.mshc
|       |-- resources.mshc
|       `-- windowsclient.mshc
`-- IndexStore
    |-- de-DE
    |   |-- art.mshi
    |   |-- artnoloc.mshi
    |   |-- clientserver.mshi
    |   |-- noarm.mshi
    |   |-- resources.mshi
    |   `-- windowsclient.mshi
    `-- en-US
        |-- art.mshi
        |-- artnoloc.mshi
        |-- clientserver.mshi
        |-- noarm.mshi
        |-- resources.mshi
        `-- windowsclient.mshi
