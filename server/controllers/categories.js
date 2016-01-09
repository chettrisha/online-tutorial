var Categories = require('mongoose').model('Categories');

exports.getCategories = function(req, res) {
  Categories.find({}).exec(function(err, collection) {
    res.json(collection);
  })
};

//add categories
exports.createCategory = function(req, res, next) {
  var categoryData = req.body;
  alert(categoryData);
  categoryData.categoryName = categoryData.categoryName.toLowerCase();
  categoryData.categoryDesc = categoryData.categoryDesc.toLowerCase();
  categoryData.createdAt = new Date();

  Categories.create(categoryData, function(err, category) {
  if(err) {
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Category Name');
      }
      res.status(400);
      return res.json(category);
    }
  })
};