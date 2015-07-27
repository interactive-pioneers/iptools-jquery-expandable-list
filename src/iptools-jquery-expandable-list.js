/*
 * jQuery expandable list plugin.
 *
 * Copyright © 2015, David Lehnen, Interactive Pioneers GmbH
 */

;(function($) {

  'use strict';

  var pluginName = 'iptExpandableList';
  var defaults = {
    visibleItems: 5,
    showMoreButtonLabel: 'Show more',
    showLessButtonLabel: 'Show less',
    showMoreButtonClass: 'button--show-more',
    showLessButtonClass: 'button--show-less',
    initializedClass: 'initialized',
    animationDuration: 500
  };

  /**
   * IPTExpandableList
   * @constructor
   * @param {object} element - jQuery element
   * @param {object} options - plugin options
   */
  function IPTExpandableList(element, options) {

    this.$element = $(element);
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

      this.$button = $('<button/>')
        .addClass(this.settings.showMoreButtonClass)
        .text(this.settings.showMoreButtonLabel);

      var $items = this.$element.children('li');

      if ($items.length > this.settings.visibleItems) {
        $items
          .filter(':gt(' + (this.settings.visibleItems - 1) + ')')
          .wrapAll('<ul/>')
          .parent()
          .wrapAll('<li/>')
          .parent()
          .hide();
        this.$element.after(this.$button);
      }

      this.addEventListeners();

      this.$element.addClass(this.settings.initializedClass);

    },

    /**
     * toggle list items
     * @returns {undefined}
     */
    toggle: function(event) {

      var self = event.data;
      self.$element
        .children('li')
        .last()
        .slideToggle(self.settings.animationDuration);

      if (self.$button.hasClass(self.settings.showLessButtonClass)) {
        self.$button
          .removeClass(self.settings.showLessButtonClass)
          .addClass(self.settings.showMoreButtonClass)
          .text(self.settings.showMoreButtonLabel);
      } else {
        self.$button
          .removeClass(self.settings.showMoreButtonClass)
          .addClass(self.settings.showLessButtonClass)
          .text(self.settings.showLessButtonLabel);
      }

    },

    /**
     * adds event handlers
     * @returns {undefined}
     */
    addEventListeners: function() {

      this.$button.on('click' + '.' + this._name, null, this, this.toggle);

    },

    /**
     * destroy IPTExpandableList
     * @returns {undefined}
     */
    destroy: function() {
      this.$element.off('click' + '.' + this._name);
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
