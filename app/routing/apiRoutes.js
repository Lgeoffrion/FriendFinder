// ===============================================================================
//Pull data from friends.js
// ===============================================================================

var surveyResults = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

//will display survey results to a blank page (For testing purposes)
app.get("/api/friends", function(req, res) {
    res.json(surveyResults);
});


app.post("/api/friends", function(req, res) {
  var newFriendScore = req.body.scores;
  var scoredArr = [];
  var total = 0;
    for (var i = 0; i < surveyResults.length; i++){
     var FriendArr = surveyResults[i].scores;
     for (var x = 0; x < newFriendScore.length; x++) {
       total += (Math.abs(parseInt(FriendArr[x]) - parseInt(newFriendScore[x])));
     }
    scoredArr.push(total);
    total = 0;
  }
  var bestMatchScore = Math.min.apply(null, scoredArr);
  var key = scoredArr.indexOf(bestMatchScore);
  surveyResults.push(req.body);
  res.json(surveyResults[key]);
});
};