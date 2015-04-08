/**
 * app.js
 * our main application code
 *
 *
 */
'use strict'; // to help pickup errors


// wrapping our entire application in a closure
(function(){

    // setting up our app
    var app = angular.module('gemstore', []);

    // main controller
    app.controller('StoreController', function() {

        // product is a property of our controller
        this.products = gems;

    });
    // end main controller

    // panel controller
    app.controller('PanelController', function() {

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

    });



    // our gem products: javascript objects
    // this is what we are selling in our store
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
                },
                // this is an image object
                // repo for images: https://github.com/suryatech/codeschool-shaping-up-with-angular/
                {

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
            ]
        }
    ]; // end of our gems products array

})();
