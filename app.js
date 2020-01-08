//jshint esversion:6
const bodyParser = require('body-parser');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema.js');

const app = express();

mongoose.connect("mongodb+srv://manuela:test123@gql-ninja-7fll5.mongodb.net/bookListDB", { useNewUrlParser: true });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Now listening on port 4000');
});
