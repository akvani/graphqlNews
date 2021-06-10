const router = require('express').Router();
const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require('./news.schema')
const graphqlResolver = require('./news.rootResolver')


router.use('/',
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true
    })
)

// router.use('/welcome',(req,res)=>{
//     console.log("Welcome");
//     res.send("hello");
// })
module.exports = router;