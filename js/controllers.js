/**
 * Created by Mike on 2016-04-10.
 */
(function () {
    "use strict";

    function servicesCtrl($scope, $stateParams) {
        $scope.pageId = $stateParams.pageId;

    }
    angular.module("app").controller("servicesCtrl", ["$scope", "$stateParams", servicesCtrl]);

    function contactCtrl($scope) {
        $scope.services = [
            {
                name: "Select a program",
                subItems: []
            },
            {
                name: "Kinder Gym",
                subItems: [
                    {
                        name: "Parent n Tot (18 months - 2 ½ years)"
                    },
                    {
                        name: "Kinder (2-4 years)"
                    }
                ]
            },
            {
                name: "Recreational Gymnastics",
                subItems: [
                    {
                        name: "Beginner Boys/Girls (4-7yrs / 7-10yrs)"
                    },
                    {
                        name: "Beginner Development Program (8-13yrs)"
                    },
                    {
                        name: "Showcase Boys/Girls (5-8yrs/8-13yrs)"
                    },
                    {
                        name: "Tricking/Parkour"
                    }
                ]
            },
            {
                name: "Competitive Gymnastics",
                subItems: [
                    {
                        name: "Inter club Boys/Girls"
                    },
                    {
                        name: "Tricking/Parkour"
                    },
                    {
                        name: "Power Tumbling (7+years)"
                    },
                    {
                        name: "Acro Sport"
                    }
                ]
            },
            {
                name: "Circus Acts",
                subItems: [
                    {
                        name: "Aerial Silks"
                    },
                    {
                        name: "Aerial Hammock"
                    },
                    {
                        name: "Chinese Poles"
                    },
                    {
                        name: "Aerial Hoop (Lyra)"
                    },
                    {
                        name: "Aerial Straps"
                    },
                    {
                        name: "Tramp-Wall"
                    },
                    {
                        name: "Spanish Web"
                    },
                    {
                        name: "Pole Fitness"
                    },
                    {
                        name: "Acro-Sport"
                    }
                ]
            },
            {
                name: "Cheerleading",
                subItems: []
            },
            {
                name: "Skateboarding",
                subItems: []
            },
            {
                name: "Neverland Productions (TBD)",
                subItems: []
            },
            {
                name: "Parties and Corporate Events",
                subItems: [
                    {
                        name: "Birthday Parties"
                    },
                    {
                        name: "Corporate Parties"
                    },
                    {
                        name: "Bachelorette Parties"
                    },
                    {
                        name: "Workshops"
                    },
                    {
                        name: "Boot Camp"
                    }
                ]
            },
            {
                name: "Rock Climbing",
                subItems: []
            }
        ];
        $scope.activeService = $scope.services[0];
        $scope.updateActive = function (val) {
            $scope.activeService = val;
        }
    }
    angular.module("app").controller("contactCtrl", ["$scope", contactCtrl]);

})();