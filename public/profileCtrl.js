angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
var	profileStuff = function(){
    friendService.getFriends().then(function(response) {
      $scope.currentUser = response.data.currentUser;
      $scope.friends = response.data.friends;
    });
  };
  profileStuff();
});
