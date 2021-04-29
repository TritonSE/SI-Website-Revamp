# Running Locally


## Express Server 

Start off in the root directory. Simply run: 

`npm install && npm start`

The server should go live on locahost on port 3000. The server will restart every single time you make an edit to any backend file, as npm start calls nodemon. 

If you don't want the server to restart on edits, simply execute the following command instead to have it run via node instead of nodemon:

`npm install && npm run-script begin`

## Static Website  

Start off in the root directory. Run: 

`cd client/website`

`npm install && npm start`

This will build the frontend on port 9000. Page will reload on edits in that directory. 

## Admin Tool

Start off in the root directory. Run: 

`cd client/admin-tool`

`npm install && npm start`

This will build the frontend on port 5000. Page will reload on edits in that directory. 