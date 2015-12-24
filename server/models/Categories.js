var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var categoriesSchema = new Schema({
  name: String,
  categoryName: { type: String, required: true, unique: true },
  categoryDesc: { type: String, required: true },
  createdAt: Date
});

var Categories = mongoose.model('Categories', categoriesSchema);

function createDefaultCategories() {
  Categories.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var currentDate = new Date();
      Categories.create({categoryName:'Programming',categoryDesc:'Test this description.',createdAt: currentDate});
    }
  })
};

exports.createDefaultCategories = createDefaultCategories;

