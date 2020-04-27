/*
Angular Shopping list test file
*/

angular.module("myApp", [])
    .controller("ListControler", function($scope) {

        // To see if exists local storate data
        var key = JSON.parse(window.localStorage.getItem("shopping_list"));
        if (key == "" || key == null) {
            
            // Set default items data
            // The default name will be “New Item” with quantity 1 and price of 0.00
            $scope.items = [
              {name: 'apple',
                  qty: 1, price: 2.00},
            ];
        } 
        
        else {
        // Assign data from localStorage to items
            $scope.items = key;
        }

        // Remove function
        $scope.removeItem = function(index) {
          $scope.items.splice(index, 1);
        }

        // Add function
        $scope.newItem = function() {
            $scope.items.splice($scope.items.length, 0,
                {name: 'New Item', qty: 1, price: 0.00});
        }

        // Save to local storage function
        $scope.saveItem = function() {
            window.localStorage.setItem("shopping_list", JSON.stringify($scope.items));
        }

        
    })



















