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

})();
