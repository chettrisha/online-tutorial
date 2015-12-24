var Categories = require('mongoose').model('Categories');

exports.getCategories = function(req, res) {
  Categories.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};

//add categories
exports.createCategory = function(req, res, next) {
  var categoryData = req.body;
 
  categoryData.categoryName = categoryData.categoryName.toLowerCase();
 
  Categories.create(categoryData, function(err, user) {
    if(err) {
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Category Name');
      }
      res.status(400);
      return res.send({reason:err.toString()});
    }
  })
};