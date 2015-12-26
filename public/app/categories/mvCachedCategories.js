angular.module('app').factory('mvCachedCategories', function(mvCourse) {
  var cagtegoriesList;

  return {
    query: function() {
      if(!cagtegoriesList) {
        cagtegoriesList = mvCategories.query();
      }

      return cagtegoriesList;
    }
  }
})