angular.module('app').controller('mvCategoriesListCtrl', function($scope, mvCategories, mvNotifier, $location, $http, $window) {

  $scope.addcategory = function() {
    var newCategoryData = {
      categoryName: $scope.categoryName,
      categoryDesc: $scope.categoryDesc,
    };
  mvCategories.createCategory(newCategoryData).then(function() {
     mvNotifier.notify('Category Added Successfully !');
      $location.path('/');
    }, function(reason) {
      mvNotifier.error(reason);
    })
  }

//deleteCategory
$scope.deleteCategory = function(id) {
   mvCategories.createCategory(id).then(function() {
      mvNotifier.notify('Category Deleted Successfully !');
      $location.path('/');
    }, function(reason) {
      alert(reason);
      mvNotifier.error(reason);
    })
  }


  $scope.getAllCategory = function() {
    
    /** add new categories in categories model
    **/
    $http.get('/api/categories').then(function(response) {
      console.log(response);
        if (response.data) {
          console.log(response.data);
            $scope.allCategory=response.data;
           // $window.location.reload();

        } else {

        }
    });
  }

});