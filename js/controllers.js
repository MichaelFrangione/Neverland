/**
 * Created by Mike on 2016-04-10.
 */
(function () {
    "use strict";

    function servicesCtrl($scope) {
        $scope.multiItem = true;
    }
    angular.module("app").controller("servicesCtrl", ["$scope", servicesCtrl]);

})();