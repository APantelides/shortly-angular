angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, getData) {

  // $scope.init = function() {
  //   $scope.data = {};
  //   Links.getAll().then(function(data) {
  //     data.sort(function(a, b) {
  //       return a.visits < b.visits;
  //     });
  //     $scope.data.links = data;
  //   });
  // };
  $scope.data = {links: getData};
  $scope.logoff = function () {
    Auth.signout();
  };

  // $scope.init();

})
.directive('shortenedLinks', function() {
  return {
    restrict: 'E',
    template: '<img src="/assets/redirect_icon.png"/><div class="info"><div class="visits"><span class="count">{{link.visits}}</span>Visits</div><div class="title">{{link.title}}</div><div class="original">{{link.url}}</div><a href="{{link.baseUrl}}/{{link.code}}">{{link.baseUrl}}/{{link.code}}</a></div>'
  };
});
