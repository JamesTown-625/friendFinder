var friends = require('../data/friends.js');

module.exports = function(app){
  // create a friends API forusers to see all friends that are possible to be matched with - provides JSON
  app.get("/api/friends", function(req, res) {
    
    res.json(friends);
    // console.log(friends);
    // console.log("above is the friends array");
  });

  // Create New friend to be able to get matches - takes in form input
  app.post("/api/friends", function(req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(req.body);

    //Here we take the result of the user's survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;

      for (var j = 0; j < friends[i].scores[j]; j++) {
        
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friends.push(userData);

    res.json(bestMatch);

  });
}
 
