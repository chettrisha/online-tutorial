angular.module('app').factory('mvCategories', function($http, $q) {
    return {
        //add category
        createCategory: function(newCategoryData) {

            var dfd = $q.defer();
            /** add new categories in categories model
            **/
            $http.post('/api/categories/add', newCategoryData).then(function(response) {
                if (response.data.success) {
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;


        },


    }
});
