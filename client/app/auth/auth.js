// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.error;
  $scope.class = '';

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
        $scope.class = 'error';
        if (error.data.error === 'No user') {
          $scope.error = 'Wrong password!';
        } else {
          $scope.error = error.data.error;
        }
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.class = 'error';
        if (error.data.error === 'User already exist!') {

          $scope.error = 'User already exists!';
        }
        console.error(error.data.error);
      });
  };
});
