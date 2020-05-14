'use strict';

/**
 * Homepage controller
 */
function HomePageCtrl($scope, $location, $rootScope, $http) {
  $scope.data={
      "Users": [
        {
          "first_name": "Jone",
          "last_name": "Doe",
          "email": "jonedoe@test.com",
          "phone": "9999999999",
          "status": "Active" 
        },
        {
          "first_name": "Mark",
          "last_name": "Doe",
          "email": "markdoe@test.com",
          "phone": "9999999992",
          "status": "Active" 
        },
        {
          "first_name": "Tom",
          "last_name": "Doe",
          "email": "Tomdoe@test.com",
          "phone": "9999999993",
          "status": "Active" 
        },
        {
          "first_name": "Tony",
          "last_name": "Doe",
          "email": "tonydoe@test.com",
          "phone": "999999994",
          "status": "Inactive" 
        },
        {
          "first_name": "Eric",
          "last_name": "Doe",
          "email": "ericdoe@test.com",
          "phone": "9999999995",
          "status": "Active" 
        },
        {
          "first_name": "Lili",
          "last_name": "Doe",
          "email": "lilidoe@test.com",
          "phone": "9999999996",
          "status": "Inactive" 
        }

      ]
    };
    
    $scope.Delete=function(item){
      var index = $scope.data.Users.indexOf(item);
      $scope.data.Users.splice(index, 1);     
    };
    $scope.Edit=function(item){
      let index = $scope.data.Users.indexOf(item);
      $scope.data.Users[index] = item;
  
      console.log($scope.data.Users);
    };
    
    $scope.editData=function(eItem){
      $scope.EItem=eItem;
    };
    $scope.Add=function(AItem){
      $scope.data.Users.push(AItem);
    };
}
demoApp.controller("HomePageCtrl", HomePageCtrl);