function CitiesController($scope) {
    $scope.cities = [
        {name: "Gherla"},
        {name: "Ghej"},
        {name: "Ghistrita"}
    ];
    $scope.city = "Cluj";

    $scope.getCityClass = function(city) {
        if (city.selected) {
            return "selected";
        } else {
            return "";
        }
    };

    $scope.addCity = function(cityName) {
        $scope.cities.push({
            name: cityName
        });
        $scope.city = "";
    }

}