/**
 * product.js
 * our custom product directives separated into it's own module
 *
 */
'use strict'; // to help pickup errors



(function() {

    // this is a separate module named store-products
    // our main module 'gemstore' depends on this module
    var app = angular.module('store-products', []);



    /**
     *
     * a custom directive for product title:
     * <product-title></product-title>
     *
     */
    app.directive('productTitle', function() {

        return {
            restrict: 'E', // type of directive, E for element
            // we could have also used an attibute directive (A)
            // eg: <h3 product-title></h3>

            templateUrl: 'partials/product-title.html'
        };

    });
    //end of custom directive



    /**
     *
     * a custom directive with controller for product panels:
     * <product-panels></product-panels>
     *
     */
    app.directive('productPanels', function() {

        return {
            restrict: 'E',
            templateUrl: 'partials/product-panels.html',
            controller: function() {

                // setting tab as a property of this controller
                // we can refer to it using "panel.tab" - panel is an alias of the controller name
                this.tab = 1;

                // display the proper tab
                this.selectTab = function(setTab) {

                    this.tab = setTab;
                };

                // apply active class to current tab
                this.isSelected = function(checkTab) {

                    return this.tab === checkTab;
                };

            },
            controllerAs: 'panel'
        };

    });
    //end of custom directive

})();