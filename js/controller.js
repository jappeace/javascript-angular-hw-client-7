function tableToString() {
	"use strict";
	return "Table " + this.id + " with " + this.seats + " seats";
}

var app = angular.module('restaurant', []);

app.config(['$routeProvider', function($routeProvider) {
	"use strict";
	$routeProvider
	.when('/reserve', 
		{
			templateUrl: 'partial/reserve.html',
			controller: 'TableReserveController'
		});
	$routeProvider.when('/order',
		{
			templateUrl: 'partial/order.html',
			controller: 'RestaurantOrderController'
		});
}]);

app.service('tableService', function() {
	"use strict";
	var tables = [
		{
			id: 1,
			seats: 8,
			reserved: false,
			ordered: {},
			toString: tableToString
		},
		{
			id: 2,
			seats: 2,
			reserved: false,
			ordered: {},
			toString: tableToString
		},
		{
			id: 3,
			seats: 5,
			reserved: false,
			ordered: {},
			toString: tableToString
		},
		{
			id: 4,
			seats: 12,
			reserved: false,
			ordered: {},
			toString: tableToString
		},
		{
			id: 5,
			seats: 4,
			reserved: true,
			ordered: {},
			toString: tableToString
		}];

	return {
		getTables: function() {
			return tables;
		}
	};
}).
filter('notReserved', function() {
	"use strict";
	return function(input) {
		var out, i;
		out = [];
		for (i = 0; i < input.length; i+=1) {
			if (!input[i].reserved) {
				out.push(input[i]);
			}
		}
		return out;
	};
});

function RestaurantOrderController($scope, tableService) {
	"use strict";
	$scope.tables = tableService.getTables();
	$scope.selectedTable = $scope.tables[0];

	$scope.addOrder = function(order) {
		if($scope.selectedTable.ordered[order] === undefined) {
			$scope.selectedTable.ordered[order] = 1;
		} else {
			$scope.selectedTable.ordered[order]++;
		}
	};

	$scope.selectTable = function(table) {
		$scope.selectedTable = table;
	};
}

function TableReserveController($scope, tableService) {
	"use strict";
	$scope.tables = tableService.getTables();

	$scope.reserveTable = function(table) {
		$scope.reserveMessage = "You have reserved table " + table.id + "!";
		table.reserved = true;
	};
}
