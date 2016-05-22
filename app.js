/**
 * Created by Mike on 2016-04-09.
 */

    var app = angular.module("app", [
        "ui.router"
    ])
    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", config])
    .run(["$rootScope", "$window", "$location", run]);

    function config($stateProvider, $locationProvider, $urlRouterProvider) {

        // $locationProvider.html5Mode(true); // DISABLE WHEN RUNNING HTTP_SERVER

        $stateProvider
            .state("home", {
                url: "/home",
                title: "Home",
                templateUrl: "html/home.html"
            })
            .state("contact", {
                url: "/contact",
                templateUrl: "html/contact.html",
                controller: 'contactCtrl'
            })
            .state("about", {
                url: "/about",
                templateUrl: "html/about.html"
            })
            .state("services", {
                // url: "/services",
                // controller: 'servicesCtrl',
                abstract: true,
                templateUrl: "html/services.html"
            })
            .state("services.kinderGym", {
                url: "/services/kinder-gym",
                title: "Kinder Gym",
                templateUrl: "html/services/kinder-gym.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "kinder-gym"
                }
            })
            .state("services.recGym", {
                url: "/services/recreational-gymnastics",
                title: "Recreational Gymnastics",
                templateUrl: "html/services/rec-gym.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "rec-gym"
                }
            })
            .state("services.competitive", {
                url: "/services/competitive",
                title: "Competitive",
                templateUrl: "html/services/competitive.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "competitive"
                }
            })
            .state("services.circusActs", {
                url: "/services/circus-acts",
                title: "Competitive",
                templateUrl: "html/services/circus-acts.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "circus-acts"
                }
            })
            .state("services.cheerleading", {
                url: "/services/cheerleading",
                title: "Cheerleading",
                templateUrl: "html/services/cheerleading.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "cheerleading"
                }
            })
            .state("services.skateboarding", {
                url: "/services/skateboarding",
                title: "Skateboarding",
                templateUrl: "html/services/skateboarding.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "skateboarding"
                }
            })
            .state("services.neverlandProductions", {
                url: "/services/neverland-productions",
                title: "Skateboarding",
                templateUrl: "html/services/neverland-productions.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "neverland-productions"
                }
            })
            .state("services.parties", {
                url: "/services/parties",
                title: "Parties",
                templateUrl: "html/services/parties.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "parties"
                }
            })
            .state("services.rockClimbing", {
                url: "/services/rock-climbing",
                title: "Parties",
                templateUrl: "html/services/rock-climbing.html",
                controller: 'servicesCtrl',
                params: {
                    pageId: "rock-climbing"
                }
            });

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go("home");
        });
    };

function run($rootScope, $window,  $location) {
    console.log("site is ready.");
    
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        if (toState.name != "home") {
            // Scrolls the content back to top on each page change
            $("body").scrollTop("0px");
        }

        $window.ga('send', {
            hitType: "pageview",
            title: toState.title,
            page: toState.url
        });
    });
}