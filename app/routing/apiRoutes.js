// ===============================================================================
//Pull data from friends.js
// ===============================================================================

var surveyResults = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

//will display survey results to a blank page (For testing purposes)
app.get("/api/friends", function(req, res) {
    res.json(surveyResults);
});


// ************************************
// Push To Friend Array
// ************************************

  app.post("api/friends", function(req, res) {
    //grabs the new friend's scores to compare with friends in surveyResults array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<surveyResults.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(surveyResults[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bff = surveyResults[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    surveyResults.push(req.body);
  });
};