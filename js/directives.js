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

})();
