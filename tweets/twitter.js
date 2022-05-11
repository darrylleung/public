const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets.json");

// console.log(twitterKey, twitterSecret);

const authorization = `Basic ${Buffer.from(
    twitterKey + ":" + twitterSecret
).toString("base64")}`;

exports.getToken = (callback) => {
    const req = https.request(
        {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                authorization,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        },
        (res) => {
            if (res.statusCode != 200) {
                callback(new Error(res.statusCode));
            } else {
                let body = "";
                res.on("data", (chunk) => (body += chunk));
                res.on("end", () => {
                    try {
                        body = JSON.parse(body);
                        callback(null, body.access_token);
                        // console.log(body);
                    } catch (err) {
                        callback(err);
                    }
                });
                res.on("error", callback);
            }
        }
    );
    req.end("grant_type=client_credentials");
};

exports.getTweets = (token, callback) => {
    // console.log(token);
    const req = https.request(
        {
            method: "GET",
            host: "api.twitter.com",
            headers: {
                authorization: `Bearer ${token}`,
            },
            path: "/1.1/statuses/user_timeline.json?tweet_mode=extended&screen_name=nytimes",
        },
        (res) => {
            if (res.statusCode != 200) {
                return callback(new Error(res.statusCode));
            } else {
                let body = "";
                res.on("data", (chunk) => (body += chunk));
                res.on("end", () => {
                    try {
                        body = JSON.parse(body);
                        // console.log("tweets: ", body);
                        // console.log(body[0].entities.urls);
                        callback(null, body);
                    } catch (err) {
                        callback(err);
                    }
                });
                res.on("error", callback);
            }
        }
    );
    req.end();
};

exports.formatTweets = (tweets) => {
    let formattedTweets = [];
    tweets.forEach((item) => {
        if (item.entities.urls.length == 1) {
            formattedTweets.push({
                headline: item.full_text.replace(item.entities.urls[0].url, ""),
                url: item.entities.urls[0].url,
            });
        }
    });
    // console.log(formattedTweets);
    return formattedTweets;
};
