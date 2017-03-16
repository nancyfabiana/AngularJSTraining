(function () {
'use strict';

var myApp = angular.module('mySimpleApp', []);
myApp.controller('MySimpleController', MySimpleController);

MySimpleController.$inject=['$scope','$filter'];

function MySimpleController ($scope, $filter) {
  $scope.message = "";

  $scope.upperCaseMsg = function () {
    var upperCaseFilter = $filter('uppercase');
    $scope.message = upperCaseFilter($scope.message);
  };
}

})();
