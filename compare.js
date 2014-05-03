(function() {
    "use strict";

    /**
     * Create a new comparison.
     * @constructor
     * @param {HTMLNode} el - HTML elememnt to hold the comparison
     * @param {array} proteins - An array of proteins to compare
     * @returns a new Compare instance
     */
    var Compare = function(el, proteins) {
        if (!(this instanceof Compare)) return new Compare(el, proteins);

        /**
         * @property {object} el - A jQuery element that holds the comparison
         */
        this.el = $('<div class="comparison">').appendTo(el);

        /**
         * @property {array} proteins - The proteins for this comparison
         */
        this.proteins = proteins;

        return this.render();
    };

    Compare.prototype.render = function() {
        var i, pro;
        this.el.empty();

        for (i = 0; i < this.proteins.length; i++) {
            pro = this.proteins[i];

            this.el.append(this.proteinTemplate(pro));
        }

        return this;
    };

    Compare.prototype.proteinTemplate = function(protein) {
        return _.template('<div class="comparison-item"><div class="comparison-head"><h1><%- name %></h1><img src="<%- icon %>" /></div><div class="comparison-criterion"><span class="comparison-text">$<%- price %>per pound</span></div><div class="comparison-criterion"><span class="criterion-title">Protein Content</span><img class="comparison-graph" src="<%- graphSRC %>" /><span class="comparison-text"><%- protein %>gr per 100gr</span></div></div>', protein);
    };

    window.Compare = Compare;
})();
