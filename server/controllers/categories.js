var Categories = require('mongoose').model('Categories');

exports.getCategories = function (req, res) {
    Categories.find({}).exec(function (err, collection) {
        console.log(collection);
        res.json(collection);
    })
};

exports.getCategory = function (req, res) {
    console.log("Categories Id : " + req.params.id);
    Categories.find({'_id': req.params.id}).exec(function (err, cat) {
        res.send(cat[0]);
    })
};

//add categories
exports.createCategory = function (req, res, next) {
    var categoryData = req.body;

    categoryData.categoryName = categoryData.categoryName.toLowerCase();
    categoryData.createdAt = new Date();
  

    Categories.create(categoryData, function (err, category) {
        //console.log(category);
        if (err) {
            if (err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Category Name');
            }
            res.status(400);

        }
        res.send(category);
    })
};

//delete category by id
exports.deleteCategory = function (req, res) {

    Categories.findById(req.params.cid, function (err, category) {
        if (err) {
            return handleError(res, err);
        }
        if (!category) {
            return res.send(404);
        }
        console.log(category);
        // remove category matched by category ID from the category collection        
        category.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            res.json(category);
        });
    });
};

exports.updateCategory = function(req, res) {
  console.log(req.params.id);
  var updatedCategory = req.body;
  delete updatedCategory._id;
  //create new course in DB  
    Categories.findOneAndUpdate({
        '_id': req.params.id
    }, req.body, function(err, category) {
        if (err) {
            return handleError(res, err);
        }
        console.log(category);
        return res.json(category);
    });
  
};


//update category by id
exports.getCategory = function(req, res) {
  Categories.find({'_id':req.params.id}).exec(function(err, course) {
      res.send(course[0]);
  })
};
