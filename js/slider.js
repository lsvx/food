"use strict";
var _ = require('lodash'),
    $ = require('jquery'),
    proteins = [
        {
            name: 'chickpea',
            rating: 0.25,
            src: 'http://img.chinaypages.com/photo/11632556/Chickpea.jpg'
        },
        {
            name: 'pork',
            rating: 0.5,
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlOl6gMyL5gIzf5JFhPHZ5DYGF5CxWr-aVwM4W95R5tKfxuPs-'
        }
    ];

for (var i = 0; i < proteins.length; i++) {
    proteins[i].rating = proteins[i].rating * 100;
}

/**
 * Create a new comparison.
 * @constructor
 * @param {HTMLNode} el - HTML elememnt to hold the comparison
 * @returns a new Slider instance
 */
var Slider = function(el) {
    if (!(this instanceof Slider)) return new Slider(el);

    this.parent = $(el);
    /**
     * @property {object} el - A jQuery element that holds the comparison
     */
    this.el = $('<div class="slider">');

    return this;
};

Slider.prototype.render = function() {
    var context = {
        selected: this.selected,
        proteins: proteins
    };
    this.parent.empty();
    this.el.empty().appendTo(this.parent);
    this.el.append(this.template(context));
    $('a[data-protein="' + this.selected + '"]').addClass('slider-avatar--selected');
    return this;
};

Slider.prototype.select = function(protein) {
    this.selected = protein;
    this.el.find('.slider-avatar--selected').removeClass('slider-avatar--selected');
    $('a[data-protein="' + this.selected + '"]').addClass('slider-avatar--selected');
    return this;
};
Slider.prototype.template = require('./templates/slider.handlebars');

module.exports = Slider;
