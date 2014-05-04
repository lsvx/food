"use strict";
var _ = require('lodash'),
    $ = require('jquery');

/**
 * Create a new comparison.
 * @constructor
 * @param {HTMLNode} el - HTML elememnt to hold the comparison
 * @param {array} proteins - An array of proteins to compare
 * @returns a new Slider instance
 */
var Slider = function(el, proteins) {
    if (!(this instanceof Slider)) return new Slider(el);

    this.parent = $(el);
    /**
     * @property {object} el - A jQuery element that holds the comparison
     */
    this.el = $('<div class="slider">');

    for (var key in proteins) {
        proteins[key].rating = 100 - proteins[key].rating * 100;
    }
    /**
     * @property {array} proteins - The proteins for this comparison
     */
    this.proteins = proteins;

    return this;
};

Slider.prototype.render = function() {
    var context = {
        selected: this.selected,
        proteins: this.proteins
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
