angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {

  $scope.init = function() {
    $scope.data = {};
    Links.getAll().then(function(data) {
      data.sort(function(a, b) {
        return a.visits < b.visits;
      });
      $scope.data.links = data;
    });
  };
  
  $scope.logoff = function () {
    Auth.signout();
  };

  $scope.init();

});
