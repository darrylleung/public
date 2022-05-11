const express = require("express");
const { getToken, getTweets, formatTweets } = require("./twitter.js");
const app = express();

app.use(express.static("./public"));

app.get("/headlines.json", function (req, res) {
    //get and format the tweets and then serve them
    getToken((err, token) => {
        if (err) {
            res.sendStatus(500);
        } else {
            getTweets(token, (err, tweets) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    
                    res.json(formatTweets(tweets));
                }
            });
        }
    });
});

app.listen(8080, () => console.log(`I'm listening.`));
