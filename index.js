import express from "express";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());

const users = []
const tweets = []

app.post("/sign-up", (req, res) => {
    let { body } = req
    const newUser = {
        username: body.username,
        avatar: body.avatar
    }
    users.push(newUser)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    let { body } = req
    const newTweet = {
        username: body.username,
        tweet: body.tweet
    }
    tweets.push(newTweet)
    res.send("OK")
})

app.get("/tweets", (req, res) => {
    if(tweets.length >= 10){
        res.send(tweets.slice(-10))
    }else{
        res.send(tweets)
    }
})

app.listen(5000)