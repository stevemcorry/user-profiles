angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        data: user
      });
    };

    this.getFriends = function() {
    	/* FIX ME */
    };

});
