
(function() {
  
  var app = angular.module("gitHubSearch", []);
  
  var MainController = function($scope, github){
    
    var onUserComplete = function(data) {
      $scope.user = data;
      $scope.error = "";
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onError = function(response){
      $scope.error = "Could not fetch the data";
    };
    
    var onRepos = function(data){
      $scope.repos = data;
    };
    
    $scope.search = function(username){
      github.getUser(username).then(onUserComplete, onError);
    };
    
    $scope.repoSortByName = function(){
      $scope.repoSortOrder = "+name";
    };
    $scope.repoSortByStars = function(){
      $scope.repoSortOrder = ["-stargazers_count", "-Language", "+name"];   //"-stargazers_count";
    };
    $scope.repoSortByLanguage = function(){
      $scope.repoSortOrder = ["+language", "-stargazers_count", "+name"];   //"+language";
    };
    
    
    $scope.username = "google";
    $scope.message = "GitHub Search";
    $scope.repoSortOrder = "-stargazers_count";
  };
  
  app.controller("MainController", ["$scope", "github", MainController]);
  
}());

