"use strict";
var _ = require('lodash'),
    $ = require('jquery');
/**
 * Create a new comparison.
 * @constructor
 * @param {HTMLNode} el - HTML elememnt to hold the comparison
 * @param {array} proteins - An array of proteins to compare
 * @returns a new Compare instance
 */
var Compare = function(el, proteins) {
    if (!(this instanceof Compare)) return new Compare(el, proteins);

    this.parent = $(el);
    $(el).empty();
    /**
     * @property {object} el - A jQuery element that holds the comparison
     */
    this.el = $('<div class="comparison">');

    /**
     * @property {array} proteins - The proteins for this comparison
     */
    this.proteins = proteins;

    return this.render();
};

Compare.prototype.render = function() {
    this.parent.empty();
    this.el.empty().appendTo(this.parent);
    this.el.append(this.template({proteins: this.proteins}));

    $('.comparison-item').css('width', 100/this.proteins.length + '%');
    return this;
};

Compare.prototype.template = require('./templates/comparison.handlebars');

module.exports = Compare;
