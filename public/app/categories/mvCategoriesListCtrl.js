angular.module('app').controller('mvCategoriesListCtrl', function($scope, mvCachedCategories) {

  $scope.addcategory = function() {
    var newCategoryData = {
      categoryName: $scope.categoryName,
    };

    mvCategories.createCategory(newCategoryData).then(function() {
      mvNotifier.notify('Category Added Successfully !');
      $location.path('/');
    }, function(reason) {
      mvNotifier.error(reason);
    })
  }

});
