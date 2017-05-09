'use strict';
/* global expect */
(function() {
  describe('iptExpandableList', function() {

    var pluginName = 'plugin_iptExpandableList';
    var config = {
      visibleItems: 2
    };
    var object = null;
    var selector = '.list';

    describe('init', function() {

      beforeEach(function() {
        object = $(selector).iptExpandableList(config);
      });

      it('expected to construct object', function() {
        return expect(object).to.be.an.object;
      });

      it('expected to set number of list items to ' + config.visibleItems, function() {
        return expect(object.data(pluginName).settings.visibleItems).to.equal(config.visibleItems);
      });

    });

  });
})();
