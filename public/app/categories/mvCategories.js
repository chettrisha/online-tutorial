angular.module('app').factory('mvCategories', function($http, mvIdentity, $q, mvUser) {
  return {
  	//add category
    createCategory: function(newCategoryData) {
      var newCategory = new mvCategories(newCategoryData);
      var dfd = $q.defer();

      newCategory.$save().then(function() {
        mvIdentity.currentUser = newCategory;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

   
  }
});