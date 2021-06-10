const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')

const News = require('./news.entity')

module.exports = {
    // add a new user into database
    createNews: async args => {

        try {
            // args from grapql
            const existingNews = await News.findOne({ newsHeading: args.userInput.newsHeading });
            if (existingNews) {
                throw new Error('News exists already')
            }
            else {
                // create a database understandable object
                const news = new News({
                    newsId: uuidv4(),
                    newsHeading: args.userInput.newsHeading,
                    newsImage: args.userInput.newsImage,
                    newsDescription: args.userInput.newsDescription,
                    newsAuther: args.userInput.newsAuther,
                    newsSource: args.userInput.newsSource,
                    newsUser: args.userInput.newsUser
                });
                // hit the save method of database
                const result = await news.save();
                return { ...result._doc, _id: result.newsId }
            }
        }
        catch (err) {
            throw err;
        }
    },
    // Get all User
    updateNews: async args =>{

    },
    news: () => {
        return News.find();
    }
}
