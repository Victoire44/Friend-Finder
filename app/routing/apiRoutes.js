var friends = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;


        for (var i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = partseInt(newFriend.scores[i]);
        }


    });
}