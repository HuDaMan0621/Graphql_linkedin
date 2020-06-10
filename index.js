import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express ();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!!~~~~~~~~!!!!');
});

const root = { friend: () => {
    return {
        "id": 123222332,
        "firstName": "Ying",
        "lastName": "Hu",
        "gender": "Male",
        "language": "English",
        "email": "ying.hu@hudaman.dev",
    }
}}; //root resolver

app.use('/graphql', graphqlHTTP({
    schema: schema, //created a schema 
    rootValue: root,  //resolving here once we are calling the query
    graphiql: true, //we will use graphiql here
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));