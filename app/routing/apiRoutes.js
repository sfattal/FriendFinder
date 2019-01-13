var path = require('path');
var friends = require("../data/friends.js")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        console.log('this should be the body');
        console.log(req);

        var array= req.body.scores
        var newArray = []
        array.forEach(function(element) {
            newArray.push(parseInt(element));
          });
        var userSub = {
            name: (req.body.name),
            photo: (req.body.photo),
            scores: newArray
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
            res.json({matchName: matchName, matchImg: matchImg});
        }
        match();
        friends.push(userSub);
    });
}