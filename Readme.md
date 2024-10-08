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
1. A table is used to show the data of 10 rows at a time. The table is complemented with 4 filters;

i. Filter by GameType - Which displays a list of available gametypes

![image](https://user-images.githubusercontent.com/31304633/188515608-4d0ba992-b853-40c7-bc57-137bc72ea771.png)

ii. Filter by Market (renamed as Country) - Provides a list of all markets/countries of which offers data is available

![image](https://user-images.githubusercontent.com/31304633/188515659-551de6c9-0d7a-4164-bd34-c9ea4c1ca7a6.png)

iii. Filter by Bookies (renamed as company) - Provides a list of all companies/bookies using which you can filter the data for specific bookies

![image](https://user-images.githubusercontent.com/31304633/188515713-57ded3e6-73e5-4e8d-94ff-53b794502fa5.png)

iv. Filter by Date Range - FROM and TO date can be selected to provide a date range to filter the data

![image](https://user-images.githubusercontent.com/31304633/188515766-c47725c8-0d13-4e2c-a22a-d2ee32e359aa.png)

The following are couple of examples of how the filters can be used.

![image](https://user-images.githubusercontent.com/31304633/188515869-e19f1acd-b570-43c0-8c5e-4ae3b4104399.png)

![image](https://user-images.githubusercontent.com/31304633/188515934-991600e8-5006-4330-9eee-8619867b4db6.png)

2. Pie and Bar Charts are used to display two very interesting insights.

![image](https://user-images.githubusercontent.com/31304633/188516027-963c5794-f418-4c5e-bf67-1b5d0970e939.png)


### Implementation Details

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


***API Endpoints***:
1. GET /bookies - Returns all the bookies (companies) from the bookies table as a JSON.
   ``` {
        "bookies": [
            {
                "id": 6,
                "name": "Virgin Bet",
                "logo": "Virgin"
            },
            {
                "id": 7,
                "name": "Bet UK",
                "logo": "Bet_UK"
            },
    .....
    ]
    ```

2. GET /bookies/{id} - Return a single bookie with {id}
3. GET /bookies/top - Returns top 5 companies with most offers from the offerings table
4. GET /gametype - Returns all the gametypes from the gametype table as JSON.
   ``` {
        "gametypes": [
            {
                "id": 1,
                "type": "Betting"
            },
            {
                "id": 2,
                "type": "Casino"
            },
            {
                "id": 3,
                "type": "Poker"
            },
            {
                "id": 4,
                "type": "Undefined"
            }
        ]
    }
    ```
5. GET /gametype/{id} - Returns a single gametype with {id}
6. GET /gametype/top - Returns all the gametype with their corresponding count of offers from the offerings table
7. GET /markets - Returns all the markets (countries)
   ``` {
        "markets": [
            {
                "id": "AE",
                "name": "United Arab Emirates"
            },
            {
                "id": "AR",
                "name": "Argentina"
            },
    ...
    ]}```
    
8. GET /markets/{id} - Return the market with specific {id}
9. GET /offerings/{id} - Return an offer with {id} 
10. POST /offerings - Returns 10 rows from the offerings table. Filters can be provided as a body of the post request as following:
    ```{
        "skip":0,
        "take":10,
        "filterby":{"gametype_id":"","fromDate":"","toDate":"","bookiesmarkets_id":"IN","bookies_name":"22Bet Sports"}
    
    }
    ```
	skip: Rows to skip from the start - **number**
	take: Rows to take after the skip -  **number**
	filterby.gametype_id: **number**
	filterby.fromDate: **Date object**
	filterby.toDate:** Date object**
	filterby.bookiesmarkets_id: **String**
	filterby.bookies_name: **String**

e.g for gametype_id =1, it returns
    
    ```
    {
        "offerings": [
            {
                "id": 62494,
                "recorded_at": "2022-05-01T19:49:12.000Z",
                "bookies_name": "22Bet Sports",
                "discount_text": "100% Up To 200 SGD",
                "discount_description": null,
                "landingpage_URL": null,
                "gametype_id": {
                    "id": 1,
                    "type": "Betting"
                },
                "source_id": 411,
                "language_id": 1,
                "min_deposit": "$1",
                "max_deposit": "no limit",
                "customer_check": true,
                "new_customer": false,
                "bookiesmarkets_id": {
                    "id": "SG",
                    "name": "Singapore"
                }
            },
            {
                "id": 62495,
                "recorded_at": "2022-05-01T19:49:12.000Z",
                "bookies_name": "1xbet Sports",
                "discount_text": "100% up to 160 SGD",
                "discount_description": null,
                "landingpage_URL": null,
                "gametype_id": {
                    "id": 1,
                    "type": "Betting"
                },
                "source_id": 411,
                "language_id": 1,
                "min_deposit": "$1",
                "max_deposit": "no limit",
                "customer_check": true,
                "new_customer": false,
                "bookiesmarkets_id": {
                    "id": "SG",
                    "name": "Singapore"
                }
            },
            {
                "id": 62496,
                "recorded_at": "2022-05-01T19:49:12.000Z",
                "bookies_name": "BetWinner Sports",
                "discount_text": "100% Up To €100",
                "discount_description": null,
                "landingpage_URL": null,
                "gametype_id": {
                    "id": 1,
                    "type": "Betting"
                },
                "source_id": 411,
                "language_id": 1,
                "min_deposit": "$1",
                "max_deposit": "no limit",
                "customer_check": true,
                "new_customer": false,
                "bookiesmarkets_id": {
                    "id": "SG",
                    "name": "Singapore"
                }
            },
    ...
    ]}```

An example of on one of the **requests to gametypes table** has been shown :

![image](https://user-images.githubusercontent.com/31304633/188513462-ab775b71-e8ea-4b0d-88d2-44732c570cee.png)


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

------------

## Possible Improvements
1. The charts can be displayed in a separate tab. React Routing would get the job done. Currently, the charts are re-rendered when new data is fetched for the table.
2. Test Cases for all the components are not written. More test cases can be covered along with Integration and E2E testing performed which could uncover more bugs and provide a thorough testing.
3. Sorting function as such not implemented on server side. Currently, the sorting works only on the displayed 10 rows.
4. Provide more interesting insights from the data.


