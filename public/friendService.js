angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function(userName, password) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        data: {
          name: userName,
          password: password
        }
      });
    };

    this.getFriends = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/profiles'
      });
    };

});
