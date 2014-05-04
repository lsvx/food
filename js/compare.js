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
    var i, pro;
    this.parent.empty();
    this.el.empty().appendTo(this.parent);

    for (i = 0; i < this.proteins.length; i++) {
        pro = this.proteins[i];

        this.el.append(this.proteinTemplate(pro));
    }

    $('.comparison-item').css('width', 100/this.proteins.length + '%');
    return this;
};

Compare.prototype.proteinTemplate = require('./templates/comparison.handlebars');

module.exports = Compare;
