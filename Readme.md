# Visualizing Offerings Data 

A simple web app built using ReactJS, MySQL, Express, and NodeJS TypeScript for visualizing offers data from companies. Data is visualized in the form of Table and a couple of charts.

## Overview:

This task is a single page web application that allows user to search for different offers and market data using the provided easy-to-use filters. Data is also displayed in the form of interactive charts.

## Tools and Technologies
#### 1. Frontend:
			ReactJS, MaterialUI, React Testing Library, Jest
#### 2. Backend:
			MySQL, TypeScript, NodeJS, ExpressJS, Prisma (ORM)

## Structure
Both the frontend and backend are implemented under the same directory. The frontend, however, is placed under the "frontend" folder separately from the backend.

## To set up the app, clone the app in your local github or just download the zip folder.

### 1. Setting up the backend:
#### To install:
In the same directory, run:
`
$ npm install
`

#### To run:
First you will have to install Prisma and make a Schema with which prisma can interact. Follow [this guide](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres "this guide") to setup Prisma working with the existing database. After that run the following command:

`
$ npm run dev
`

#### To build (prod):

`
$ npm run build
`
**Note**: Make sure you are using the right command for removing the directory in the scripts.build in package.json. Currently, the 'rd' command has been set according to windows.
### 2. Setting up the frontend

#### To install:
In the same directory, run:
```
$cd frontend
$ npm install
```

#### To run:

`
$ npm start
`
#### To Test:
`
$ npm test
`

#### To build (prod):

`
$ npm build
`

------------


# How it Works

### Product Requirements:
1. Which companies are offering welcome offers in a market 
2. What are the companies' latest offers
3. What are companies offering over time in a market (what changed)
4. The app should have following filters:
	- Market
	- Gamet Type
	- Company
	- Date Range
5. The data should be displayed in the form of table and charts


### App Functionality

#### 1. Backend:
The data is stored in a MySQL database. It has four tables named; bookies, bookiesmarkets, gametypes and offerings. The ***offerings*** table is the main table which contains offers of different gametypes, by different bookies and the related data like offer link, description etc. It contains over 70000 rows.

The API has been built using Typescript in NodeJS and ExpressJS. ExpressJS has been used for the basic API routing and to process and respond to requests. [Prisma](https://www.prisma.io/ "Prisma") ORM has been used to interact with the MySQL database.

**Structure**:
***src/***: containes all the files and directories of the backend application

***src/index.ts***: starting point of the api. Setups the incoming requests format, setups routers and starts an HTTP server on Port 8000.

***src/routes***: src/index.ts routes the incoming requests to the respective router. For querying each table of the database, a separate route has been defined to cater the different incoming requests.

***src/controllers:*** The routes are then attached to different controllers based on the router requested. Just like the src/routes , the src/controllers contains the controllers that based on the incoming request, interacts with the database and returns a response which is then sent back to the client.

***src/middleware***: In the middleware directory, a simple *error* logging middleware are used so that it catches the error when the requests are sent on the route which is not allowed.

Apart from these, the backend has a separate ***prisma/schema.prisma*** file that contains the schema which the prisma has extracted out from our database.

The ***env*** file contains the PORT number and the database connection string, which prisma uses to connect with the local MySQL database.

An example of on one of the **requests to gametypes table** has been shown :


#### 2. Frontend:

Frontend of the app has been implemented with ReactJS. Material UI and [DevExpress](http://https://devexpress.github.io/devextreme-reactive/react/grid/ "DevExpress") components libraries are used.

**Structure**:
The structure is somewhat similar to backend. ***src*** folder contains components, services and entry point of our app **index.js**

***src/components*** contains all the components that are used in the app. 

They are:
i. DataTable -> renders the table with filters and 10 rows at a time. Provides button to go to the next page i.e. fetching consequent 10 rows from the server.
ii. BarChart -> has been used to show the top 5 companies with most number of offers in a bar chart
iii. PieChart -> displays the offers by gametype
iv. Loader -> used in DataTable to display a loading screen when the data is being fetched from the server

***src/services*** -> contains the API calls to the server.

The app has been built as a single-page and no routing has been used. 
![image](https://user-images.githubusercontent.com/31304633/188511765-8d1c0fe7-1588-4335-b55f-791d982c504a.png)

