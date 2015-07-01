/*
 * jQuery expandable list plugin.
 *
 * Copyright © 2015, David Lehnen, Interactive Pioneers GmbH
 */

;(function($) {

  'use strict';

  var pluginName = 'iptExpandableList';
  var defaults = {
    visibleItems: 5
  };

  /**
   * IPTExpandableList
   * @constructor
   * @param {object} element - jQuery element
   * @param {object} options - plugin options
   */
  function IPTExpandableList(element, options) {

    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    this.init();

  }

  IPTExpandableList.prototype = {

    /**
     * initialize IPTExpandableList
     * @returns {undefined}
     */
    init: function() {

      this.addEventListeners();

    },

    /**
     * adds event handlers
     * @returns {undefined}
     */
    addEventListeners: function() {

      this.window.on('scroll' + '.' + this._name, null, this, this.handleScroll);

    },

    /**
     * destroy IPTExpandableList
     * @returns {undefined}
     */
    destroy: function() {
      // this.$element.off('click' + '.' + this._name);
      this.$element.removeData('plugin_' + pluginName);
    }

  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new IPTExpandableList(this, options));
      }
    });
  };

})(jQuery);
