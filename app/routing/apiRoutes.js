var path = require('path');
// var  getBestfriend = require()
var friends = require("../data/friends.js")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var userData = {
            name: (req.body.full_name),
            photo: (req.body.picture),
            scores: [
                parseInt(req.body.q_1),
                parseInt(req.body.q_2),
                parseInt(req.body.q_3),
                parseInt(req.body.q_4),
                parseInt(req.body.q_5),
                parseInt(req.body.q_6),
                parseInt(req.body.q_7),
                parseInt(req.body.q_8),
                parseInt(req.body.q_9),
                parseInt(req.body.q_10)
            ]
        };
        friends.push(userData);
        var bestFriend = "Hey";
        res.send(bestFriend);
        console.log(res)



        // function match() {

        // }
    });

    
}