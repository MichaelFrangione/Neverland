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
                        name: "Parent n Tot (18mth - 2 1/2)"
                    },
                    {
                        name: "Kinder (2-4 yrs.)"
                    }
                ]
            },
            {
                name: "Recreational Gymnastics",
                subItems: [
                    {
                        name: "Beginner Girls (4-7yrs/7-10yrs)"
                    },
                    {
                        name: "Beginner Boys (4-7yrs)"
                    },
                    {
                        name: "Showcase Girls (5-8yrs/8-13yrs) & Boys (5-8/8-13yrs)"
                    },
                    {
                        name: "Power Tumbling (7+ yrs)"
                    },
                    {
                        name: "Trampoline (7+ yrs)"
                    },
                    {
                        name: "Adult classes (13+ yrs)"
                    },
                    {
                        name: "Boot camp"
                    },
                    {
                        name: "Tricking/Parkour"
                    },
                    {
                        name: "School Groups"
                    },
                    {
                        name: "After School Program"
                    }
                ]
            },
            {
                name: "Competitive Gymnastics",
                subItems: [
                    {
                        name: "Beginner Development Program - Boys/Girls (8 -13yrs)"
                    },
                    {
                        name: "Inter club Boys/Girls"
                    },
                    {
                        name: "Provincial"
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
                        name: "Spanish Web"
                    },
                    {
                        name: "Pole Fitness"
                    },
                    {
                        name: "Tramp-Wall"
                    },
                    {
                        name: "Acro Gymnastics"
                    }
                ]
            },
            {
                name: "Cheerleading",
                subItems: [
                    {
                        name: "Cheerleading"
                    },
                    {
                        name: "Dance"
                    }
                ]
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
                        name: "Bachelorette Parties"
                    },
                    {
                        name: "Workshops"
                    },
                    {
                        name: "Corporate Parties"
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