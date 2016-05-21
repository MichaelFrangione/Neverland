/**
 * Created by Mike on 2016-04-09.
 */
(function () {

    app.directive("navHeader",

        function navHeader() {

            return {
                restrict: "E",
                templateUrl: "html/directives/header.html"
            }
        });

    app.directive("navFooter",

        function navFooter() {

            return {
                restrict: "E",
                templateUrl: "html/directives/footer.html"
            }
        });

    app.directive("landing",

        function landing() {
            return {
                restrict: "E",
                scope: {
                    className: "@"
                },
                templateUrl: "html/directives/landing.html"
            }
        });

    app.directive("latestNews",

        function latestNews() {
            return {
                restrict: "E",
                templateUrl: "html/directives/latest-news.html"
            }
        });

    app.directive("googleMap",

        function googleMap() {
            return {
                restrict: "E",
                templateUrl: "html/directives/google-map.html",
                controller: function ($scope) {

                    var mapDiv = document.getElementById('map');
                    var latLong =  {
                        lat: 43.731548,
                        lng: -79.762418
                    };

                    var options = {
                        center: latLong,
                        zoom: 15,
                        scrollwheel: false,
                        navigationControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        draggable: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };

                    var map = new google.maps.Map(mapDiv, options);

                    var marker = new google.maps.Marker({
                        position: latLong,
                        map: map,
                        // animation:google.maps.Animation.BOUNCE
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content:"Neverland Arts and Entertainment"
                    });

                    infoWindow.open(map,marker);
                }
            }
        });

})();
