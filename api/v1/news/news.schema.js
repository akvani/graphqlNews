const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type News{
    newsId:ID!
    newsHeading:String!
    newsImage:String!
    newsDescription:String! 
    newsAuther:String!
    newsSource:String!
    newsUser:String
}
input userInput{
    newsHeading:String!
    newsImage:String!
    newsDescription:String! 
    newsAuther:String!
    newsSource:String!
    newsUser:String
}
// input updateInput{
//     newsHeading:String!
//     newsImage:String!
//     newsDescription:String! 
// }
type RootQuery{
    news:[News!]!
}

type RootMutation{
    createNews(userInput:userInput):News,
    //updateNews(updateInput:updateInput):News
}

schema{
    query:RootQuery
    mutation:RootMutation
}

`);