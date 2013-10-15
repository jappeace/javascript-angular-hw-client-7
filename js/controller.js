angular.module('restaurant', [])
	.service('tableService', function() {
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
	})

function RestaurantOrderController($scope, tableService) {
	$scope.tables = tableService.getTables();
	$scope.selectedTable = $scope.tables[0];

	$scope.addOrder = function(order) {
		if($scope.selectedTable.ordered[order] == undefined) {
			$scope.selectedTable.ordered[order] = 1;
		} else {
			$scope.selectedTable.ordered[order]++;
		}
	}

	$scope.selectTable = function(table) {
		$scope.selectedTable = table;
	}

}

function TableReserveController($scope, tableService) {
	$scope.tables = tableService.getTables();

	$scope.reserveTable = function(table) {
		$scope.reserveMessage = "You have reserved table " + table.id + "!";
		table.reserved = true;
	};
}

function tableToString() {
	return "Table " + this.id + " with " + this.seats + " seats";
}
