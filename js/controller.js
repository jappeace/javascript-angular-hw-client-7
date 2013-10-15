angular.module('restaurant', [])
	.service('tableService', function() {
		var tables = [
			{
				id: 1,
				seats: 8,
				reserved: false,
				ordered: []
			},
			{
				id: 2,
				seats: 2,
				reserved: false,
				ordered: []
			},
			{
				id: 3,
				seats: 5,
				reserved: false,
				ordered: []
			},
			{
				id: 4,
				seats: 12,
				reserved: false,
				ordered: []
			},
			{
				id: 5,
				seats: 4,
				reserved: true,
				ordered: ["Cola", "Pizza", "food"]
			}];

		return {
			getTables: function() {
				return tables;
			}
		};
	})

function RestaurantOrderController($scope, tableService) {
	$scope.tables = tableService.getTables();
	$scope.selectedTable = 1;

	$scope.selectTable = function(table) {
		$scope.selectedTable = table.id;
	}
}
