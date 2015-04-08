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
    var app = angular.module('gemstore', []);



    /**
     *
     * our main controller
     *
     */
    app.controller('StoreController', function() {

        // products is now a property of our controller
        this.products = gems;

    });
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



    /**
     *
     * gem products - javascript objects
     * this is what we are selling in our store
     *
     */
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2, //using the currency filter to display this better
            description: 'Some gems have hidden qualities beyond their luster, beyond' +
            ' their shine... Dodeca is one of those gems.',
            canPurchase: true, // determines if we show add to cart button
            soldOut: false, // determines if we show this product at all
            images: [
                {
                    full: 'img/gem-01.gif',
                    thumb: 'img/gem-01.gif'
                }
                // this is an image object
                // repo for images: https://github.com/suryatech/codeschool-shaping-up-with-angular/
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"

                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'We need a description',
            canPurchase: true, // determines if we show add to cart button
            soldOut: false, // determines if we show this product at all
            images: [
                {
                    full: 'img/gem-02.gif',
                    thumb: 'img/gem-02.gif'
                }
            ],
            reviews: [
                {
                    stars: 3,
                    body: "I think this gem was just OK, could Honnestly use more shine, IMO.",
                    author: "JimmyDean@sausage.com"

                },
                {
                    stars: 4,
                    body: "Any gem with 12 faces is for me!",
                    author: "gemsRock@alyssaNicoll.com"
                }
            ]
        }
    ];
    // end of our gems products array


})();
// end closure
