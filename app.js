/**
 * Created by Mike on 2016-04-09.
 */

    var app = angular.module("app", [
        "ui.router"
    ])
    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", config])
    .run(["$rootScope", "$state", "$window", "$location", run]);

    function config($stateProvider, $locationProvider, $urlRouterProvider) {

        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "html/home.html"
            })

            .state("services", {
                url: "/services",
                templateUrl: "html/services.html",
                controller: 'servicesCtrl'
            })
    };

function run($state) {
    // $state.go("home");
};