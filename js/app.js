var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
  $scope.list = [
    {
      task: "Do the project",
      finished: false,
      edited: false,
      showing: true,
      hiding: false
    }
  ];

  $scope.addNew = function() {
    $scope.list.push({
      task: "Please edit this item",
      finished: false,
      edited: false,
      showing: true,
      hiding: false
    })
  }

  $scope.save = function(item) {
    item.edited = true;
    item.showing = true;
    item.hiding = false;
  }

  $scope.delete = function(item) {
    $scope.list.splice($scope.list.indexOf(item), 1);
  }

  $scope.edit = function(item) {
    item.showing = false;
    item.hiding = true;
  }

  $scope.line = function(item) {
    if(item.finished === true) {
      return "finished";
    } else {
      return "";
    }
  }
});
