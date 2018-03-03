var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  articleHeader: {
    type: String,
    required: true
  },
  summary: {
    type: String,
  },
  // `link` is required and of type String
  pubdate: {
    type: Date,
    required: true
  }
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  // notes: [{
  //   // Store ObjectIds in the array
  //   type: Schema.Types.ObjectId,
  //   // The ObjectIds will refer to the ids in the Note model
  //   ref: "Note"
  // }]
});
// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);
// Export the Article model
module.exports = Article;