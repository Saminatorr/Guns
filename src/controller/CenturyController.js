var CenturyController = function ($scope, $http) {
    $scope.centuries = [];
    var onCenturiesDownloaded = function (response) {
        angular.forEach(response.data.centuries, function (value, key) {
            $scope.centuries.push(value);
        });
    };
    var onError = function (response) {
    };
    $http.get('data.json').then(onCenturiesDownloaded, onError);
};