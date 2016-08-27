angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.addLink = function () {
    console.log($scope.link);
    Links.addOne($scope.link).then(function() {
      $scope.link.url = '';
    });
  };
  $scope.logoff = function () {
    Auth.signout();
  };
});
