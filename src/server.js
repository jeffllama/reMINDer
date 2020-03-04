// entry point for app, need to enable java ES6
import express from 'express';
// bodyParser module allows server to extract JSON data that we send along with request
import bodyParser from 'body-parser';
// Allows us to connect to local database
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

//need to tell server where to serve static files
app.use(express.static(path.join(__dirname, '/build')));

// parses JSON object with POST request, and adds body property to the request parameter of whatever the matching route is
app.use(bodyParser.json());
// Function to do operations with DB
const withDB = async (operations, res) => {
    try {
        // First argument to connect, is url to database we want to connect to, mongodb auto runs on localhost:27017
        // Second argument is an options object, we can use to change certain parameters to mongoDB, have to set useNewUrlPaser:true
        // connect asynchronous returns a promise, have to use async await(to deal with promises), mongoClient returns client object to query from
        const client = await MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true}, { useNewUrlParser: true });
        // db('<db name>')
        const db = client.db('reminder');
        // operations argument is the function, with our db variable
        await operations(db);

        // Closes the db connection
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

// Mongodb database getter, since we use await, need to use async keyword to the callback
app.get('/api/articles/:name', async (req, res) => {
    // Passing fnuction int owith DB that takes in an argument
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res);
});
// Grabs the date of article from mongo server
// WORKFLOW to create API/integrate with frontend
/* 1. Think about what resource you want to share (i.e. date)
2. create API (various HTTP methods, get,post, put, patch, delete) 
3. Use Postman and test server, that API fetch works
4. Go to front end, and tie in component where used
 */
app.get('/api/articles/:name/date', async (req, res) => {
    // Passing fnuction int owith DB that takes in an argument
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        const date = articleInfo.date;
        res.status(200).json(date);
    }, res);
});
// Route for url parameter, gets name of article request is upvoting
app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        // to find article use findOne, to update use updateOne (<document looking for>, <updates we want to apply>)
        await db.collection('articles').updateOne({ name: articleName }, {
            // Inside object we have property with single quotes $set, and value with actual changes we want to set
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
    // ** old version before adding mongo db
    // In articles info, key: article name,  increment the upvotes
    // articlesInfo[articleName].upvotes += 1;
    // // Res.status to say everything went ok, gets the article name, status(200) says everything is ok
    // res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`);
});
// API to downvote 
app.post('/api/articles/:name/downvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes - 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
});
// Taking post request from add-comment and storing it into fake database articlesInfo
app.post('/api/articles/:name/add-comment', (req, res) => {
    // We know request body is in req.body, just need to pull username and text properties out of request body
    const { username, text } = req.body;
    const articleName = req.params.name;
    // Can use with DB for anything involving the database
    withDB(async (db) => {
        // want to find article whose name matches our article parameter
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                //concat adds smth to an array
                comments: articleInfo.comments.concat({ username, text }),
            }
        })
        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(updatedArticleInfo);
    }, res);
});

// // Defining endpoints for app, for what to do when endpoint is hit
// // App.get request on endpoint /hello, respond with msg hello
// //('<endpoint>', (<req object>, <response object>) <- callback when hit with request)
// // body of callback is, res.send, which sends a request back to whoever hit endpoint
// app.get('/hello',(req,res) => res.send('Hello!'));

// // New getter route, at any endpoint of /hello/:name (any name) , to take name from url and return in response
// app.get('/hello/:name',(req,res) => res.send(`Hello ${req.params.name}`));
// // To get node js to run express server: command line run : npx babel-node src/server.js
// // **Then use postman for backend first testing 
// // Post request used to carry extra infrmation in request body, get request only carry info contained in url
// // To have postman post send data, go to POST -> body tab below localhost -> select JSOn type
// // Gets server to return hello with the body name
// app.post('/hello',(req,res) => res.send(`Hello ${req.body.name}!`));

//All requests that aren't caught by other API routes, should be passed onto our app
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})
// Starting server app.listen(<port>,<callback when server is listening>) 
app.listen(8000, () => console.log('Listening on port 8000'));