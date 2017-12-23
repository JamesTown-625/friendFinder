var friendsArray = require('../data/friends.js');

module.exports = function(app){
  // create a friends API forusers to see all friends that are possible to be matched with - provides JSON
  app.get("/api/friends", function(req, res) {
    
    return res.json(friendsArray);
    console.log(friendsArray);
    console.log("above is the friendsArray");
  });

  // Create New friend to be able to get matches - takes in form input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    console.log(newFriend);
    console.log("above is the newfriend raw");
   
    res.json(newFriend);
    console.log(newFriend.scores);
    console.log("above is the new friend array after the json method");
  });
}
 
