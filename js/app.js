/**
 *
 * app.js
 * our main application code
 *
 */
'use strict'; // to help pickup errors



// wrapping our entire application in a closure
(function(){

    /**
     *
     * setting up our app
     *
     */
    var app = angular.module('gemstore', ['store-products']);
    // depends on the store-products module from product.js



    /**
     *
     * our main controller
     *
     */
    app.controller('StoreController', ['$http', function($http) {
    // we have specified the service $http as a dependency for
    // this controller - it's also an argument passed into the
    // controller - dependency injection

        var store = this;

        store.products = [ ];

        // using the $http service to fetch JSON of our products
        $http.get('products.json').success(function(data) {

           store.products = data;
        });

    }]);
    // end main controller



    /**
     *
     * review controller
     * used for submitting product reviews
     *
     */
    app.controller('ReviewController', function() {

        //empty review object
        this.review = {};

        //function to submit reviews
        this.addReview = function(product) {

            // pushing the controllr's review (this.review) onto the reviews array
            product.reviews.push(this.review);

            //clear out the form and hide live preview
            this.review = {};
        };

    });
    //end review controller

})();
// end closure
