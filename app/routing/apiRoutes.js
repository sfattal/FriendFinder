var path = require('path');
// var  getBestfriend = require()
var friends = require("../data/friends.js")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var userSub = {
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
        var userAns = userSub.scores

        function match() {
            var matchName = "";
            var matchImg = "";
            var diffRef = 100;

            for (var i = 0; i < friends.length; i++) {
                var diff = 0;
			    for (var j = 0; j < userAns.length; j++) {
				    diff += Math.abs(friends[i].scores[j] - userAns[j]);
                }
                if (diff < diffRef) {
                    diffRef = diff;
                    matchName = friends[i].name;
                    matchImg = friends[i].photo;
                }
            }
            res.json({status: 'OK', matchName: matchName, matchImg: matchImg});
        }
        
        match();
        friends.push(userSub);
    });

    
}