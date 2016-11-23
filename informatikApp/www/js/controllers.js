angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope){

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true,
    test: false
  };
})

.controller('MapCtrl', function($scope) {
  console.log("Map");
})

.controller('ScheduleCtrl', function ($scope) {
  console.log("Schedule");
});
