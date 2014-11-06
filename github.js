(function(){
  
  var github = function($http, $log){
    
    var getUser = function(username){  
          $log.info("github.getUser : Searching for " + username);
          
          return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                  return response.data;
                });
    };
  
    var getRepos = function(user){
          $log.info("github.getRepos : Getting repos for " + user);
          return $http.get(user.repos_url)
                      .then(function(response){
                        return response.data;
                      });
    };
  
    return {
        getUser: getUser,
        getRepos: getRepos
    };
  
  };
  
  var module = angular.module("gitHubSearch");
  module.factory("github", github);
}());