(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('lunchCheckController', function ($scope) {

$scope.lunchMenu="";
$scope.outputMsg = "";
$scope.checkLunch = function () {
var numberOfItems = calculateNumberOfItems($scope.lunchMenu);
if ($scope.lunchMenu == "") {
  $scope.outputMsg = "Please enter data first";
}
else if (numberOfItems <=3) {
  $scope.outputMsg = "Enjoy!";
}
else {
  $scope.outputMsg = "Too much!";
}
};

function calculateNumberOfItems(items) {
  var separator = ',';
  var arrayOfItems = items.split(separator);
  return arrayOfItems.length;
}
});

})();
