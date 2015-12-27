var Categories = require('mongoose').model('Categories');

//get all the categories
exports.getCategories = function(req, res) {
  Categories.find({}).exec(function(err, collection) {
    console.log(collection);
    res.json(collection);
  })
};

//add categories
exports.createCategory = function(req, res, next) {
  var categoryData = req.body;
 
  categoryData.categoryName = categoryData.categoryName;
  categoryData.categoryDesc = categoryData.categoryDesc;
  categoryData.createdAt = new Date();

  Categories.create(categoryData, function(err, category) {
    if(err) {
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Category Name');
      }
      res.status(400);
      return res.json(categoryData);
    }
  })
};