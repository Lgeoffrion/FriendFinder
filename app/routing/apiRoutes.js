// ===============================================================================
//Pull data from friends.js
// ===============================================================================

var surveyResults = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

//will display survey results to a blank page (For testing purposes)
app.get("/api/friends", function(req, res) {
    return res.json(surveyResults);
});


// ************************************
// PLACEHOLDER, Needs fixing
// ************************************

  app.post("../data/friends.js", function(req, res) {
    surveyArray.push(req.body);
      res.json(true);
  });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = [];
//     waitListData.length = [];

//     res.json({ ok: true });
//   });
// };
