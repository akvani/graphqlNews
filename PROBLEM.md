# **Assignment 3 – NewsAPI Database**

The Database intraction of the News Api application using graphql

## Objective:
The Objective of this application is to understand the Mongodb and Graphql to fetch and store the data.

### The estimated effort to complete this assignment is 3-4 hours

## Things to do
- Fork the boilerplate
- Clone the repo in your local directory
- Start coding in your local copy
- Push the code in git
- Submit the code to your mentor


## Expected Outcome:
By the end of the assignment you should be able to understand

1. Using Mongodb
2. working with graphql
3. use of bcrypt and uuid

## Biolerplate
[Nodejs Assignment 3](/services/gitlab/stack_nodejs/assignment3_newsapidb)

## Assignment:
1. the modification will happen in 2 Microservices.
    1. NewsAuth:-
        - user data should be added and retrived.
        - use "api/v1/user" route.
        - The data structure should be
            user:{
                username,
                fullname,
                email (unique and primary key),
                password,
            }
        - Test the application using mocha and chai

    2. NewsDB:-
        - The news should be added into the database.
        - the news should be retreved from the data base.
        - the news should have the logined user information as well.
        - use "api/v1/news" route
        - The data should be
            news:{
                newsId,
                newsHeading,
                newsImage,
                newsDescription,
                newsAuther,
                newsSource,
                newsUser,
            }
        - Test the application using mocha and chai
