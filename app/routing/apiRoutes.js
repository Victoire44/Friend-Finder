var friends = require("../data/friends");

// API GET Requests
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        //results of the user
        var newFriendScore = req.body.scores;
        
        var matchScore = Number.MAX_VALUE;
        var bestMatch;

        for (var i = 0; i < friends.length; i++) {
            var friendScore = friends[i].scores
            var totalDifference = 0;
            for (var j = 0; j < newFriendScore.length; j++) {
                totalDifference += Math.abs(friendScore[j] - newFriendScore[j]);
            };
            if (totalDifference < matchScore) {
                bestMatch = friends[i];
                matchScore = totalDifference
            }
        };
        // Add to the friends list
        friends.push(req.body);
        res.json(bestMatch);
    });
}