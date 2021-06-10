### How to run NewsAPP_DB Microservice
1. Service Runs in localhost port of 6030

## Application EndPoints

1. Post - `http://localhost:6030/api/news/readlater` to Save news to Database
2. Get - `http://localhost:6030/api/news/readnoe` to get All Saved News

# News APP DB MIcroSevice
- `npm start` to start the service
- Auth DB Service will runs in `http://localhost:6020/api/v1/news`
1. Ceate a new News 

        mutation{
        createNews(userInput:{
            newsHeading:"Jim Boylen relieved as Bulls Head Coach - Bulls.com",
            newsImage:"https://www.nba.com/bulls/news/jim-boylen-relieved-bulls-head-coach",
            newsAuther:"Bulls.com",
            newsDescription:"Chicago Bulls Executive Vice President – Basketball Operations Arturas Karnisovas announced today that Jim Boylen has been relieved of his duties as head coach. MICHAEL REINSDORF: \"No one could question Jim's passion for our team and our organization. We sinc…",
            newsSource:"Heat.com",
            newsUser:"dhinesh@gmail.com"
        }){
            newsId
        }
        }
2. to Get all News

        query{
        news{
            newsAuther
        }
        }
## Application Testing