# Tracking workouts application

## Task

[https://docs.google.com/document/d/10EXUetGojCtIsiEaUZJlsH3wzHgNWhjIVUoqW-S4q5I/edit](https://docs.google.com/document/d/10EXUetGojCtIsiEaUZJlsH3wzHgNWhjIVUoqW-S4q5I/edit)

## Installation

`git clone https://github.com/LisaKaliuko/Tracking-workouts`

`cd tracking-app`

`npm install`

## How to run the app (dev)

Go to folder tracking-app

Command `npm install` in console

Command `npm start`

## How to run the app (build)

Go to folder tracking-app

Command `npm build` in console

## How to change theme

src/styles/themes.ts

Change const CURRENT_THEME on needed theme

## Database snapshot

In this project there are 3 collections: categories, exercises and users.

Collection categories contains information about workout categories and consists of next fields:

| Field name |   Type | Example | Description      |
| ---------- | -----: | ------: | ---------------- |
| title      | string |    Ноги | Name of category |

Collection exercises contains information about workout exercises and consists of next fields:

| Field name  |   Type |                 Example | Description                                             |
| ----------- | -----: | ----------------------: | ------------------------------------------------------- |
| categoryId  | string |    L8bzTSHCywTjjYCAioKb | Id of category to which the exercise belongs            |
| description | string |             10x20x30 кг | Description of exercise                                 |
| id          | string |    22qqIbA2tdG1Ugdns0QZ | Exercise id                                             |
| img         | string |                         | Link on exercise picture                                |
| name        | string | Упражнение для ягодиц 2 | Exercise name                                           |
| repeats     | number |                      20 | How many times app recommends to do exercise in one set |
| sets        | number |                       2 | How many sets app recommends to do                      |

Collection users contains information about users in app and consists of next fields:

| Field name    |   Type |                     Example | Description                             |
| ------------- | -----: | --------------------------: | --------------------------------------- |
| email         | string |                lisa@mail.ru | User email                              |
| arrOfWorkouts |  array | {day:8, month:9, year:2021} | Consists of days when user had workouts |

## Application stack

React

React-redux

React-redux-dom

React-redux-firebase

Redux

Redux-actions

Redux-firestore

Redux-saga

Firebase

Styled-components

Typescript

Reselect

Bootstrap

Bootstrap-icons

Eslint

## Project structure

`src/components` - folder contains all components. Every component is in separate folder. All components named in CamelCase and has extension .tsx

`src/config` - folder contains Firebase config file with .ts extension

`src/constants` - folder contains .ts file with constants

`src/core` - folder contains elements which related to Redux

`src/core/actions` - folder contains .ts files with actions

`src/core/hooks` - folder contains .ts files with hooks every in separate folder

`src/core/interfaces` - folder contains .ts files with interfaces

`src/core/reducers` - folder contains .ts files with reducers

`src/core/saga` - folder contains .ts files with sagas

`src/core/selectors` - folder contains .ts file with selectors

`src/core/services` - folder contains .ts files with services(functions and methods) for work with Firebase authentications and Firestore database

`src/pages` - folder contains react components for router, every in separate folder, files with extension .tsx

`src/routes` - folder contains .tsx files with routes for router

`src/shared` - folder contains elements which different components use

`src/shared/helpers` - folder contains .ts file with functions and methods which different components use

`src/shared/icons` - folder contains .tsx file with bootstrap icons

`src/styles` - folder contains .ts files with themes for app and common styles for items
